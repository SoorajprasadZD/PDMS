import axios from "axios";

export const fetchAuthorisedPatients = async (hospitalId) => {
  try {
    const { id, role } = JSON.parse(localStorage.getItem("auth"));
    console.log(id, role);
    const response = await axios.get(`http://localhost:5000/doctors/authorized-patients`, {
      headers: {
        id,
        role,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error.response.data.data;
  }
};
