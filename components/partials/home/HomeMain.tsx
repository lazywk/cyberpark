import HomeCard from "@/components/elements/home/HomeCard";
import { homeMenu } from "@/configs/homeMenu";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";

export default function HomeMain() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">Hello {user?.firstName}!</h1>
        <button
          className="rounded-lg bg-gray-900 py-2 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20"
          style={{ cursor: "pointer !important" }}
          onClick={() => console.log("sss")}
        >
          Log Out
        </button>
      </div>

      <div className="flex gap-2 py-5">
        {homeMenu.map((el, i) => (
          <HomeCard {...el} key={i} />
        ))}
      </div>
    </div>
  );
}
