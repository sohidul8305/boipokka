import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Book from '../Book/Book';

const Readlist = () => {
    const [readList, setReadList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedBookData = getStoredBook();
        const ConvertedStoredBooks = storedBookData.map(id => parseInt(id));

        const myReadList = data.filter(book =>
            ConvertedStoredBooks.includes(book.bookId)
        );
        setReadList(myReadList);
    }, [data]); // ✅ dependency হিসেবে data দাও

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I Read ({readList.length})</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {readList.map(b => (
                            <Book key={b.bookId} singleBook={b} />
                        ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Readlist;
