import { useState, useEffect } from "react";
import JobPost, { Job } from "./JobPost";
import Spinner from "./Spinner";

interface Props {
  isHome?: boolean;
}

function JobListing({ isHome = false }: Props) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const numJobs = 3;
  const jobsPreview = isHome ? jobs.slice(0, numJobs) : jobs;

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobsPreview.map((job) => {
              return <JobPost key={job.id} job={job} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default JobListing;
