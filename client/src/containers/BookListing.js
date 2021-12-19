import {useSelector} from 'react-redux';
import BookComponent from './BookComponent';


const BookListing = () => {
    const books = useSelector((state) => state);
    // console.log(books)
    return (
        <div className='ui grid container'>
        <BookComponent/>
    </div>)
}
export default BookListing;
