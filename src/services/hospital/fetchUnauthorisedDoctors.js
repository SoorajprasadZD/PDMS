import axios from "axios";

export const fetchUnAuthorisedDoctors = async (patientId ) => {
  try {
    const { id, role } = JSON.parse(localStorage.getItem("auth"));
    const response = await axios.get(
      `http://localhost:5000/patients/${patientId}/unauthorized-doctors`,
      {
        headers: {
          id,
          role,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};
