import type { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

import { auth } from "@/lib/firebase";

export const BasicLayout: FC = () => {
  const [user, loading, _error] = useAuthState(auth);
  const signout = () => {
    signOut(auth);
  };

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <nav style={{ display: "flex", gap: "12px" }}>
          <Link to="/">ホーム</Link>
          <Link to="/profile">プロフィール</Link>
          <Link to="/signin">ログイン</Link>
          <Link to="/signup">新規登録</Link>
        </nav>

        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <small>{user?.email}</small>
          <button onClick={signout}>ログアウト</button>
        </div>
      </header>

      <Outlet />
    </div>
  );
};
