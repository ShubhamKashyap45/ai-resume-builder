import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import toast from "react-hot-toast";

const ResumeForm = ({ defaultData, onSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      personalInformation: {},
      summary: "",
      skills: [],
      experience: [],
      education: [],
      certifications: [],
      projects: [],
      languages: [],
      achievements: [],
    },
  });

  useEffect(() => {
    if (defaultData) {
      reset(defaultData);
    }
  }, [defaultData, reset]);

  const createFieldArray = (name) => useFieldArray({ control, name });

  const fields = {
    skills: createFieldArray("skills"),
    experience: createFieldArray("experience"),
    education: createFieldArray("education"),
    certifications: createFieldArray("certifications"),
    projects: createFieldArray("projects"),
    languages: createFieldArray("languages"),
    achievements: createFieldArray("achievements"),
  };

  const renderInput = (name, label, type = "text", isRequired = false) => {
    const fieldId = name.replace(/\./g, "_");

    // Auto-detect date fields
    if (
      name.toLowerCase().includes("year") ||
      name.toLowerCase().includes("durationstart") ||
      name.toLowerCase().includes("durationend")
    ) {
      type = "date";
    }

    const error = name
      .split(".")
      .reduce((acc, key) => (acc && acc[key] ? acc[key] : null), errors);

    return (
      <div className="form-control w-full">
        <label className="label" htmlFor={fieldId}>
          <span className="label-text">{label}</span>
        </label>
        <input
          id={fieldId}
          type={type}
          {...register(
            name,
            isRequired ? { required: `${label} is required` } : {}
          )}
          className={`input input-bordered w-full ${
            error ? "input-error" : ""
          }`}
        />
        {error && <p className="text-error text-sm mt-1">{error.message}</p>}
      </div>
    );
  };

  const renderFieldArray = (label, key, keys) => {
    const f = fields[key];
    return (
      <div className="form-control w-full mb-8">
        <h3 className="text-xl font-bold mb-2">{label}</h3>
        {f.fields.map((field, index) => (
          <div
            key={field.id}
            className="border border-base-300 p-4 rounded-lg mb-4"
          >
            {keys.map((k) => (
              <div key={`${field.id}-${k}`}>
                {renderInput(
                  `${key}.${index}.${k}`,
                  k.charAt(0).toUpperCase() + k.slice(1)
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => f.remove(index)}
              className="btn btn-sm btn-error mt-2"
            >
              <FaTrash className="mr-2" /> Remove {label}
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            f.append(keys.reduce((acc, k) => ({ ...acc, [k]: "" }), {}))
          }
          className="btn btn-sm btn-secondary mt-2"
        >
          <FaPlusCircle className="mr-2" /> Add {label}
        </button>
      </div>
    );
  };

  const onError = (formErrors) => {
    toast.error("Please fix the errors in the form before submitting.");
    console.log("Form validation errors:", formErrors);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 flex items-center justify-center gap-2">
        <BiBook className="text-accent" /> Resume Form
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="space-y-8 bg-base-100 p-6 rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderInput(
            "personalInformation.fullName",
            "Full Name",
            "text",
            true
          )}
          {renderInput("personalInformation.email", "Email", "email", true)}
          {renderInput(
            "personalInformation.phoneNumber",
            "Phone Number",
            "tel",
            true
          )}
          {renderInput("personalInformation.location", "Location")}
          {renderInput("personalInformation.linkedin", "LinkedIn", "url")}
          {renderInput("personalInformation.gitHub", "GitHub", "url")}
          {renderInput("personalInformation.portfolio", "Portfolio", "url")}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Summary</span>
          </label>
          <textarea
            {...register("summary", { required: "Summary is required" })}
            className={`textarea textarea-bordered w-full ${
              errors.summary ? "textarea-error" : ""
            }`}
            rows={4}
          ></textarea>
          {errors.summary && (
            <p className="text-error text-sm mt-1">{errors.summary.message}</p>
          )}
        </div>

        {renderFieldArray("Skills", "skills", ["title", "level"])}
        {renderFieldArray("Experience", "experience", [
          "jobTitle",
          "company",
          "location",
          "durationStart",
          "durationEnd",
          "responsibility",
        ])}
        {renderFieldArray("Education", "education", [
          "degree",
          "university",
          "location",
          "graduationYear",
        ])}
        {renderFieldArray("Certifications", "certifications", [
          "title",
          "issuingOrganization",
          "duration",
        ])}
        {renderFieldArray("Projects", "projects", [
          "title",
          "description",
          "technologiesUsed",
          "githubLink",
        ])}
        {renderFieldArray("Languages", "languages", ["name"])}
        {renderFieldArray("Achievements", "achievements", [
          "title",
          "year",
          "extraInformation",
        ])}

        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResumeForm;
