import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGreetingsApi } from '../redux/greetings'

const Greeting = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGreetingsApi());
    }, [dispatch]);

    const greeting = useSelector((state) => state.greetingsReducer);

    return (
        <div>
            <h1 className='font-bold text-2xl m-4 p-4'>Greeting Message: <span className='text-red-500'>{greeting}</span></h1>
        </div>
    )
}

export default Greeting