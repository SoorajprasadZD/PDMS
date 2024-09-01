import axios from "axios";

export const fetchUnAuthorisedInsurances = async (patientId) => {
  try {
    const { id, role } = JSON.parse(localStorage.getItem("auth"));
    const response = await axios.get(
      `http://localhost:5000/patients/${patientId}/unauthorized-insurances`,
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
