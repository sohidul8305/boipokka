import React, { Suspense, useEffect, useState } from 'react';
import Book from '../../Book/Book';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);

    const bookpromise = fetch('./booksData.json').then(res => res.json())
    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>
            <Suspense fallback={<span>loading....</span>}>
                <Book bookpromise={bookpromise}></Book>
            </Suspense>
        </div>
    );
};

export default Books;