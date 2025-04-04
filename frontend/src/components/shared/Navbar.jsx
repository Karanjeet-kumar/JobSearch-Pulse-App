import React, { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { setUser } from "../redux/authSlice";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/api_constant";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Get current route
  const [activeTab, setActiveTab] = useState(location.pathname); // Default active link

  useEffect(() => {
    setActiveTab(location.pathname); // Update active tab when route changes
  }, [location.pathname]); // Runs every time the route changes

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-500 to-gray-900 text-white">
      <div className="flex items-center justify-between mx-4 max-w-7xl h-16">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            style={{
              borderRadius: "20%",
              border: "1px solid #36efef",
              width: "50px",
              height: "50px",
            }}
          />
          <h1 className="text-3xl font-bold">
            Job<span className="text-[#36efef]">Search-Pulse</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link
                    to="/admin/companies"
                    className={`${
                      activeTab === "/admin/companies"
                        ? "text-cyan-500 font-bold rounded-full bg-gradient-to-r from-blue-200 to-red-200 px-2"
                        : "text-gray-400"
                    }`}
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/jobs"
                    className={`${
                      activeTab === "/admin/jobs"
                        ? "text-cyan-500 font-bold rounded-full bg-gradient-to-r from-blue-200 to-red-200 px-2"
                        : "text-gray-400"
                    }`}
                  >
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    className={`${
                      activeTab === "/"
                        ? "text-cyan-500 font-bold rounded-full bg-gradient-to-r from-blue-200 to-red-200 px-2"
                        : "text-gray-400"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs"
                    className={`${
                      activeTab === "/jobs"
                        ? "text-cyan-500 font-bold rounded-full bg-gradient-to-r from-blue-200 to-red-200 px-2"
                        : "text-gray-400"
                    }`}
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/browse"
                    className={`${
                      activeTab === "/browse"
                        ? "text-cyan-500 font-bold rounded-full bg-gradient-to-r from-blue-200 to-red-200 px-2"
                        : "text-gray-400"
                    }`}
                  >
                    Browse
                  </Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex items-center gap-1">
              <Link to="/login">
                <Button
                  className="hover:bg-[#36efef] border-stone-950 text-black"
                  variant="outline"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="Profile"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="bg-gradient-to-r from-white to-gray-400 w-80">
                <div>
                  <div className="flex gap-2 space-y-2">
                    <div className="py-1">
                      <Avatar className="cursor-pointer">
                        <AvatarImage
                          src={user?.profile?.profilePhoto}
                          alt="Profile"
                        />
                      </Avatar>
                    </div>
                    <div>
                      <h4 className="font-medium">{user?.fullname}</h4>
                      <p className="text-sm text-muted-foreground">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2 text-gray-600">
                    {user && user.role === "student" && (
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <User2 />
                        <Button variant="link">
                          <Link to="/profile">View Profile</Link>
                        </Button>
                      </div>
                    )}
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button onClick={logoutHandler} variant="link">
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
