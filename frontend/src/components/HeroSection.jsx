import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "./redux/jobSlice";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
    <div className="text-center bg-gradient-image py-2">
      <div className="flex flex-col gap-5">
        <span className=" bg-gradient-box mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          No. 1 Job Hunt Platform
        </span>
        <h1 className="text-5xl font-bold text-white">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#36efef]">Dream Jobs</span>
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          aspernatur temporibus nihil tempora dolor!
        </p>
        <div className="bg-gradient-box flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="bg-gray-200 outline-none border-none w-full rounded-full p-1 px-4"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-[#36efef]"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
