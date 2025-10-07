import React from 'react';
import {
    createBrowserRouter
} from "react-router";
import Root from '../pages/Root/Root';
import Errorpage from '../pages/Root/Errorpage/Errorpage';
import Home from '../pages/Root/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';
import Readlist from '../pages/ReadList/Readlist';
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                index: true,
                loader: () => fetch('./booksData.json'),
                path: "/home",
                Component: Home,
            },

            {
                path: '/about',
                Component: About,
            },

            {
                path: '/bookDetails/:id',
                loader: () => fetch('./booksData.json'),
                Component: BookDetails
            },

            {
                path: '/readList',
                Component: Readlist
            }
        ]
    },
]);
