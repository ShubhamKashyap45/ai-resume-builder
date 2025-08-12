import React, { useState } from "react";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
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

      toast.success("Resume Generated Successfully", {
        duration: 3000,
        position: "top-center",
      });

      navigate("/resume-form", { state: { resumeData: response.data } });
    } catch (error) {
      toast.error("Error while Generating Resume!");
    } finally {
      setLoading(false);
      setDescription("");
    }
  };

  const handleClear = () => {
    setDescription("");
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3 text-indigo-700">
        <FaRobot className="text-indigo-500" />
        AI Resume Generator
      </h1>
      <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl text-center">
        Describe your experience and skills below. Our AI will craft a
        professional resume summary for you.
      </p>

      {/* Textarea */}
      <textarea
        disabled={loading}
        className="textarea textarea-bordered w-full max-w-4xl h-56 mb-6 resize-none text-base leading-relaxed bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder="e.g. Experienced Java Developer skilled in Spring Boot, React, and REST APIs..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          disabled={loading}
          onClick={handleGenerate}
          className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-6 text-base font-semibold flex items-center gap-2 rounded-lg"
        >
          {loading && <span className="loading loading-spinner"></span>}
          <FaPaperPlane /> Generate
        </button>
        <button
          onClick={handleClear}
          className="btn border border-gray-400 text-gray-700 hover:bg-gray-100 px-6 text-base font-semibold flex items-center gap-2 rounded-lg"
        >
          <FaTrash /> Clear
        </button>
      </div>
    </div>
  );
};

export default GenerateResume;
