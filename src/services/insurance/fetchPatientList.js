import axios from "axios";

export const fetchPatientReports = async (patientId,insuranceCompanyIdAsSender) => {
    try {
      const response = await axios.get(`http://localhost:5000/common/fetch-patient-reports?patientId=${patientId}&insuranceCompanyIdAsSender=${insuranceCompanyIdAsSender}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };