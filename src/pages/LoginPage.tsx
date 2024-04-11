import { FaUserCircle } from "react-icons/fa";

function LoginPage() {
  return (
    <section className=" bg-indigo-50 min-h-screen">
      <div className="container m-auto max-w-2xl py-1">
        <div className="shadow-md bg-white my-10">
          <div className="flex flex-col justify-center items-center">
            <FaUserCircle className="text-9xl inline text-indigo-700 pt-5" />
            <h1 className="text-3xl font-bold my-5">Login</h1>
          </div>
          <form>
            <div className="m-2">
              <label
                htmlFor="email"
                className="block font-semibold text-gray-700"
              >
                Email:
              </label>
              <input
                id="email"
                placeholder="Example@example.com"
                type="text"
                className="border rounded w-full mb-2 py-2 px-3"
              />
            </div>
            <div className="m-2">
              <label
                htmlFor="password"
                className="block font-semibold text-gray-700"
              >
                Password:
              </label>
              <input
                id="password"
                placeholder="password"
                type="text"
                className="border rounded w-full mb-2 py-2 px-3"
              />
            </div>
            <div className="m-2">
              <button className="bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-4 rounded-full w-full mb-4">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
