import React from "react";

type Props = {
  loading: boolean;
};

export default function LoadingPage({ loading }: Props) {
  return <div>{loading ? "Loading..." : ""}</div>;
}
