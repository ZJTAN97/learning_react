import React, { useReducer } from 'react'


const UseReducerHook: React.FC = () => {

    // its useful when you wana to change multiple states at once
    // a single system to keep track all the states you want to change

    const reducer = (state: any, action:any) => {
        switch(action.type) {
            case "INCREMENT":
                return {
                    count: state.count + 1,
                    showText: state.showText
                }
            case "TOGGLE":
                return {
                    count: state.count,
                    showText: !state.showText
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, 
        {
            count: 0,
            showText: true
        })
    

    return (
        <div>
            <h1>{state.count}</h1>
            <button
              onClick={() => {
                dispatch({
                    type:"INCREMENT"
                })
                dispatch({
                    type:"TOGGLE"
                })
              }}
            >
                Click Here
            </button>
            { state.showText && <p>This is a text</p> }
        </div>
    )
}


export default UseReducerHook;
