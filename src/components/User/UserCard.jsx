import React from "react";
// import { useGetUserDetailsQuery } from "../../services/usersApi";

function UserCard({ name, phone, email, password, index, id }) {
  // const { data: user } = useGetUserDetailsQuery(id);
  return (
    <tr className="border-2 hove:bg-red-300 transition-all cursor-pointer text-white">
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{password}</td>
    </tr>
  );
}

export default UserCard;
