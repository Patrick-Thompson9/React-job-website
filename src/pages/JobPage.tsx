import { useState, useEffect } from "react";
import JobPost, { Job } from "../components/JobPost";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

function JobPage() {
  const [currentJob, setCurrentJob] = useState<Job | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentJob(data))
      .catch((err) => console.error(err));
  }, []);

  if (!currentJob) {
    return <Spinner loading={!currentJob} />;
  }

  return <JobPost job={currentJob} />;
}

export default JobPage;
