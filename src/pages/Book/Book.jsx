import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';
const Book = ({ singleBook }) => {
    const { bookName, author, bookId, image, rating, category, tags, yearOfPublishing, publisher } = singleBook;

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-full shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
                    <img
                        className="h-[180px] w-full object-cover rounded-md"
                        src={image}
                        alt={bookName}
                    />
                </figure>
                <div className='flex justify-center gap-10'>
                    {
                        tags.map(tag => <buton>{tag}</buton>)
                    }
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>Book by : {publisher}</p>
                    <div className='border-t-1 border-dashed'></div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}<FaStarHalfAlt /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
