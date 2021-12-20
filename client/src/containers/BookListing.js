import {useSelector} from 'react-redux';
import BookComponent from './BookComponent';


const BookListing = () => {
    const books = useSelector((state) => state);
    // console.log(books)
    return (<main>
        <div className='ui grid container'>
        <BookComponent/>
    </div>
    </main>)
}
export default BookListing;
