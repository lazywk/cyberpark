import React from "react";

type Props = {
  loading: boolean;
};

export default function LoadingPage({ loading }: Props) {
  return (
    <div
      className="flex items-center justify-center fixed m-auto top-0 left-0 right-0"
      style={{ bottom: loading ? "0" : "100%" }}
    >
      <h2 className="text-xl">{loading ? "Loading..." : ""}</h2>
    </div>
  );
}
