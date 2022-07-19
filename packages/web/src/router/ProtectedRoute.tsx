import type { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "@/lib/firebase";

export const ProtectedRoute: FC = () => {
  const [user, loading, _error] = useAuthState(auth);

  if (loading) {
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
