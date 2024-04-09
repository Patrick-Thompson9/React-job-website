import { useState, useEffect } from "react";
import JobPost, { Job } from "./JobPost";

interface Props {
  isHome?: boolean;
}

function JobListing({ isHome = false }: Props) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = () => {
      fetch("http://localhost:5000/jobs")
        .then((res) => res.json())
        .then((data) => {
          setJobs(data);
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    };
    fetchJobs();
  }, []);

  const numJobs = 3;
  const jobsPreview = isHome ? jobs.slice(0, numJobs) : jobs;

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <>
              {jobsPreview.map((job) => {
                return <JobPost key={job.id} job={job} />;
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default JobListing;
