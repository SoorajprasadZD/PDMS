import axios from "axios";

export const authorizeHospital = async (data) => {
    try {
      const response = await axios.put("http://localhost:5000/hospital/authorize-hospital",data);
      return response.data;
    } catch (error) {
      return error.response.data.response;
    }
  };