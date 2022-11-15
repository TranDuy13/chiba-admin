import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
export const LoginStatus = () => {
  const [login, setLogin] = useState(false);
  const [checking, setChecking] = useState(true);
  //set auth when have be
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    setChecking(false);
  }, [user]);
  return { login, checking };
};