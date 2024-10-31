import React from "react";

export default function RegisterLogIn() {
  return (
    <form className="flex flex-col border-2 p-4 gap-3 rounded-lg">
      <input type="text" className="border-2 rounded-md" />
      <input type="email" className="border-2 rounded-md" />
      <input type="password" className="border-2 rounded-md" />
      <button className="bg-slate-200 rounded-md">Log IN</button>
    </form>
  );
}
