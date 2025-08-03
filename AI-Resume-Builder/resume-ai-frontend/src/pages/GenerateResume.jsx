import React, { useState } from "react";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { generateResume } from "../api/ResumeService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GenerateResume = () => {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const handleGenerate = async () => {
    console.log("Generating resume from:", description);

    try {
      setLoading(true);
      const response = await generateResume(description);
      console.log(response.data);

      toast.success("Resume Generate Successfully", {
        duration: 3000,
        position: "top-center",
      });

      navigate("/resume-form", { state: { resumeData: response.data } });
    } catch (error) {
      toast.error("Error while Generation Resume!");
    } finally {
      setLoading(false);
      setDescription("");
    }
  };

  const handleClear = () => {
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl bg-base-100 rounded-2xl shadow-xl p-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 flex items-center justify-center gap-3">
          <FaRegFilePdf className="text-primary" /> AI Resume Generator
        </h1>
        <p className="text-center text-base text-gray-500 mb-8 max-w-xl mx-auto">
          Describe your experience and skills below. Our AI will craft a resume
          summary for you.
        </p>

        <textarea
          disabled={loading}
          className="textarea textarea-bordered w-full h-56 mb-6 resize-none text-base leading-relaxed bg-base-100"
          placeholder="e.g. Experienced Java Developer skilled in Spring Boot, React, and REST APIs..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <div className="flex justify-center gap-4">
          <button
            disabled={loading}
            onClick={handleGenerate}
            className="btn btn-primary px-6 text-base font-semibold flex items-center gap-2"
          >
            {loading && <span className="loading loading-spinner"></span>}
            <FaPaperPlane /> Generate
          </button>
          <button
            onClick={handleClear}
            className="btn btn-outline px-6 text-base font-semibold flex items-center gap-2"
          >
            <FaTrash /> Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateResume;
