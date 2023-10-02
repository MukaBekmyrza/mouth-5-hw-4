import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { trigger } from '../../store/slices/counterSlice';

const Counter = () => {
    const state = useSelector((state) => state)
    const { count } = useSelector((state) => state.count);

    const dispatch = useDispatch();

    const onIncrement = () => dispatch(trigger(1));
    const onDecrement = () => dispatch(trigger(-1));
    
    console.log(trigger(-1));
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrement}>INC</button>
            <button onClick={onDecrement}>DEC</button>
        </div>
    );
}

export default Counter;
