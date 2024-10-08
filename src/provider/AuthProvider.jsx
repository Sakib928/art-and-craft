import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("Theme") || "light");

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      return () => unsubscribe;
    });
  }, [reload]);

  const [loadedItems, setLoadedItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://10-painting-server-7d9x24lfq-sakib928s-projects.vercel.app/allcrafts"
    )
      .then((res) => res.json())
      .then((data) => setLoadedItems(data));
  }, []);

  const authInfo = {
    user,
    createUser,
    loading,
    userLogin,
    userLogout,
    googleLogin,
    githubLogin,
    profileUpdate,
    reload,
    setReload,
    theme,
    setTheme,
    loadedItems,
    setLoadedItems,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
