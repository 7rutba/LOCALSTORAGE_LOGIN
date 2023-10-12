import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const localSignUp = localStorage.getItem("signup");
  const handleSubmit = () => {
    // console.log(
    //   name.current.value,
    //   email.current.value,
    //   password.current.value
    // );
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signup", email.current.value);
      alert("Account Created Succes Fully");
      name.current.value = "";
      email.current.value = "";
      password.current.value = "";
    } else alert("Fill all the data");
  };

  return (
    <>
      <h1 className="mx-[100px] text-sky-700 mt-20 text-[36px] font-[600]">
        Sign Up to Continue for Apply
      </h1>
      <form className="flex flex-col w-[50vh] m-[100px] ">
        <input
          type="text"
          className="border-2 border-sky-500 p-1 m-3 "
          placeholder="Name"
          ref={name}
        />
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-sky-500 p-1 m-3 "
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-sky-500 p-1 m-3 "
          ref={password}
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white bg-sky-500 p-2  m-3 rounded w-[100px]"
        >
          SignUp
        </button>
        <p className="m-3">
          Already have Register{" "}
          <Link className="text-sky-400 underline" to={"/login"}>
            Login
          </Link>
        </p>
      </form>
    </>
  );
};

export default Signup;
