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
            <h1 className='font-bold m-4 p-4'>Greeting Message: <span className='text-primary'>{greeting}</span></h1>
        </div>
    )
}

export default Greeting