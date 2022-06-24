import type { ReactNode } from "react";
import { createContext, useState, useContext, useEffect } from "react";
import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/lib/firebase";

type AuthContext = [
  user: User | null,
  state: {
    loading: boolean;
  }
];

const AuthContext = createContext<AuthContext | undefined>(undefined);

export const useAuthUser = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthUser must be used within a AuthProvider");
  }

  return context;
};

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [state, setState] = useState<AuthContext>([
    null,
    {
      loading: true,
    },
  ]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setState([user, { loading: false }]);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
