import React from "react";
import { useAuth } from "../context/AuthUserProvider";
import { useForm } from "react-hook-form";

const FormComent = ({ onSubmit }) => {
  const { userPrueba } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const handleCommentSubmit = (data) => {
    onSubmit(data.comment);
    reset(); // Limpiar el formulario después de enviar el comentario
  };

  return (
    <form
      className="bg-white px-10 py-10 rounded-lg mx-10 shadow-md"
      onSubmit={handleSubmit(handleCommentSubmit)}
    >
      <h3 className="text-lg font-bold mb-2">Add a comment</h3>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="comment">
          Comment
        </label>
        <textarea
          {...register("comment", { required: true, minLength: 20 })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="comment"
          rows="3"
          placeholder="Enter your comment"
          disabled={!userPrueba}
        ></textarea>
      </div>
      <div className="w-full justify-end flex">
        <button
          className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  "
          type="submit"
          disabled={!userPrueba}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComent;
