import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Users } from "../icons/users";
export const LoginStatusSeller = () => {
  const [loginSeller, setLoginSeller] = useState(false);
  const [checkingSeller, setCheckingSeller] = useState(true);
  //set auth when have be
  const { users } = useSelector((state) => state.auth);
  useEffect(() => {
    if (users.data.admin.isActive) {
      setLoginSeller(true);
    } else {
      setLoginSeller(false);
    }
    setCheckingSeller(false);
  }, [users]);
  return { loginSeller, checkingSeller };
};