import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import { ToastContainer, toast } from "react-toastify";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/FaceVerificationIllustrationLayout";
import { adminLoginService } from "services/loginService";
import { hospitalLoginService } from "services/loginService";
import { patientLoginService } from "services/loginService";
import { insuranceLoginService } from "services/loginService";

import { useNavigate } from "react-router-dom";

import { setOpenConfigurator } from "context";

// Argon Dashboard 2 MUI contexts
import { useArgonController, setAuth } from "context";
import { CameraModal } from "./cameraModal/cameraModal";
import CircularProgress from "@mui/material/CircularProgress";

Illustration.propTypes = {
  role: PropTypes.string,
  title: PropTypes.string,
};

function Illustration() {
  const [id, setId] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
  const [screenshot, setScreenshot] = useState(null);
  const [faces, setFaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setId(urlParams.get("id"));
    setRole(urlParams.get("role"));
    setEmail(urlParams.get("email"));
  }, []);

  const handleCameraData = (screenshot, faces) => {
    setScreenshot(screenshot);
    setFaces(faces);
    setIsLoading(false)
    toast("Image added");
  };

  const handleSubmit = async () => {
    if (!email || !id || !role) {
      toast("Invalid URL");
    } else {
      switch (role) {
        case "Admin":
          try {
            const response = await adminLoginService({ email, password });
            const auth = JSON.parse(localStorage.getItem("auth"));
            setAuth(dispatch, auth);
            navigate("/admin/hospitals");
          } catch (error) {
            toast(error.message);
          }
          break;
        case "Patient":
          try {
            const response = await patientLoginService({ email, password });
            const auth = JSON.parse(localStorage.getItem("auth"));
            await setAuth(dispatch, auth);
            navigate(`/patient/profile/${auth.id}`);
          } catch (error) {
            toast(error.message);
          }
          break;
        case "Hospital":
          try {
            const response = await hospitalLoginService({ email, password });
            const auth = JSON.parse(localStorage.getItem("auth"));
            await setAuth(dispatch, auth);
            navigate("/hospital/patients");
          } catch (error) {
            toast(error.message);
          }
          break;
        case "Insurance":
          try {
            const response = await insuranceLoginService({ email, password });
            const auth = JSON.parse(localStorage.getItem("auth"));
            await setAuth(dispatch, auth);
            navigate("/insurance/patients");
          } catch (error) {
            toast(error.message);
          }
          break;
        default:
          toast("user login faild");
          break;
      }
    }
  };

  return (
    <>
      <CameraModal
        isOpen={isCameraModalOpen}
        onClose={() => setIsCameraModalOpen(false)}
        sendDataToParent={handleCameraData}
        startProcessing={()=>{setIsLoading(true)}}
      />
      <IllustrationLayout title={`Face Verification`} description="Verify your face">
        <ArgonBox component="form" role="form">
          <ArgonBox mb={2}>
            <ArgonInput type="email" placeholder="Email" size="large" value={email} disabled />
          </ArgonBox>
          <ArgonBox mb={2} style={{position:"relative"}}>
            <ArgonButton
              color="info"
              size="large"
              fullWidth
              onClick={() => setIsCameraModalOpen(true)}
              disabled={isLoading}
            >
              Open Camera
            </ArgonButton>
            {isLoading&&<CircularProgress size={42} style={{position:"absolute", right:-55}} />}
          </ArgonBox>
          <ArgonBox mt={4} mb={1}>
            <ArgonButton
              color="info"
              size="large"
              fullWidth
              onClick={() => {
                handleSubmit();
              }}
            >
              Continue
            </ArgonButton>
          </ArgonBox>
          <ArgonBox mt={3} textAlign="center"></ArgonBox>
        </ArgonBox>

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </IllustrationLayout>
    </>
  );
}

export default Illustration;
