/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";

const hospitalImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYhdQu0h19z4DvCi74Fgul3jX3tNL6QqQYaqQwwoEu-Uz1oP-XKUopb7teZoLQjGI7HDp6XwXEPyE&usqp=CAU&ec=48665701";

function Hospital({ image, name, email }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={image} alt={name} size="sm" variant="rounded" />
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {name}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="secondary">
          {email}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

const hospitalsData = (hospitalsArray) => {
  
  const columns = [
    { name: "hospital", align: "left" },
    { name: "phone", align: "center" },
    { name: "state", align: "center" },
    { name: "wallet", align: "center" },
    { name: "date", align: "center" },
  ]

  const rows = hospitalsArray.map((hospital, key) => {
    return {
      hospital: <Hospital key={key} image={hospitalImageUrl} name={hospital.name} email={hospital.email} />,
      state: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          {hospital.state}
        </ArgonTypography>
      ),
      phone: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
         {hospital.phone}
        </ArgonTypography>
      ),
      wallet: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          {hospital.wallet}
        </ArgonTypography>
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          {(hospital.createdAt).substring(0, 10)}
        </ArgonTypography>
      ),
    }
  })

  return {columns,rows}
};

export default hospitalsData;
