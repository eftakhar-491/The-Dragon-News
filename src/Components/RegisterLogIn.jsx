import React from "react";

export default function RegisterLogIn() {
  return (
    <form className="flex flex-col border-2 p-4 gap-3 rounded-lg">
      <input
        autoComplete="true"
        type="text"
        placeholder="User Name..."
        className="border-2 pl-2 rounded-md"
      />
      <input
        type="email"
        autoComplete="true"
        placeholder="Email Address..."
        className="border-2 pl-2 rounded-md"
      />
      <input
        type="password"
        autoComplete="true"
        placeholder="Password..."
        className="border-2 pl-2 rounded-md"
      />
      <button className="bg-slate-200 rounded-md">Log IN</button>
      <button className="bg-slate-200 rounded-md">Sign IN</button>
    </form>
  );
}
