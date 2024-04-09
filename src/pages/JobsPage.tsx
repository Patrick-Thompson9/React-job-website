import { Outlet } from "react-router-dom";
import JobListing from "../components/JobListing";

function JobsPage() {
  return (
    <>
      <JobListing />
      <Outlet />
    </>
  );
}

export default JobsPage;
