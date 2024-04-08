import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListing from "./components/JobListing";

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

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
}

export default App;
