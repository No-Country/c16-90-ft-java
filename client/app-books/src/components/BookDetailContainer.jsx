import React, { useState, useEffect } from 'react';
import BookDetail from './BookDetail';
import pedirDatos from './pedirDatos';
import { useParams } from 'react-router-dom';

const BookDetailContainer = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await pedirDatos();
                const foundBook = response.find(book => book.id === parseInt(id));
                if (foundBook) {
                    setBook(foundBook);
                } else {
                    setError(new Error('Libro no encontrado'));
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        loading ? (
            <p>Cargando...</p>
        ) : error ? (
            <p>Error: {error.message}</p>
        ) : !book ? (
            <p>Libro no encontrado</p>
        ) : (
            <BookDetail book={book} />
        )
    );
};

export default BookDetailContainer;