import { createStore } from "redux";

const initialState={
    result:1,
    lastValues:[],
    username:"max"
};

const reducer=(state=initialState,action)=>{
switch(action.type){
    case "ADD":
    state={
        ...state,
        result:state.result+action.payload,
        lastValues:[...state.lastValues,action.payload]
    };
    break;
    case "SUBSTRACT":
    state={
        ...state,
        result:state.result-action.payload,
        lastValues:[...state.lastValues,action.payload]
    }
    break;
}
return state;
};

const store=createStore(reducer);

store.subscribe(()=>{
 console.log("store updated",store.getState());
});

store.dispatch({
    type:"ADD",
    payload:100
});

store.dispatch({
    type:"SUBSTRACT",
    payload:80
}); 