import React, { useState, useEffect } from "react";

// como el nombre de usuario, fecha
//  y hora de registro, y cualquier dato adicional útil.
const headerNav = [
  "Name",
  "Email",
  "Registration Date",
  "Registration time",
  "Genre",
];

const TableOne = () => {
  const [dataUser, setDataUser] = useState([]);
  const [hiddenUsers, setHiddenUsers] = useState(false);
  const [sortOption, setSortOption] = useState("recientes");

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://example-data.draftbit.com/people?_limit=40"
      );
      const data = await response.json();
      setDataUser(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleButtonAct = async () => {
    try {
      const response = await fetch(
        "https://example-data.draftbit.com/people?_limit=40"
      );
      const newData = await response.json();
      setDataUser(newData);
      alert("Data updated correctly");
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("Error al actualizar datos");
    }
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between mx-auto items-center">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Users {dataUser.length}
        </h4>

        <form className="max-w-sm mx-auto">
          <select
            id="countries"
            className="bg-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleSortChange}
          >
            <option value="recientes">More recent</option>
            <option value="antiguos">Older</option>
          </select>
        </form>

        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleButtonAct}
        >
          Update
        </button>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          {headerNav.map((items, index) => (
            <div className="p-2.5 xl:p-5" key={index}>
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                {items}
              </h5>
            </div>
          ))}
        </div>

        <div className="usersContainer">
          {dataUser
            .sort((a, b) => {
              if (sortOption === "recientes") {
                return (
                  new Date(b.birthdate).getTime() -
                  new Date(a.birthdate).getTime()
                );
              } else if (sortOption === "antiguos") {
                return (
                  new Date(a.birthdate).getTime() -
                  new Date(b.birthdate).getTime()
                );
              }
              return 0;
            })
            .map((user, key) => (
              <div
                className={`grid grid-cols-3 sm:grid-cols-5 ${
                  key === user.length - 1
                    ? ""
                    : "border-b border-stroke dark:border-strokedark"
                } ${key >= 10 && hiddenUsers === false && "hidden"}`}
                key={key}
              >
                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                  <div className="flex-shrink-0">
                    <img
                      src={user.avatar}
                      alt={user.first_name}
                      className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                    />
                  </div>
                  <p className="hidden text-black dark:text-white sm:block">
                    {user.first_name}
                  </p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">{user.email}</p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-dark dark:text-white">{user.birthdate}</p>
                </div>

                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                  <p className="text-black dark:text-white">{user.teamId}hs</p>
                </div>

                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                  <p
                    className={`${
                      user.gender == "Female"
                        ? "text-pink-400"
                        : "text-blue-500"
                    }`}
                  >
                    {user.gender}
                  </p>
                </div>
              </div>
            ))}
        </div>
        {dataUser.length > 9 && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setHiddenUsers(!hiddenUsers)}
              className="bg-blue-500 px-3 py-1 shadow-lg shadow-gray-500/50 ¿ text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]"
            >
              {!hiddenUsers ? "See more" : "See less"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableOne;
