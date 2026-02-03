import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export function useAuth() {
  const login = (email, senha) => {
    return signInWithEmailAndPassword(auth, email, senha);
  };

  return { login };
}
