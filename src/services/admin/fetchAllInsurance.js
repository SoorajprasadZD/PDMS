import axios from "axios";

export const fetchAllInsurances = async () => {
    try {
      const { id, role } = JSON.parse(localStorage.getItem("auth"));
      const response = await axios.get("http://localhost:5000/insurances/", {
        headers: {
          id, role
        }
      });
      return response.data.data;
    } catch (error) {
      throw error.response.data;
    }
  };