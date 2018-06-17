export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message
    }
}

export const deleteMessage = (messageIndex) => {
    return {
        type: DELETE_MESSAGE,
        messageIndex
    }
}