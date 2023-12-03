import React from "react";
import { serverClient } from "../_trpc/serverClient";

export const Users = async () => {
  const users = await serverClient.todoList();

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </div>
      ))}
    </div>
  );
};
