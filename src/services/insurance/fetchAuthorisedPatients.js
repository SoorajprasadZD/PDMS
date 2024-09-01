import axios from "axios";

export const fetchAuthorisedPatients = async () => {
    try {
      const { id, role } = JSON.parse(localStorage.getItem("auth"));
      const response = await axios.get(`http://localhost:5000/insurances/authorized-patients`,{
        headers:{
          id,role
        }
      });
      return response.data.data;
    } catch (error) {
      throw error.response.data;
    }
  };