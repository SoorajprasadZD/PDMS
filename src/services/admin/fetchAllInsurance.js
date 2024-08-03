import axios from "axios";

export const fetchAllInsurances = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/fetch-all-insurances");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };