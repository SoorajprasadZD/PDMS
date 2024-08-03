import axios from "axios";

export const fetchUnAuthorisedInsurances = async (patientId,hospitalId) => {
    try {
      const response = await axios.get(`http://localhost:5000/hospital/fetch-unauthorized-insurances?patientId=${patientId}&hospitalId=${hospitalId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };