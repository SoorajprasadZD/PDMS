import axios from "axios";

export const fetchAuthorisedInsurances = async (patientId) => {
  try {
    const response = await axios.get(`http://localhost:5000/patients/${patientId}/authorized-insurances`);
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
  };