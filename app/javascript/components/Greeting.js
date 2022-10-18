import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGreeting } from './store/greeting_reducer';

const Greeting = () => {
    const dispatch = useDispatch();
    const { loading, error, greet } = useSelector((state) => state.greeting);

    useEffect(() => {
        dispatch(getGreeting());
    }, []);

    return (
        <>
            <div className="container">
                <h1>Greetings</h1>
                <p>
                    {greeting.length
                        ? greeting
                        : 'Loading a greetings...'}
                </p>
            </div>
        </>
    );
};

export default Greeting;