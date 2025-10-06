import React, { use } from 'react';

const Book = ({ bookpromise }) => {
    const data = use(bookpromise);
    console.log(data)
    return (
        <div>
            <h1>Single book</h1>
        </div>
    );
};

export default Book;