import axios from "axios";

export const fetchAuthorisedHospitals = async (patientId,hospitalId) => {
    try {
      const response = await axios.get(`http://localhost:5000/common/fetch-authorized-hospitals?patientId=${patientId}&patientIdAsSender=${hospitalId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };