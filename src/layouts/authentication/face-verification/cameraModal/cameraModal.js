import { useRef } from "react";
import PropTypes from "prop-types";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import "./cameraModal.css";

export const CameraModal = ({ isOpen, onClose }) => {
  const webcamRef = useRef();

  const handleStreamVideo = async (e) => {
    await faceapi.nets.tinyFaceDetector.loadFromUri("/facenet/models/tiny_face_detector");
    const intervalId = setInterval(async () => {
      const faces = await faceapi.detectAllFaces(
        webcamRef.current.video,
        new faceapi.TinyFaceDetectorOptions()
      );
      if (faces) {
        console.log(faces);
        clearInterval(intervalId);
      }
    }, 100);
  };

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
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          screenshotQuality={1}
          mirrored={true}
          width={570}
          height={700}
          videoConstraints={{ facingMode: "user" }}
          onUserMedia={(e) => handleStreamVideo(e)}
        />
      </div>
    </div>
  );
};

CameraModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
