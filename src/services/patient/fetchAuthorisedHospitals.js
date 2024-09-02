import axios from "axios";

export const fetchAuthorisedHospitals = async (patientId) => {
  try {
    const response = await axios.get(`http://localhost:5000/patients/${patientId}/authorized-doctors`);
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
  };