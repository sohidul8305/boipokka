import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredBD } from '../../Utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const { author, bookName, category, image, publisher, rating, review, tags, totalPages
        , yearOfPublishing } = singleBook;

    const handleMarkAsRead = id => {
        // Store with Id
        // where to store
        // array or collection
        // if book alerady exit the show a alert
        // if book not exit then push in the collection or aray

        MySwal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        })

            .then(() => {
                return MySwal.fire(<p>Shorthand works too</p>)
            })
        addToStoredBD(id)
    }

    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h2>{author}</h2>
            <h5>{bookName}</h5>
            <h3>{category}</h3>
            <h6>{publisher}</h6>
            <h6>Rating Score: {rating}</h6>
            <p>{tags}</p>
            <p>{review}</p>
            <h1>Total Page: {totalPages
            }</h1>
            <h1>Year Punlished: {yearOfPublishing}</h1>

            <button onClick={() => handleMarkAsRead(id)} className="btn btn-accent m-2">Mar as Read</button>
            <button className="btn btn-info m-2">Add To WishList</button>
        </div>
    );
};

export default BookDetails;