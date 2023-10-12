import React from "react";

const Form = () => {
  return (
    <>
      <div className="text-center border border-sky-600 p-10 m-10">
        <form action="">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="border-2 border-sky-500 p-1 m-3 "
          />{" "}
          <br />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-sky-500 p-1 m-3 "
          />{" "}
          <br />
          <label htmlFor="">Cover Letter</label>
          <input
            type="text"
            placeholder="Cover Letter"
            className="border-2 border-sky-500 p-1 m-3 "
          />{" "}
          <br />
          <label htmlFor="">Upload Resume</label>
          <input
            type="file"
            placeholder="Email"
            className="border-2 border-sky-500 p-1 m-3 "
          />{" "}
          <br />
          <button
            type="submit"
            className="text-white bg-sky-500 p-2  m-3 rounded w-[100px]"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
