import axios from "axios";

export const fetchAuthorisedPatients = async (insuranceCompanyId) => {
    try {
      const response = await axios.get(`http://localhost:5000/insurance/fetch-authorized-patients/?insuranceCompanyId=${insuranceCompanyId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };