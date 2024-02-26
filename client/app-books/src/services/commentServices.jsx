import React from "react";

const commentServices = () => {
  //Enviar comentario al servidor:
  const postComment = async (bookId, comment) => {
    try {
      const response = await fetch(`api/books/${bookId}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Puedes incluir otros encabezados según sea necesario, como el token de autenticación si lo tienes
        },
        body: JSON.stringify({ comment }),
      });

      if (!response.ok) {
        throw new Error("Error posting comment");
      }

      // Devuelve la respuesta en caso de que necesites manejarla en el componente
      return response.json();
    } catch (error) {
      console.error("Error posting comment:", error);
      throw error;
    }
  };

  //Obtener el comentario
  const getComments = async (bookId) => {
    try {
      const response = await fetch(`api/books/${bookId}/comments`);

      if (!response.ok) {
        throw new Error("Error getting comments");
      }

      // Devuelve los comentarios en caso de que necesites manejarlos en el componente
      return response.json();
    } catch (error) {
      console.error("Error getting comments:", error);
      throw error;
    }
  };

  return { postComment, getComments };
};

export default commentServices;
