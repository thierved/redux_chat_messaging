import {ADD_MESSAGE, DELETE_MESSAGE} from '../actions';

const message = (state=[], action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return  [...state, action.message];    
        case DELETE_MESSAGE:            
            return state.filter(item => item === action.messageIndex);             
        default:
            return state;
    }
}

export default message;
