import React from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux'
// import { useEffect,useState} from 'react'


const BookComponent= () => {
        const book = useSelector((state) => state.allBooks.books);
    const { title, author, genre, year, pages } = book[0]
    fetch('http://localhost:4000/books/', {
        method: 'GET',
        headers: { "content-Type": "application/json" },
        body:JSON.stringify(title)
    }).then(() => {
        console.log('get books')
    })
}


// const BookComponent = () => {
//     const [initialState, setInitialState] = useState([]);
//     useEffect(() => {
//         fetch('http://localhost:4000/books/').then(res => {
//             if (res.ok) {
//                 return res.json()
//             }
//         }).then(jsonReponse=>console.log(jsonReponse))
//     },[])
//     console.log(initialState)
//     return (<div className='four column wide'>Andrecitp</div>)
// }
// setInitialState(jsonReponse)


const BookComponent = () => {
    const book = useSelector((state) => state.allBooks.books);
    const { title, author, genre, year, pages } = book[0]
    // const fetchBooks = async() => {
    //     response = await axios
    //         .get('http://localhost:4000/books')
    //         .catch((err) => {
    //             console.log("err", err)
    //         });
    //     console.log(response)
    // }
    // useEffect(() => {
    //     fetchBooks();
    // },[])
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