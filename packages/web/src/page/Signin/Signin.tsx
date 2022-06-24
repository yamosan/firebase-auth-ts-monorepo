import type { FormEvent } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

import { useSignin } from "@/hooks/useSignin";

export const Signin = () => {
  const [signin, { loading, data, error }] = useSignin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signin(email, password);
  };

  if (!loading && !error && !!data) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      <h1>ログインページ</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <label>
          メールアドレス
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          パスワード
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button disabled={loading}>ログイン</button>
      </form>
    </div>
  );
};
