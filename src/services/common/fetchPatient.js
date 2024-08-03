import axios from "axios";

export const fetchPatientProfile = async (patientId) => {
    try {
      const response = await axios.get(`http://localhost:5000/common/fetch-patient-profile?patientId=${patientId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };