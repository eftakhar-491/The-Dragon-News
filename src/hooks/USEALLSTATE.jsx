import { useState } from "react";

export function useAllState() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [user, setUser] = useState(null);
  const [isLog, setIsLog] = useState(false);
  const [err, setErr] = useState(false);
  return {
    err,
    setErr,
    user,
    setUser,
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    userPass,
    setUserPass,
    isLog,
    setIsLog,
  };
}
