import React from "react";
import UsersList from "./UsersList";
import UsersHeader from "./UsersHeader";

export default function UsersMain() {
  return (
    <div>
      <UsersHeader />
      <UsersList />
    </div>
  );
}
