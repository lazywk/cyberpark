import { HomeMenuType } from "@/types/home";
import React from "react";
import CheckIcon from "./HomeFeatueIcon";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {};

export default function HomeCard({ title, path, features }: HomeMenuType) {
  const { push } = useRouter();

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="max-w-[300px] mx-auto">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-md w-full max-w-[20rem] p-8">
            <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-white">
                Try it {title.toUpperCase()}
              </p>
            </div>
            <div className="p-0">
              <ul className="flex flex-col gap-4 min-w-[280px]">
                {features.map((el, i) => (
                  <li className="flex items-center gap-4" key={i}>
                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                      <CheckIcon />
                    </span>
                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                      {el}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-0 mt-12">
              <Link
                href={path}
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                type="button"
              >
                Try
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
