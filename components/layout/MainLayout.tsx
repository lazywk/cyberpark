import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";
import LoadingPage from "./LoadingPage";
import SideLayout from "./SidebarLayout";
import AuthLayout from "./AuthLayout";
import { Toaster } from "react-hot-toast";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  const { loading, isLogin } = useContext(AuthContext);

  return (
    <div>
      <LoadingPage loading={loading} />
      {isLogin ? (
        <SideLayout>{children}</SideLayout>
      ) : (
        <AuthLayout>{children}</AuthLayout>
      )}

      <Toaster position="top-center" />
    </div>
  );
}
