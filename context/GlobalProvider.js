import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../lib/appwrite";
import { router } from "expo-router";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((currentUser) => {
        console.log("current user:", currentUser);
        if (currentUser) {
          setIsLogin(true);
          setLoggedInUser(currentUser);
          // router.replace("/home");
        } else {
          setIsLogin(false);
          setLoggedInUser(null);
        }
      })
      .catch((error) => {
        console.log("Getting Currrent User Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        loggedInUser,
        loading,
        isLogin,
        setLoggedInUser,
        setIsLogin,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
