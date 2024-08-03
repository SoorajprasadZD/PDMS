import axios from "axios";

export const fetchAuthorisedInsurances = async (patientId,hospitalId) => {
    try {
      const response = await axios.get(`http://localhost:5000/common/fetch-authorized-insurances?patientId=${patientId}&patientIdAsSender=${hospitalId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };