import type { UserCredential } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useCallback, useState } from "react";

import { auth } from "@/lib/firebase";

export const useSignup = () => {
  const [state, setState] = useState<{
    loading: boolean;
    error?: Error;
    data?: UserCredential;
  }>({
    loading: false,
  });

  const signup = useCallback(async (email: string, password: string) => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      setState({ data, loading: false, error: undefined });
    } catch {
      setState({
        data: undefined,
        loading: false,
        error: new Error("failed to signup"),
      });
    }
  }, []);

  return [signup, state] as const;
};
