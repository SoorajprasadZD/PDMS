import axios from "axios";

export const verifyFaceService = async (data) => {
  try {
    const { id, role } = JSON.parse(localStorage.getItem("auth"))
    const response = await axios.post("http://localhost:5000/common/authorize-face", data, {
      headers: {
        id,
        role,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
