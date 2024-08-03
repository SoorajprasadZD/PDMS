import axios from "axios";

export const fetchAuthorisedPatients = async (hospitalId) => {
    try {
      const response = await axios.get(`http://localhost:5000/hospital/fetch-authorized-patients/?hospitalId=${hospitalId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };