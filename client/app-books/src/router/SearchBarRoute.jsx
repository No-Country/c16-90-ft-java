import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineUser,
  AiOutlineUnlock,
} from "react-icons/ai";
import FAQ from "../pages/FAQ";

const SearchBar = lazy(() => import("../Components/SearchBar"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const Home = lazy(() => import("../Components/Home/Home"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const DashboardAdminRoute = lazy(() => import("./DashboardAdminRoute"));
const CardDetails = lazy(() => import("../Components/CardDetails"));
const FormPage = lazy(() => import("../pages/FormPage"));

// userpageimports
const FeedReusable = lazy(() => import("../pages/FeedReusable"));
const UserSettings = lazy(() => import("../Components/User/UserSettings"));

const fieldsSignup = [
  {
    name: "userName",
    type: "text",
    placeholder: "User name",
    icon: <AiOutlineUser />,
    validation: {
      required: "This is required",
      minLength: {
        value: 4,
        message: "Must be min length of 4",
      },
      maxLength: {
        value: 20,
        message: "Must be max length of 20",
      },
    },
  },
  {
    name: "email",
    type: "email",
    placeholder: "E-mail",
    icon: <AiOutlineMail />,
    validation: {
      required: "This is required",
      pattern: {
        value:
          /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()\.,;:\s@"]+\.)+[^<>()\.,;:\s@"]{2,})$/,
        message: "Must be an email account",
      },
    },
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    icon: <AiOutlineLock />,
    validation: {
      required: "Password required",
      minLength: {
        value: 8,
        message: "Must have min 8 characters",
      },
      maxLength: {
        value: 20,
        message: "Must have max 20 characters",
      },
    },
  },
  {
    name: "passwordConfirmation",
    type: "pasword",
    placeholder: "Confirm password",
    icon: <AiOutlineLock />,
    validation: {
      required: "This is required",
      validate: (value, { password }) =>
        value === password || "The passwords do not match",
    },
  },
  {
    name: "gender",
    type: "select",
    placeholder: "Select your gender",
    validation: { required: "Please select your gender" },
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "non-binary", label: "Non Binary" },
    ],
  },
];

const fieldsLogin = [
  {
    name: "email",
    type: "email",
    placeholder: "E-mail",
    icon: <AiOutlineMail />,
    validation: {
      required: "This is required",
      pattern: {
        value:
          /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()\.,;:\s@"]+\.)+[^<>()\.,;:\s@"]{2,})$/,
        message: "Must be an email account",
      },
    },
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    icon: <AiOutlineLock />,
    validation: {
      required: "Password required",
      minLength: {
        value: 8,
        message: "Must have min 8 characters",
      },
      maxLength: {
        value: 20,
        message: "Must have max 20 characters",
      },
    },
  },
];
const SearchBarRoute = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <img
            className="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt="spinner"
          />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<SearchBar />}>
          <Route path="/faqs" element={<FAQ />} />
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={
              <FormPage
                formTitle="Log in to your account"
                fields={fieldsLogin || []}
                buttonTxt="Login"
              />
            }
          />
          <Route
            path="/signup"
            element={
              <FormPage
                formTitle="Create a new account"
                fields={fieldsSignup || []}
                buttonTxt="Sign up"
              />
            }
          />
          <Route path="/detail/:id" element={<CardDetails />} />

          {/* User page routes */}
          <Route>
            <Route index element={<UserSettings />} path="userconfig" />
            <Route
              index
              element={<FeedReusable section="Read" listName="read" />}
              path="read"
            />
            <Route
              index
              element={<FeedReusable section="Favorites" listName="favorite" />}
              path="favorites"
            />
            <Route
              index
              element={<FeedReusable section="Wish" listName="wish" />}
              path="wish"
            />
          </Route>
        </Route>
        <Route path="/dashboard" element={<DashboardAdminRoute />} />
      </Routes>
    </Suspense>
  );
};

export default SearchBarRoute;
