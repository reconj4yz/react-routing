import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "../components/User";
import Home from "../components/Home";
import Shop from "../components/Shop";
import UserPage from "../components/UserPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} >
              <Route path="/user/:name" element={<UserPage />} />
      </Route>

      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

export default Routing;
