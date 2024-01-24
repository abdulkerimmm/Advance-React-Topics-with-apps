import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavigateBar from "./NavigateBar";

const UpComponent = () => {
  return (
    <div>
      <NavigateBar />
      <Outlet />
    </div>
  );
};

export default UpComponent;
