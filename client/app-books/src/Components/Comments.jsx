// Importar los módulos necesarios de React y Tailwind CSS
import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Asegúrate de haber configurado correctamente Tailwind CSS en tu proyecto

// Componente principal
function Comments() {
  // Estado para almacenar los comentarios
  const [comments, setComments] = useState([]);

  // Estado para almacenar el valor del input
  const [inputValue, setInputValue] = useState("");

  // Manejar el evento al presionar una tecla en el input
  const handleKeyDown = (e, currentComment) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      // Crear un nuevo comentario
      const newComment = {
        text: inputValue,
        likes: 0,
        responses: [],
      };

      // Actualizar el estado de los comentarios
      setComments((prevComments) => {
        if (currentComment === null) {
          // Si no hay comentario actual, agregar el nuevo comentario al inicio
          return [newComment, ...prevComments];
        } else {
          // Si hay un comentario actual, agregar el nuevo comentario a sus respuestas
          currentComment.responses = [newComment, ...currentComment.responses];
          return [...prevComments];
        }
      });

      // Limpiar el valor del input
      setInputValue("");

      // Enfocar el input
      document.getElementById("input").focus();
    }
  };

  // Manejar el cambio en el valor del input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Renderizar comentarios recursivamente
  const renderComments = (arr) => {
    return arr.map((comment, index) => (
      <div key={index} className="comment-container">
        <div>{comment.text}</div>
        <div className="actions-container">
          <button onClick={() => handleReplyClick(comment)}>Reply</button>
          <button onClick={() => handleLikeClick(comment)}>{`${
            comment.likes > 0 ? `${comment.likes} likes` : "likes"
          }`}</button>
        </div>
        <div className="responses-container">
          {comment.responses.length > 0 && renderComments(comment.responses)}
        </div>
      </div>
    ));
  };

  // Manejar el clic en el botón "Reply"
  const handleReplyClick = (comment) => {
    // Clonar el input y configurar su evento
    const newInput = document.getElementById("input").cloneNode(true);
    newInput.value = "";
    newInput.focus();
    newInput.addEventListener("keydown", (e) => handleKeyDown(e, comment));

    // Insertar el nuevo input antes del contenedor de respuestas
    comment.responses.unshift({
      text: "", // Puedes dejar el texto vacío o poner un texto predeterminado
      likes: 0,
      responses: [],
    });
    setComments([...comments]);
  };

  // Manejar el clic en el botón "Like"
  const handleLikeClick = (comment) => {
    // Incrementar el contador de likes
    comment.likes++;
    setComments([...comments]);
  };

  return (
    <div className="w-3/4 mx-auto mt-10">
      <div id="comments-container" className="flex flex-col gap-5">
        {renderComments(comments)}
      </div>
      <div className="input-container">
        <input
          id="input"
          className="input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default Comments;
