import { actionTypes } from "../constasts/actions-types";

const initialState = {
    books: [{
        id: 1,
        title: "cien años de soledad",
        author:"Gabo",
        genre: "narrativa",
        year: "1986",
        pages:"200"
        
    }]
}

export const bookReducer = (state=initialState, {type,payload}) => {
    switch (type) {
        case actionTypes.GET_BOOKS:
            return state;
        default:
            return state;
    }
}