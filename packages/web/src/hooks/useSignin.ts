import type { UserCredential } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useCallback, useState } from "react";

import { auth } from "@/lib/firebase";

export const useSignin = () => {
  const [state, setState] = useState<{
    loading: boolean;
    error?: Error;
    data?: UserCredential;
  }>({
    loading: false,
  });

  const signin = useCallback(async (email: string, password: string) => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      setState({ data, loading: false, error: undefined });
    } catch {
      setState({
        data: undefined,
        loading: false,
        error: new Error("failed to signin"),
      });
    }
  }, []);

  return [signin, state] as const;
};
