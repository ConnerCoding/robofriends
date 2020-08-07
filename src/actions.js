import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
} from './constants.js';

// used for live updating of the searchbox.js
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

// used to retrieve the robots from the api
// which happens on componentDidMount
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}