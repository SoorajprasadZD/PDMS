import axios from "axios";

export const authorizeInsuranceCompany = async (data) => {
    try {
      const response = await axios.put("http://localhost:5000/hospital/authorize-insurance-company",data);
      return response.data;
    } catch (error) {
      return error.response.data.response;
    }
  };