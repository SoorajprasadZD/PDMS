import axios from "axios";

export const registerFaceService = async (data) => {
  try {
    const response = await axios.post("http://localhost:5000/common/verify-link", data);
    return response.data;
  } catch (error) {
    throw error.response;
  }
};
