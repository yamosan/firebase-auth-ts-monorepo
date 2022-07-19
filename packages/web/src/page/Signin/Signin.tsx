import type { FormEvent } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import { auth } from "@/lib/firebase";

export const Signin = () => {
  const [signin, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signin(email, password);
  };

  if (!loading && !error && !!user) {
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
