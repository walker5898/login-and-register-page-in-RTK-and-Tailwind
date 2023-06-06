import React from "react";
import UserCard from "../components/User/UserCard";
import { useUsersQuery } from "../services/usersApi";

function Users() {
  const { data: users, isLoading, isSuccess } = useUsersQuery();
  console.log(users);
  return (
    <div className="w-[100%] h-[100vh] p-4 flex flex-col items-center gap-4 ">
      <h1 className="text-2xl text-red-500">Membership's table</h1>
      {isLoading && <h1>loading...</h1>}
      {isSuccess && (
        <table className="text-center">
          <thead className="border-2 p-2 text-red-500">
            <tr className="border-2">
              <th className="border-2 border-collapse p-2">Number: </th>
              <th className="border-2 border-collapse p-2">Name: </th>
              <th className="border-2 border-collapse p-2">Phone number: </th>
              <th className="border-2 border-collapse p-2">Email: </th>
              <th className="border-2 border-collapse p-2">Password: </th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <UserCard key={item.id} index={index} {...item} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Users;
