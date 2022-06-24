import { Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";

import { Home } from "@/page/Home";
import { Profile } from "@/page/Profile";
import { Signin } from "@/page/Signin";
import { BasicLayout } from "@/ui/Layout/BasicLayout";
import { Signup } from "@/page/Signup";

export const Router = () => (
  <Routes>
    <Route element={<BasicLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />

      {/* protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Route>
  </Routes>
);
