import React from "react";
import { Link } from "react-router-dom";

const LeftItem = () => {
  return (
    <>
      <div className=" h-full hidden md:flex md:w-[30%] bg-main flex-col justify-center items-center">
        <h2 className="text-white dark:text-dark text-3xl leading-10 font-medium pb-3">
          Already have
          <br /> an account?
        </h2>
        <h3 className="text-white dark:text-dark pb-15">Stay in the loop — log in now!</h3>
        <Link className="p-2.5 bg-white dark:bg-dark rounded-full text-xs px-13 hover:bg-white text-main">
          SIGN IN
        </Link>
      </div>
    </>
  );
};

export default LeftItem;
