import PropTypes from "prop-types";
import Webcam from "react-webcam";
import "./index.css";

export const CameraModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modalBackground">
      <div className="modal">
        <span className="modalClose" onClick={onClose}>
          &times;
        </span>
        <Webcam
          id="webcam"
          className="camera-video"
          screenshotFormat="image/jpeg"
          screenshotQuality={1}
          mirrored={true}
          width={570}
          height={700}
          videoConstraints={{ facingMode: "user" }}
        />
      </div>
    </div>
  );
};

CameraModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
