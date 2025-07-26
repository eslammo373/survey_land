import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="dark:bg-dark shadow-sm h-[72px] border-b border-b-gray-200 dark:border-dark">
        <div className="container h-full">
          <div className="items flex justify-between items-center h-full">
            <div className="brand text-2xl font-bold">
              <Link to="/">
                <span className="text-main">Survey</span>Land
              </Link>
            </div>
            <div className="text-sm ">
              Have account?
              <Link to="/signin" className="text-main">
                Sign In Now
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
