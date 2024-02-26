import React from "react";
import Comments from "./Comments";
import FormComent from "./FormComent";
import { useAuth } from "../context/AuthUserProvider";
import AlertUserLogin from "./Alerts/AlertUserLogin";

const CommentSection = () => {
  const { userPrueba } = useAuth();
  return (
    <div className=" flex flex-col gap-4">
      {!userPrueba && (
        <AlertUserLogin
          title="Please log in to your account to view comments"
          text="You need to have a valid account to see the messages"
        />
      )}
      <Comments />
      <Comments />
      <FormComent />
    </div>
  );
};

export default CommentSection;
