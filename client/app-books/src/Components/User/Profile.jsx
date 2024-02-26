import React, { useState } from "react";
import { AiOutlineUser, AiOutlineCamera } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";

const Profile = ({ user }) => {
  
  return (
    <div className="items-center space-x-4 gap-4">
      <div className="w-40 h-40 border-2 border-white rounded-full">
        <img src="" alt="profile picture" />
        <div  className=" text-2xl ">
          <label htmlFor="profile-picture-input" >
            <AiOutlineCamera />
          </label>
        </div> 
        <input type="file" id="profile-picture-input" hidden />
      </div>
      <div className="username">
      <h2 className="text-3xl font-semibold">user name</h2>
        {/* {isEditing ? (
          <>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
            <button onClick={handleEditSave}>Save</button>
            <button onClick={handleEditCancel}>Cancel</button>
          </>
        ) : (
          <>
            <AiOutlineUser />
            <span onClick={handleEditClick}>{user.username}</span>
          </>
        )} */}
      </div>
    </div>
  );
};

export default Profile;