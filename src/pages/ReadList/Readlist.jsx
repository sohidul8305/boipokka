import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Book from '../Book/Book';

const Readlist = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");
    const data = useLoaderData();
    console.log(data)

    useEffect(() => {
        const storedBookData = getStoredBook();
        const ConvertedStoredBooks = storedBookData.map(id => parseInt(id));

        const myReadList = data.filter(book =>
            ConvertedStoredBooks.includes(book.bookId)
        );
        setReadList(myReadList);
    }, [data]);

    const handleSort = (type) => {
        setSort(type)

        if (type === "pages") {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
            console.log(sortedByPage)
        }

        if (type === "ratings") {
            const sortedByrating = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByrating)
        }

    }

    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">sort by : {sort ? sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("pages")}>pages</a></li>
                    <li><a onClick={() => handleSort("ratings")}>ratings</a></li>
                </ul>
            </details>
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
