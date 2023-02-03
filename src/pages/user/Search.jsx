import React, { useEffect, useState } from "react";
import { searchUserApi } from "../../../api/user";
import React from "react";
import NavBar from "../../components/User/NavBar/NavBar";
import Post from "../../components/User/Posts/Post";
import Suggestion from "../../components/User/Suggestion/Suggestion";
import UserSideBar from "../../components/User/UserSideBar/UserSideBar";
import UserProtectRouter from "../../components/User/Routes/UserProtectRouter";
import BottomBar from "../../components/User/BottomBar/BottomBar";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchUsers, setSearchUsers] = useState([]);

  useEffect(() => {
    try {
      const fetchSearchData = async () => {
        if (searchInput !== "") {
          let searchResponse = await searchUserApi(searchInput);
          setSearchUsers(searchResponse);
        } else {
          setSearchUsers([]);
          console.log("null search input");
        }
      };
      fetchSearchData();
    } catch (error) {
      console.log(error);
    }
  }, [searchInput]);
  return (
    <UserProtectRouter>
      <div className="bg-[#F3F3F6]">
        <NavBar />
        <div className="flex ">
          <UserSideBar />
          <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full">
            <Post />
          </div>
          <div className=" p-10 max-sm:hidden max-md:hidden max-lg:hidden">
            <Suggestion />
          </div>
        </div>
        <div className="md:hidden block sticky bottom-0 z-50 w-full ">
          <BottomBar />
        </div>
      </div>
    </UserProtectRouter>
  );
};

export default Search;