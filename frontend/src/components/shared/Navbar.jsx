import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-4 max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Search-Pulse</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-1">
              <Button
                className="hover:bg-[#90EE90] border-stone-950"
                variant="outline"
              >
                Login
              </Button>
              <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                Signup
              </Button>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="">
                  <div className="flex gap-2">
                    <div className="py-1">
                      <Avatar className="cursor-pointer">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                      </Avatar>
                    </div>
                    <div>
                      <h4 className="font-medium">Karan MernStack</h4>
                      <p className="text-sm text-muted-foreground">
                        Hii, I am on the way to success.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2 text-gray-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">View Profile</Button>
                    </div>

                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button variant="link">Logout</Button>
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