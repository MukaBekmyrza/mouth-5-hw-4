import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchAllUsers from '../../store/creators/usersCreator';

const Users = () => {
    const dispatch = useDispatch();
    const { users, isLoading, isError } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])
    return (
        <div>
            {isLoading && 'loading'}
            {isError && isError}
            {users.length && JSON.stringify(users)}
        </div>
    );
}

export default Users;
