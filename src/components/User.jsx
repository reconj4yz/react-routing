import React from "react";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <div className=" bg-zinc-200 mt-10 w-1/2 m-auto p-5 rounded-md">
      <h1 className="text-5xl font-semibold text-center mb-5 text-red-400">
        Users
      </h1>
      <div className=" flex flex-col mt-10 justify-center items-center">
        <Link className="w-1/2 bg-red-200 hover:bg-red-300 p-4 mt-2" to='/user/william'>William</Link>
        <Link className="w-1/2 bg-red-200 hover:bg-red-300 p-4 mt-2" to='/user/chris'>Chris</Link>
        <Link className="w-1/2 bg-red-200 hover:bg-red-300 p-4 mt-2" to='/user/mike'>Mike</Link>
      </div>
      <button className="ml-[43%] px-3 py-1 bg-red-300 rounded-md mt-5 mb-5">
        Learn More!
      </button>
      <hr />
      <Outlet />
    </div>
  );
};

export default User;
