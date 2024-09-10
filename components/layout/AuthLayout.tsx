import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return <div className="container mx-auto">{children}</div>;
}
