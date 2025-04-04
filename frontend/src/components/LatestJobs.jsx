import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);
  return (
    <div className="bg-gradient-to-r from-white to-gray-400 py-2">
      <div className="max-w-7xl mx-4">
        <h1 className="text-4xl font-bold text-gray-600">
          <span className="text-cyan-400">Latest & Top </span> Job Openings
        </h1>
        <div className="grid grid-cols-3 gap-4 my-5">
          {allJobs.length <= 0 ? (
            <span>No Job Available</span>
          ) : (
            allJobs
              ?.slice(0, 6)
              .map((job) => <LatestJobCards key={job._id} job={job} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
