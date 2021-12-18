import { actionTypes } from "../constasts/actions-types";

export const getBooks = (books) => {
    return {
        type: actionTypes.GET_BOOKS,
        payload: books
    };
}
export const selectBook = (book) => {
    return {
        type: actionTypes.SELECT_BOOK,
        payload: book
    };
}
export const updateBook = (book) => {
    return {
        type: actionTypes.UPDATE_BOOK,
        payload: book
    };
}
export const deleteBook = (book) => {
    return {
        type: actionTypes.DELETE_BOOK,
        payload: book
    };
}