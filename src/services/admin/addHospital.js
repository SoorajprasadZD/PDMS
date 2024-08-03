import axios from "axios";

export const adminAddHospital = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/admin/create-hospital",data);
      return response.data;
    } catch (error) {
      return error.response.data.response;
    }
  };