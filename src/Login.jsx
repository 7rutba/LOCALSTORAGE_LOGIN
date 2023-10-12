import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Login = () => {
  const [show, setshow] = useState(false);
  const [homeurl, sethomeurl] = useState("/home");
  const emailRef = useRef();
  const passwordRef = useRef();
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  const handleSubmit = () => {
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
      setshow(true);
    } else {
      alert("Login Failed. Please check your email and password.");
    }
  };

  return (
    <>
      {show ? (
        <Home />
      ) : (
        <form className="flex flex-col w-[50vh] m-[40px] ">
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-sky-500 p-1 m-3 "
            ref={emailRef}
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-sky-500 p-1 m-3 "
            ref={passwordRef}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white bg-sky-500 p-2  m-3 rounded w-[100px]"
          >
            Login
          </button>
          <p className="m-3">
            Don't have an account?{" "}
            <Link className="text-sky-400 underline" to={"/"}>
              SignUp
            </Link>
          </p>
        </form>
      )}
    </>
  );
};

export default Login;
