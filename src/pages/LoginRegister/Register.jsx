import React from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useAddUserMutation, useUsersQuery } from "../../services/usersApi";

function Register() {
  const navigate = useNavigate();
  const [addUser] = useAddUserMutation();
  const { data: users, isLoading, isSuccess } = useUsersQuery();
  const addUserHandler = async (e) => {
    e.preventDefault();
    let forma = new FormData(e.target);
    const newUser = Object.fromEntries(forma.entries());
    const id = nanoid();
    // await addUser({ ...newUser, id });

    // check user
    const checkUser = users.some((user) => user.email === newUser.email);
    console.log(checkUser);
    if (checkUser) {
      alert("User Already Exists");
      return;
    } else {
      addUser({ ...newUser, id });
      navigate("/login");
    }
  };

  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-center mt-[50px]">
      {isLoading && <h1 className="text-center text-xl">loading...</h1>}
      <h1 className="text-red-600 text-3xl">Register</h1>
      <form
        onSubmit={addUserHandler}
        className="w-[50%] p-4 flex flex-col items-center gap-3"
        action=""
      >
        <input
          name="name"
          required
          type="text"
          placeholder="Enter your name..."
        />
        <input
          name="phone"
          required
          type="text"
          placeholder="Enter your phone number..."
        />
        <input
          name="email"
          required
          type="email"
          placeholder="Enter your email..."
        />
        <input
          name="password"
          required
          type="password"
          placeholder="Enter your password..."
        />
        <button className="w-[30%] p-4 border-none outline-none bg-red-500 text-white text-2xl rounded-xl hover:bg-white hover:text-red-500 hover:scale-110 transition-all">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
