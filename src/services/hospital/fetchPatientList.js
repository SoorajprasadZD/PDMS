import axios from "axios";

export const fetchPatientReports = async (patientId,hospitalId) => {
    try {
      const response = await axios.get(`http://localhost:5000/patients/${patientId}/report`);
      return response.data.data;
    } catch (error) {
      throw error.response.data;
    }
  };