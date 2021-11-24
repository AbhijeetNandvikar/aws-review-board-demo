import React, { useState } from "react";
import { signIn } from "next-auth/client";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = () => {
    console.log("btn clicked");
    signIn();
  };

  return (
    <div className="flex flex-col items-center lg:w-1/3 shadow rounded p-8">
      <h2 className="text-center font-bold">Login Page</h2>
      <br />
      <input
        type="email"
        value={email}
        onChange={(value) => {
          if (typeof value === "string") setEmail(value);
        }}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(value) => {
          if (typeof value === "string") setPassword(value);
        }}
      />
      <button onClick={() => {}} className="mt-8">
        Login
      </button>

      <button onClick={() => signInHandler()}>Continue with google</button>
    </div>
  );
};

export default Login;
