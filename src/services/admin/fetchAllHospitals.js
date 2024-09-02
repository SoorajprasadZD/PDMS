import axios from "axios";

export const fetchAllHospitals = async () => {
    try {
      const response = await axios.get("http://localhost:5000/doctors/");
      return response.data.data;
    } catch (error) {
      throw error.response.data;
    }
  };