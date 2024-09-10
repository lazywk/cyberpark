import { useGetUsersQuery } from "@/store/users/usersApi";
import React from "react";
import UserCard from "./UserCard";

type Props = {};

export default function UsersList({}: Props) {
  const { data } = useGetUsersQuery("limit=30", {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div className="flex flex-wrap">
      {data &&
        data?.users.map((user) => <UserCard key={user.id} user={user} />)}
    </div>
  );
}
