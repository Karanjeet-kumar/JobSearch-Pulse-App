import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import useGetAllJobs from "./hooks/useGetAllJobs";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "./redux/jobSlice";

function Browse() {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, []);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-4 my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results ({allJobs.length})
        </h1>
        {allJobs.length === 0 ? (
          <div className="text-center font-bold text-xl">
            No Job Found......
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {allJobs.map((job) => {
              return <Job key={job._id} job={job} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Browse;
