import { Outlet } from "react-router-dom";
import ViewAllJobs from "../components/ViewAllJobs";
import JobListing from "../components/JobListing";

function JobsPage() {
  return (
    <>
      <JobListing numJobs={20} />
      <ViewAllJobs />
      <Outlet />
    </>
  );
}

export default JobsPage;
