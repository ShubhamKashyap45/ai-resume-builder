import React from "react";

const ResumeTemplate = ({ data }) => {
  const {
    personalInformation,
    summary,
    skills,
    experience,
    education,
    certifications,
    projects,
    languages,
    achievements,
  } = data;

  return (
    <div className="text-base leading-relaxed">
      <h1 className="text-3xl font-bold">{personalInformation.fullName}</h1>
      <p>
        {personalInformation.email} | {personalInformation.phoneNumber} |{" "}
        {personalInformation.location}
      </p>
      <p>
        <a href={personalInformation.linkedin}>LinkedIn</a> |{" "}
        <a href={personalInformation.gitHub}>GitHub</a> |{" "}
        <a href={personalInformation.portfolio}>Portfolio</a>
      </p>

      <hr className="my-4" />

      <section>
        <h2 className="text-xl font-semibold">Summary</h2>
        <p>{summary}</p>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="list-disc ml-5">
          {skills.map((s, i) => (
            <li key={i}>{s.title}</li>
          ))}
        </ul>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Experience</h2>
        {experience.map((e, i) => (
          <div key={i} className="mb-2">
            <strong>
              {e.jobTitle} at {e.company}
            </strong>{" "}
            ({e.durationStart} - {e.isCurrent ? "Present" : e.durationEnd})
            <p>{e.location}</p>
            <p>{e.responsibility}</p>
          </div>
        ))}
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Education</h2>
        {education.map((ed, i) => (
          <div key={i}>
            <p>
              <strong>{ed.degree}</strong> – {ed.university} (
              {ed.graduationYear})
            </p>
            <p>{ed.location}</p>
          </div>
        ))}
      </section>

      {certifications.length > 0 && (
        <section className="mt-4">
          <h2 className="text-xl font-semibold">Certifications</h2>
          {certifications.map((c, i) => (
            <p key={i}>
              {c.title} – {c.issuingOrganization} ({c.duration})
            </p>
          ))}
        </section>
      )}

      {projects.length > 0 && (
        <section className="mt-4">
          <h2 className="text-xl font-semibold">Projects</h2>
          {projects.map((p, i) => (
            <div key={i}>
              <strong>{p.title}</strong> –{" "}
              <a href={p.githubLink} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <p>{p.description}</p>
              <p>
                <em>Technologies:</em> {p.technologiesUsed}
              </p>
            </div>
          ))}
        </section>
      )}

      {languages.length > 0 && (
        <section className="mt-4">
          <h2 className="text-xl font-semibold">Languages</h2>
          <p>{languages.map((l) => l.name).join(", ")}</p>
        </section>
      )}

      {achievements.length > 0 && (
        <section className="mt-4">
          <h2 className="text-xl font-semibold">Achievements</h2>
          {achievements.map((a, i) => (
            <p key={i}>
              {a.title} ({a.year}) – {a.extraInformation}
            </p>
          ))}
        </section>
      )}
    </div>
  );
};

export default ResumeTemplate;
