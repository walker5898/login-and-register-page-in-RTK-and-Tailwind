import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddLoginUserMutation } from "../../services/loginUserApi";
import { useUsersQuery } from "../../services/usersApi";

function Login() {
  const navigate = useNavigate();
  const { data: users, isLoading, isSuccess } = useUsersQuery();
  const [addLoginUser] = useAddLoginUserMutation();
  // const [loginUser, setLoginUser] = useState({
  //   email: "",
  //   password: "",
  // });
  // const handleChange = (e) => {
  //   setLoginUser({
  //     ...loginUser,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const loginUserHandler = async (e) => {
    e.preventDefault();
    let forma = new FormData(e.target);
    const loginUser = Object.fromEntries(forma.entries());
    // console.log(loginUser);
    const checkLoginUser = users.some(
      (item) =>
        item.email === loginUser.email && item.password === loginUser.password
    );
    console.log(checkLoginUser);
    // check LoginUser
    if (!checkLoginUser) {
      alert("Invalid email or password");
      return;
    } else {
      await addLoginUser(loginUser);
      navigate("/");
    }
  };
  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-red-600 text-3xl">Login</h1>
      <form
        onSubmit={loginUserHandler}
        className="w-[50%] p-4 flex flex-col items-center gap-3"
        action=""
      >
        <input
          // onChange={handleChange}
          required
          name="email"
          type="email"
          placeholder="Enter your email..."
        />
        <input
          // onChange={handleChange}
          required
          name="password"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="w-[30%] p-4 border-none outline-none bg-red-500 text-white text-2xl rounded-xl hover:bg-white hover:text-red-500 hover:scale-110 transition-all">
          Submit
        </button>
      </form>
      <p className="text-white">
        Have you already have an account or{" "}
        <Link className="text-red-600" to={"/register"}>
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
