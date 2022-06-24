import { signOut } from "firebase/auth";
import { useCallback, useState } from "react";

import { auth } from "@/lib/firebase";

export const useSignout = () => {
  const [state, setState] = useState<{
    loading: boolean;
    error?: Error;
  }>({
    loading: false,
  });

  const signout = useCallback(async () => {
    setState({ loading: true });
    try {
      await signOut(auth);
      setState({ loading: false });
    } catch {
      setState({ loading: false, error: new Error("failed to signout") });
    }
  }, []);

  return [signout, state] as const;
};
