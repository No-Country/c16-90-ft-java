import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import FormComent from "./FormComent";
import { useAuth } from "../context/AuthUserProvider";
import AlertUserLogin from "./Alerts/AlertUserLogin";
import commentServices from "../services/commentServices";
import Information from "./Alerts/Information";

const CommentSection = ({ bookId }) => {
  const { userPrueba } = useAuth();
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const loadComments = async () => {
    try {
      const fetchedComments = await commentServices.getComments(bookId);
      setComments(fetchedComments);
    } catch (error) {
      // Manejar errores de carga de comentarios
      console.log("Error al cargar los comentarios", error);
    }
  };

  const addCommentt = async (newComment) => {
    try {
      // Enviar el nuevo comentario al servidor
      await commentServices.postComment(bookId, newComment);
      // Recargar comentarios después de agregar uno nuevo
      loadComments();
    } catch (error) {
      // Manejar errores al agregar comentarios
    }
  };

  useEffect(() => {
    // Cargar comentarios del servidor cuando el componente se monta
    loadComments();
  }, [bookId]); // Asegúrate de volver a cargar los comentarios si cambia el libro

  return (
    <div className="flex flex-col gap-4">
      {!userPrueba && (
        <AlertUserLogin
          title="Please log in to your account to view comments"
          text="You need to have a valid account to see the messages"
        />
      )}
      {comments.length === 0 && <Information />}
      <CommentsList comments={comments} />
      <FormComent onSubmit={addComment} />
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <Comments key={index} comments={comment} />
      ))}
    </>
  );
};

export default CommentSection;
