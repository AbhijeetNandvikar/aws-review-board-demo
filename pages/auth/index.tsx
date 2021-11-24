import React, { useState } from "react";
import { signIn } from "next-auth/client";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = () => {
    console.log("btn clicked");
    signIn("cognito", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <div className="flex flex-col items-center lg:w-1/3 shadow rounded p-8">
      <h2 className="text-center font-bold">Login Page</h2>
      <button onClick={() => signInHandler()}>Continue with google</button>
    </div>
  );
};

export default Login;
