import { Outlet } from "react-router-dom";
import ViewAllJobs from "../components/ViewAllJobs";

function JobsPage() {
  return (
    <>
      <ViewAllJobs />
      <Outlet />
    </>
  );
}

export default JobsPage;
