import axios from "axios";

export const fetchPatientProfile = async (patientId) => {
    try {
      const response = await axios.get(`http://localhost:5000/patients/${patientId}/profile`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };