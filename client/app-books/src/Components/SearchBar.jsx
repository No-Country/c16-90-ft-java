import React from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Logo from "../images/logo/booklogo1.png";
import { AiFillRead, AiFillStar, AiFillHeart } from "react-icons/ai";

const SearchBar = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  const onLogOut = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <>
      <header className="text-gray-600 body-font border-b-2 border-graydark">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="hidden sm:flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            to={"/"}
          >
            <img
              src={Logo}
              alt="logo"
              className="w-30 h-30 text-white p-2  rounded-full"
            />
          </Link>
          {state?.logged ? (
            <div className="flex items-center justify-end flex-1 bg-gray-400 p-4 rounded">
              <ul className=" flex items-center mx-auto">
                <li className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition hover:bg-opacity-90 flex items-center gap-2">
                  <AiFillRead className="text-base" color="white" />
                  <Link to="read" className="text-base">
                    Read
                  </Link>
                </li>
                <li className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition hover:bg-opacity-90 flex items-center gap-2">
                  <AiFillStar className="text-base" color="white" />
                  <Link to="favorites" className="text-base">
                    Favorites
                  </Link>
                </li>
                <li className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition hover:bg-opacity-90 flex items-center gap-2">
                  <AiFillHeart className="text-base" color="white" />
                  <NavLink to="wish" className="text-base">
                    Wish
                  </NavLink>
                </li>
              </ul>
              <button
                onClick={onLogOut}
                className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition hover:bg-opacity-90"
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="mx-auto flex justify-center items-center sm:justify-end sm:pr-16 sm:flex lg:pr-0 sm:flex-1 gap-8">
              <NavLink
                to="/faqs"
                className="px-7 py-3 text-base font-medium text-dark hover:text-[#292929] dark:text-white hover:border-b-2 hover:bg-gray-100"
              >
                Faq's
              </NavLink>

              <NavLink
                to="/login"
                className="px-7 py-3 text-base font-medium text-dark hover:text-[#292929] dark:text-white hover:border-b-2 hover:bg-gray-100"
              >
                Log in
              </NavLink>
              <NavLink
                to="/signup"
                className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition hover:bg-opacity-90"
              >
                Sign up
              </NavLink>
            </div>
          )}
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default SearchBar;
