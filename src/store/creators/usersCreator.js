import { setError, setLoading, setUsers } from "../slices/usersSlice"

const fetchAllUsers = () => (dispatch) => {
    dispatch(setLoading(true))
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => dispatch(setUsers(data)))
    .catch((err) => dispatch(setError(err.message)))
};


const customDispatch = (action) => {
    if(typeof action === "object"){

    }
    else if (typeof action === 'function'){
        action(customDispatch)
    }
}


export default fetchAllUsers;