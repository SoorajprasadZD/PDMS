import axios from "axios";

export const fetchUnusedAddresses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/common/fetch-unused-addresses");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };