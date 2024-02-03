import React from "react";
import JobDetails from "./JobDetails";
import Job from "./Job";

import "./resume.scss";

const Resume = ({ jobs }: { jobs: Job[] }) => {
  return (
    <div className="resume">
      <h2>Resume</h2>
      {jobs.map((job, idx) => (
        <JobDetails key={`job-${idx}`} job={job} />
      ))}
      <footer>
        <span className="contract">*</span> These positions were undertaken as a
        contractor or consultant; for employment verification, the employer of
        record will be the contract staffing company. For consulting, I operated
        in self-employment.
      </footer>
    </div>
  );
};

export default Resume;
