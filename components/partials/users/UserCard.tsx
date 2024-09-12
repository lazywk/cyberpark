import { User } from "@/types/users";
import Image from "next/image";
import React from "react";

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  return (
    <div className="p-1  w-1/3">
      <div className="bg-gray-900 border border-gray-900 shadow-lg  rounded-3xl p-2">
        <div className="flex-none sm:flex">
          <div className=" relative h-20 w-20   sm:mb-0 mb-3">
            <Image
              src={user.image}
              alt="aji"
              className=" w-20 h-20 object-cover rounded-2xl"
              width={300}
              height={200}
            />
            <a
              href="#"
              className="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
              </svg>
            </a>
          </div>
          <div className="flex sm:ml-5 items-start flex-1">
            <div className="flex items-center justify-between sm:mt-2">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">
                    {user.firstName} {user.lastName}
                  </div>
                  <div className="flex-auto text-gray-400 my-1 text-truncate">
                    <span className="mr-3 text-sm">{user.company.title}</span>
                    <span className="mr-3 border-r text-sm border-gray-600"></span>
                    <span
                      className="text-sm block"
                    >
                      {user.company.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-2  text-sm text-gray-400 ms-auto">
              <button className="flex-no-shrink bg-red-400 hover:bg-red-500 px-3 ml-4 py-1 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-300 hover:border-red-500 text-gray-900 rounded-full transition ease-in duration-300">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
