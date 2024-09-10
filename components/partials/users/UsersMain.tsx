import React from "react";
import UsersList from "./UsersList";
import UsersHeader from "./UsersHeader";

type Props = {};

export default function UsersMain({}: Props) {
  return (
    <div>
      <UsersHeader />
      <UsersList />
    </div>
  );
}
