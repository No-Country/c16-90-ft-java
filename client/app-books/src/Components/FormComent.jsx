import React from "react";

const FormComent = () => {
  return (
    <form className="bg-white px-10 py-10 rounded-lg mx-10 shadow-md">
      <h3 className="text-lg font-bold mb-2">Add a comment</h3>
      <div className="mb-4 ">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="comment">
          Comment
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="comment"
          rows="3"
          placeholder="Enter your comment"
        ></textarea>
      </div>
      <button
        className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComent;
