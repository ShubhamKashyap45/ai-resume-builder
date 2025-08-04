import React, { useEffect } from "react";
import ResumeForm from "../pages/ResumeForm";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ResumeFormPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const resumeData = location.state?.resumeData;

  useEffect(() => {
    if (!resumeData) {
      toast.error("No resume data found!");
      navigate("/generate-resume");
    }
  }, [resumeData, navigate]);

  if (!resumeData) {
    return null;
  }

  const handleFormSubmit = (data) => {
    console.log("Final form submitted:", data);
    toast.success("Form submitted!");
    navigate("/preview-resume", { state: { resumeData: data } });
  };

  return <ResumeForm defaultData={resumeData} onSubmit={handleFormSubmit} />;
};

export default ResumeFormPage;
