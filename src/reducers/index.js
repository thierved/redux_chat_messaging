import {ADD_MESSAGE, DELETE_MESSAGE} from '../actions';

const message = (state=[], action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return  [...state, action.message];    
        case DELETE_MESSAGE:    
            return [
                ...state.slice(0, action.messageIndex),
                ...state.slice(action.messageIndex + 1)
            ]             
        default:
            return state;
    }
}

export default message;
