import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = ({ size = 30, color = "#FFFFFF" }) => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <ClipLoader size={size} color={color} />
    </div>
  );
};

export default Loader;

