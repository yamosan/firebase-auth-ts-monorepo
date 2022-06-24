import type { FC } from "react";
import { Link, Outlet } from "react-router-dom";

import { useAuthUser } from "@/context/AuthContext";
import { useSignout } from "@/hooks/useSignout";

export const BasicLayout: FC = () => {
  const [user, { loading: userLoading }] = useAuthUser();
  const [signout, { loading: signoutLoading }] = useSignout();

  if (userLoading || signoutLoading) {
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
