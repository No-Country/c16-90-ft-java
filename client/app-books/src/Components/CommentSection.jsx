import React from "react";
import Comments from "./Comments";
import FormComent from "./FormComent";

const CommentSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <Comments />
      <Comments />
      <FormComent />
    </div>
  );
};

export default CommentSection;
