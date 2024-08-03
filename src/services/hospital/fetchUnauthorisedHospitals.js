import axios from "axios";

export const fetchUnAuthorisedHospitals = async (patientId,hospitalId) => {
    try {
      const response = await axios.get(`http://localhost:5000/hospital/fetch-unauthorized-hospitals?patientId=${patientId}&hospitalId=${hospitalId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };