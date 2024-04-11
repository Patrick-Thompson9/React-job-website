import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  interface LinkProps {
    isActive: boolean;
  }

  const linkClass = ({ isActive }: LinkProps) => {
    return isActive
      ? "text-white bg-black hover:bg-gray-500 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-500 hover:text-white rounded-md px-3 py-2";
  };

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink
              className="flex flex-shrink-0 items-center mr-4 hover:bg-blue-600 rounded-md px-3 py-2"
              to="/"
            >
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React Jobs
              </span>
            </NavLink>
            <div className="md:my-auto ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={linkClass}>
                  Add Job
                </NavLink>
                <NavLink to="/login">
                  <FaUserCircle className="text-white text-3xl rounded-full my-auto hover:bg-white hover:text-indigo-700" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
