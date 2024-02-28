import React from "react";

const commentServices = () => {
  //Enviar comentario al servidor:
  const postComment = async (bookId, comment) => {
    try {
      const response = await fetch(`api/books/${bookId}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment }),
      });

      if (!response.ok) {
        throw new Error(`Error posting comment! Status: ${response.status}`);
      }

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
        throw new Error(`Error getting comments! Status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error("Error getting comments:", error);
      throw error;
    }
  };

  return { postComment, getComments };
};

export default commentServices;
