import axios from "axios";

export const fetchAllHospitals = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/fetch-all-hospitals");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };