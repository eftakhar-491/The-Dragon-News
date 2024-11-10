import React, { useContext, useEffect, useState } from "react";
import { auth } from "../FIREBASE/__fireBaseApi";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import FireBaseData from "../Context/FireBaseData";

export default function RegisterLogIn() {
  const {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    userPass,
    setUserPass,
    user,
    setUser,
    isLog,
    setIsLog,
    err,
    setErr,
  } = useContext(FireBaseData);

  function handelLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, userPass)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        setErr({ title: "user not Found", address: "SignUp" });
        // console.log(err);
      });
  }
  function handelSignUp(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userEmail, userPass)
      .then((res) => {
        // console.log(res);
        setIsLog(false);
      })
      .catch((err) => {
        setErr({ title: "user All Ready accist", address: "LogIn" });
        // console.log(err);
      });
  }
  function handelLogOut(e) {
    e.preventDefault();
    signOut(auth)
      .then((res) => {
        console.log(res);
        setIsLog(false);
        setUser(null);
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  return (
    <>
      {user ? (
        <button
          onClick={handelLogOut}
          className="w-full bg-slate-200 rounded-md"
        >
          Log Out
        </button>
      ) : (
        <form className="flex flex-col border-2 p-4 gap-3 rounded-lg">
          {isLog && (
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              name="name"
              autoComplete="true"
              type="text"
              placeholder="User Name..."
              className="border-2 pl-2 rounded-md"
            />
          )}
          <input
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            name="email"
            type="email"
            autoComplete="true"
            placeholder="Email Address..."
            className="border-2 pl-2 rounded-md"
          />

          <input
            value={userPass}
            onChange={(e) => setUserPass(e.target.value)}
            name="password"
            type="password"
            autoComplete="true"
            placeholder="Password..."
            className="border-2 pl-2 rounded-md"
          />

          {err && (
            <p>
              {err.title}{" "}
              {err?.address === "SignUp" && (
                <span
                  onClick={() => {
                    setIsLog(true);
                    setErr("");
                  }}
                >
                  {err.address}
                </span>
              )}
              {err?.address === "LogIn" && (
                <span
                  onClick={() => {
                    setIsLog(false);
                    setErr("");
                  }}
                >
                  {err.address}
                </span>
              )}
            </p>
          )}

          {isLog ? (
            <button onClick={handelSignUp} className="bg-slate-200 rounded-md">
              SignUp
            </button>
          ) : (
            <button onClick={handelLogin} className="bg-slate-200 rounded-md">
              LogIn
            </button>
          )}
        </form>
      )}
    </>
  );
}
