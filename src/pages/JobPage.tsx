import { useState, useEffect } from "react";
import JobPost, { Job } from "../components/JobPost";
import { useParams, useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import Spinner from "../components/Spinner";

type LoaderData = {
  job: Job;
};

function JobPage() {
  const [currentJob, setCurrentJob] = useState<Job | null>(null);
  const { id } = useParams();
  const { job } = useLoaderData() as LoaderData;

  if (!job) {
    return <Spinner loading={!currentJob} />;
  }

  return <JobPost job={job} />;
}

const jobLoader = async ({ params }: LoaderFunctionArgs) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const job = await res.json();
  return { job };
};

export { JobPage as default, jobLoader };
