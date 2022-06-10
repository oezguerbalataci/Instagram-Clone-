// @ts-nocheck
import React from "react";

const Story = ({ username, img }) => {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 object-contain cursor-pointer
        border-2 hover:scale-110 transition transform duration-200 ease-out
        
        "
        src={img}
        alt=""
      ></img>
      <p
        className="text-xs w-14 truncate text-center
        "
      >
        {username}
      </p>
    </div>
  );
};
export default Story;
