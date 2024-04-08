import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListing from "./components/JobListing";
import ViewAllJobs from "./components/ViewAllJobs";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your needs and skills!"
      />
      <HomeCards />
      <JobListing />
      <ViewAllJobs />
    </>
  );
}

export default App;
