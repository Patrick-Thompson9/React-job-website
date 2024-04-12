import { NavLink } from "react-router-dom";

function AccountDropdown() {
  return (
    <ul
      id="account-dropdown"
      className="text-2xl relative right-40 bottom-5 bg-white border-2 border-black rounded-md w-60
    divide-y divide-slate-200"
    >
      <NavLink to="/login">
        <li className="m-2 p-1 hover:bg-gray-300 rounded-md">Login</li>
      </NavLink>
      <NavLink to="/settings">
        <li className="m-2 p-1 hover:bg-gray-300 rounded-md">Settings</li>
      </NavLink>
    </ul>
  );
}

export default AccountDropdown;
