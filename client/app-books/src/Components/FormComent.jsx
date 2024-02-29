import React, { useState, useCallback, useEffect } from "react";
import { useAuth } from "../context/AuthUserProvider";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const FormComent = ({ onSubmit }) => {
  const [dataBook, setDataBook] = useState({});
  const [loading, setLoading] = useState(false);

  const { userPrueba, userDataPrueba } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const { id } = useParams();

  const handleCommentSubmit = (data) => {
    const dataComment = {
      userId: userDataPrueba.id,
      comment: data.comment,
    };

    onSubmit(dataComment);
    reset(); // Limpiar el formulario después de enviar el comentario
  };

  const callBookId = useCallback(async (bookId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://example-data.draftbit.com/books/${bookId}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data) {
        setDataBook(data);
      }
    } catch (error) {
      console.error("Error", error);
      setError(
        "Error al cargar los detalles del libro. Por favor, inténtalo de nuevo."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    callBookId(id);
  }, [id, callBookId]);

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
