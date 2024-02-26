import React from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Logo from "../images/logo/booklogo1.png";

const SearchBar = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  const onLogOut = () => {
    navigate("/", {
      replace: true,
    });
  };
  return (
    <header className="text-gray-600 body-font ">
      {state?.logged ? (
        <div className="flex items-center justify-between bg-gray-400 p-4 rounded">
          <div className="flex items-center text-2xl font-bold">
            <Link to="/">
              <img src={Logo} alt="logo" className="h-30  rounded-full" />
            </Link>
          </div>
          <div className="flex items-center gap-5 ">
            <button
              className='"bg-buttoncolor  text-yellow-400 font-bold text-xl py-2 px-4 rounded-xl hover:scale-110"'
              onClick={onLogOut}
            >
              Log out
            </button>
          </div>
        </div>
      ) : (
        <header className="text-gray-600 body-font border-b-2 border-graydark">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              to={"/"}
            >
              <img
                src={Logo}
                alt="logo"
                className="w-30 h-30 text-white p-2  rounded-full"
              />
            </Link>

            <div className="hidden justify-end pr-16 sm:flex lg:pr-0 flex-1">
              <NavLink
                to="/signup"
                className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition hover:bg-opacity-90"
              >
                Sign up
              </NavLink>
              <NavLink
                to="/login"
                className="px-7 py-3 text-base font-medium text-dark hover:text-[#292929] dark:text-white"
              >
                Log in
              </NavLink>
            </div>
          </div>
        </header>
      )}
      <Outlet />
    </header>
  );
};

export default SearchBar;
