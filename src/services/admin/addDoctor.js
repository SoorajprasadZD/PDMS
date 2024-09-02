import axios from "axios";

export const adminAddDoctor = async (data) => {
    try {
      const { id, role } = JSON.parse(localStorage.getItem("auth"));
      const response = await axios.post("http://localhost:5000/doctors/", data, {
        headers: {
          id, role
        }
      });
      return response.data;
    } catch (error) {
      console.log(error.response.data)
      return error.response.data.response;
    }
  };