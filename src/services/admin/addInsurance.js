import axios from "axios";

export const adminAddInsurance = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/admin/create-insurance-company",data);
      return response.data;
    } catch (error) {
      return error.response.data.response;
    }
  };