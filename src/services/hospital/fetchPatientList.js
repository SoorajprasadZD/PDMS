import axios from "axios";

export const fetchPatientReports = async (patientId,hospitalId) => {
    try {
      const response = await axios.get(`http://localhost:5000/common/fetch-patient-reports?patientId=${patientId}&hospitalIdAsSender=${hospitalId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };