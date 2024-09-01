import axios from "axios";

export const adminLoginService = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/admin/sign-in", data);
      localStorage.setItem("auth", JSON.stringify({ role: response.data.data.role, id: response.data.data.id }));
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const patientLoginService = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/patient/sign-in", data);
      localStorage.setItem("auth", JSON.stringify({ role: response.data.role, id: response.data.id }));
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  export const doctorLoginService = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/doctors/sign-in", data);
      console.log(response)
      localStorage.setItem("auth", JSON.stringify({ role: response.data.data.role, id: response.data.data.doctorId }));
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  export const insuranceLoginService = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/insurance/sign-in", data);
      localStorage.setItem("auth", JSON.stringify({ role: response.data.role, id: response.data.id }));
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
