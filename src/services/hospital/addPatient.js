import axios from "axios";
import { BASE_URL } from "config/config";

export const createPatient = async (data) => {
    try {
      const { id, role } = JSON.parse(localStorage.getItem("auth"));
      const response = await axios.post(`${BASE_URL}/patients/`,data, {headers: {
        id,
        role,
      }});
      return response.data;
    } catch (error) {
      return error.response.data.response;
    }
  };