import axios from "axios";

export const adminAddInsurance = async (data) => {
    try {
      const { id, role } = JSON.parse(localStorage.getItem("auth"));
      const response = await axios.post("http://localhost:5000/insurances",data, {
        headers: {
          id, role
        }
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };