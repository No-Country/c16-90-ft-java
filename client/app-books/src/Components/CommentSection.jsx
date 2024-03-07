import React, { useState, useEffect, useCallback } from "react";
import Comments from "./Comments";
import FormComent from "./FormComent";
import { useAuth } from "../context/AuthUserProvider";
import AlertUserLogin from "./Alerts/AlertUserLogin";
import commentServices from "../services/commentServices";
import Information from "./Alerts/Information";
import { useAuthUser } from "../context/UserSessionLocalProvider";

const CommentSection = ({ bookId }) => {
  const [loading, setLoading] = useState(false);

  const { sessionActive } = useAuthUser();

  // console.log(comments);
  // console.log(bookId);

  // const loadComments = useCallback(async () => {
  //   try {
  //     const fetchedComments = await commentServices.getComments(bookId);
  //     setComments(fetchedComments);
  //   } catch (error) {
  //     console.error("Error loading comments:", error);
  //     // Puedes mostrar un mensaje de error al usuario o realizar otras acciones necesarias
  //   }
  // }, [bookId]);

  // const addCommentt = useCallback(
  //   async (newComment) => {
  //     try {
  //       await commentServices.postComment(bookId, newComment);
  //       loadComments();
  //     } catch (error) {
  //       console.error("Error adding comment:", error);
  //       // Puedes mostrar un mensaje de error al usuario o realizar otras acciones necesarias
  //     }
  //   },
  //   [bookId, loadComments]
  // );

  // useEffect(() => {
  //   // Cargar comentarios del servidor cuando el componente se monta
  //   loadComments();
  // }, [bookId]); // Asegúrate de volver a cargar los comentarios si cambia el libro

  //con la funcion addCommentt le paso el Id de user el bookId y la reseña

  return (
    <div className="flex flex-col gap-4">
      {!sessionActive && (
        <AlertUserLogin
          title="Please log in to your account to view comments"
          text="You need to have a valid account to see the messages"
        />
      )}
      {loading && <p className="text-white">Loading comments...</p>}
      {/* {comments.length === 0 && !loading && <Information />} */}
      <Comments bookId={bookId} />
      <FormComent />
    </div>
  );
};

export default CommentSection;
