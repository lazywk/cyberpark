import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function SideLayout({ children }: Props) {
  return <div>{children}</div>;
}
