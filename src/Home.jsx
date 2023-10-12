import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [jobs, setjobs] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/jobs");
        setjobs(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []); // Make sure to specify the dependencies correctly

  return (
    <>
      {jobs.map((js, i) => (
        <Emp
          key={i}
          title={js.title}
          location={js.location}
          jobtype={js.employment_type}
          descr={js.description}
        />
      ))}
    </>
  );
};

const Emp = ({ title, location, jobtype, descr }) => {
  return (
    <div className="border-2 border-sky-500 p-6 mx-10 my-10">
      <h1 className="text-[18px] my-4 font-[500] ">
        <span className="text-sky-500"> Position :</span>
        {title}
      </h1>
      <p className="text-[16px]">
        <span className="text-sky-500"> job description :</span>
        {descr}
      </p>
      <p>
        <span className="text-sky-500"> employment_type :</span>
        {jobtype}
      </p>
      <p>
        {" "}
        <span className="text-sky-500">location :</span> {location}
      </p>{" "}
      <br />
      <a
        href={"/login/form"}
        className="text-white bg-sky-500 p-2  rounded w-[100px]"
      >
        APPLY NOW
      </a>
    </div>
  );
};
export default Home;
