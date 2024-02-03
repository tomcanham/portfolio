import React from "react";
import Job from "./Job";
import dayjs from "dayjs";

const JobDetails = ({ job }: { job: Job }) => {
  const startDate = dayjs(job.startDate).format("MMMM YYYY");
  const endDate = dayjs(job.endDate).format("MMMM YYYY");

  return (
    <div className="job">
      <h3>
        {job.title} @ {job.company}
        {job.contract ? <span className="contract">{" *"}</span> : ""}
      </h3>
      <p>
        {startDate} - {endDate}
      </p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetails;
