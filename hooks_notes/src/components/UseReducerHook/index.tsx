import React, { useReducer } from "react";

const initialState = {
    counter: 100,
    secondCounter: 200,
};

type ACTION_TYPES =
    | { type: "increment"; payload: number }
    | { type: "decrement"; payload: number };

function counterReducer(state: typeof initialState, action: ACTION_TYPES) {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                counter: state.counter + action.payload,
                secondCounter: state.secondCounter + action.payload * 2
            };
        case "decrement":
            return {
                ...state,
                counter: state.counter - action.payload,
                secondCounter: state.secondCounter - action.payload * 2
            };
        default:
            throw new Error("Bad action");
    }
}

const UseReducerHook: React.FC = () => {
    // its useful when you wana to change multiple states at once
    // a single system to keep track all the states you want to change

    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div>
            <h1>{state.counter}</h1>
            <h1>{state.secondCounter}</h1>
            <button
                onClick={() => {
                    dispatch({
                        type: "increment",
                        payload: 10,
                    });
                }}
            >
                Increment
            </button>

            <button
                onClick={() => {
                    dispatch({
                        type: "decrement",
                        payload: 10,
                    });
                }}
            >
                Decrement
            </button>
        </div>
    );
};

export default UseReducerHook;
