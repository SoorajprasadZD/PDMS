import axios from "axios";

export const fetchReportPdf = async (data) => {
  try {
    const response = await axios.post("http://localhost:5000/patient/generate-report-pdf", data, {
      responseType: "blob",
    });
    return response.data;
  } catch (error) {
    throw error.response;
  }
};
