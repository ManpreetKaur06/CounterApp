import React , {useReducer} from "react";

export function counterReducer(state , action){
    if(action.type == 'INCREMENT'){
        return {count: state.count +1};
    }else if(action.type == 'DECREMENT'){
        return {count : state.count -1 };
    }else if(action.type == 'RESET'){
        return {count : 0};
    }

    return state;
}

export default function App(){

    const [counterState , dispatchCounterAction] = useReducer(counterReducer , {count :0});

    return(
        <>
        <div id="app">
            <h1>The COunter App</h1>
            <p id="actions">
                <button onClick={() => dispatchCounterAction({type : 'INCREMENT'})}>Increment</button>
                <button onClick={() => dispatchCounterAction({type : 'DECREMENT'})}>Decrement</button>
                <button onClick={() => dispatchCounterAction({type : 'REDET'})}>Reset</button>
            </p>
            <p id="counter">{counterState.count}</p>
        </div>
        </>
    );
}