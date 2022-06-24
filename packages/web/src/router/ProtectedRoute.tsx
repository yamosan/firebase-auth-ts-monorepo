import type { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuthUser } from "@/context/AuthContext";

export const ProtectedRoute: FC = () => {
  const [user, { loading: userLoading }] = useAuthUser();

  if (userLoading) {
    return <div>loading...</div>;
  }

  if (user === null) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
