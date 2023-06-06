import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUsersQuery } from "../services/usersApi";

function Navbar() {
  const { data: users } = useUsersQuery();
  const navigate = useNavigate();
  const LoginTo = () => {
    navigate("/login");
  };
  return (
    <div className="w-[100%] p-4">
      <nav className="w-[100%] flex items-center justify-between">
        <h1 className="text-xl text-white">
          Shakhzod<span className="text-red-600">News</span>
        </h1>
        <ul className="text-white cursor-pointer">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"news"}>News</NavLink>
          </li>
          <li>
            <NavLink to={"preview"}>Preview</NavLink>
          </li>
          <li>
            <NavLink to={"interviews"}>Interviews</NavLink>
          </li>
          <li>
            <NavLink to={"users"}>Users</NavLink>
          </li>
        </ul>
        <button
          onClick={LoginTo}
          className="w-[10%] p-2 border-none outline-none bg-red-500 text-white rounded-xl hover:bg-white hover:text-red-500 hover:scale-110 transition-all"
        >
          Login
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
