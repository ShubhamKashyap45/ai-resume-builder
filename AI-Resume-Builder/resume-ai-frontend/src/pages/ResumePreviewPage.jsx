import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import toast from "react-hot-toast";
import ResumeTemplate from "../components/ResumeTemplate";

const ResumePreviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const resumeData = location.state?.resumeData;

  const componentRef = useRef();

  const handleDownload = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${resumeData?.personalInformation?.fullName}_Resume`,
    onAfterPrint: () => toast.success("Resume downloaded!"),
    pageStyle: `
      @page {
        size: A4;
        margin: 1cm;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
        }
      }
    `,
  });

  if (!resumeData) {
    toast.error("No resume data found!");
    navigate("/generate-resume");
    return null;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Resume Preview</h1>

      <div className="flex justify-end gap-4 mb-4">
        <button
          className="btn btn-outline"
          onClick={() =>
            navigate("/resume-form", { state: { resumeData: resumeData } })
          }
        >
          Edit
        </button>
        <button className="btn btn-primary" onClick={handleDownload}>
          Download PDF
        </button>
      </div>

      <div className="bg-white p-8 shadow-md rounded-lg">
        <div ref={componentRef}>
          <ResumeTemplate data={resumeData} />
        </div>
      </div>
    </div>
  );
};

export default ResumePreviewPage;
