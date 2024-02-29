import React from "react";
import Tables from "../pages/Tables";
import Settings from "../pages/Settings";
import { Route, Routes } from "react-router-dom";
import PageTitle from "../Components/Admin/PageTitle";
import tableUser from "../Components/Admin/Tables/TableUser";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../Components/Admin/Breadcrumbs/Breadcrumb";
import CardDataStats from "../Components/Admin/CardDataStats";
import FormReu from "../Components/FormReu";
import AdminButtonsSession from "../Components/Admin/AdminButtonsSession";
import Login from "../Components/Admin/Auth/Login";
import Register from "../Components/Admin/Auth/Register";

const pageRoutes = [
  {
    path: "/dashboard*",
    element: (
      <>
        <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <DefaultLayout>
          <Breadcrumb pageName="Dashboard" />
          <div className="bg-white overflow-hidden shadow rounded-lg border">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                User Profile
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                This is some information about the user.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    John Doe
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    johndoe@example.com
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Phone number
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    (123) 456-7890
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Address</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    123 Main St
                    <br />
                    Anytown, USA 12345
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </DefaultLayout>
      </>
    ),
  },
  {
    path: "dashboard/users",
    element: (
      <>
        <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <Tables
          compontentTable="userTable"
          pageName={"Tabla de usuarios"}
          pageRouteName={"users"}
        />
      </>
    ),
  },
  {
    path: "dashboard/books/table",
    element: (
      <>
        <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <Tables
          compontentTable="bookTable"
          pageName={"Tabla de libros"}
          pageRouteName={"books/table"}
        />
      </>
    ),
  },
  {
    path: "dashboard/books/create",
    element: (
      <>
        <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <Settings />
      </>
    ),
  },
  {
    path: "admin",
    element: (
      <>
        <AdminButtonsSession title="Welcome" />
      </>
    ),
  },
  {
    path: "admin/signin",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "admin/signup",
    element: (
      <>
        <Register />
      </>
    ),
  },
];

const DashboardAdminRoute = () => {
  return (
    <>
      <Routes>
        {pageRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};

export default DashboardAdminRoute;
