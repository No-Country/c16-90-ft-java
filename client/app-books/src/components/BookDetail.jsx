import React from 'react';

const BookDetail = ({ book }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            {book ? (
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-64 w-full object-cover md:w-64" src={book.imgLinks} alt={book.title} />
                        </div>
                        <div className="p-4 md:p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{book.categories.join(', ')}</div>
                            <h2 className="block mt-1 text-lg leading-tight font-semibold text-gray-900">{book.title}</h2>
                            <p className="mt-2 text-gray-600">{book.description}</p>
                            <div className="mt-4">
                                <p>Authors: {book.authors.join(', ')}</p>
                                <p>Publish Date: {book.publishDate}</p>
                                <p>Page Count: {book.pageCount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center">Libro no encontrado</p>
            )}
        </div>
    );
};

export default BookDetail;