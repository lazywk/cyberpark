import { homeMenu } from "@/configs/homeMenu";
import React from "react";
import HomeCard from "./HomeCard";

export default function HomeList() {
  return (
    <div className="flex gap-2 py-5">
      {homeMenu.map((el, i) => (
        <HomeCard {...el} key={i} />
      ))}
    </div>
  );
}
