const GET_GREETING = 'rails_webpack_hello/greetings/GET_GREETING';

const greetingFetched = (message) => ({
    type: GET_GREETING,
    payload: {
        message,
    },
});

export const getGreeting = () => (dispatch) => {
    const URL = 'api/v1/greetings';
    fetch(URL)
        .then((res) => res.json())
        .then((res) => {
            dispatch(greetingFetched(res.data));
        })
        .catch((error) => console.log(error));
};

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_GREETING:
            return action.payload.message;
        default:
            return state;
    }
}