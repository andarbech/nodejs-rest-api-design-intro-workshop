import React from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { response } from 'express';
const BookComponent = () => {
    const book = useSelector((state) => state.allBooks.books);
    // const { title, author, genre, year, pages } = book[0]
    const fetchBooks = async() => {
        response = await axios
            .get('http://localhost:4000/books/')
            .catch((err) => {
                console.log("err", err)
            });
        console.log(response)
    }
    useEffect(() => {
        fetchBooks();
    },[])
    return (<div className='four column wide'>
        <div className='iu link cards'>
            <div className='card'>
                <div className='content'>
                    <div className='header'>{title}</div>
                    <div className='body'>{author}</div>
                    <div className='body'>{genre}</div>
                    <div className='body'>{year}</div>
                    <div className='body'>{pages}</div>
                </div>
            </div>
        </div>        
    </div>)
}
export default BookComponent;