import { createStore } from "redux";

const reducer=(state,action)=>{
switch(action.type){
    case "ADD":
    state=state+action.payload;
    break;
    case "SUBSTRACT":
    state=state-action.payload;
    break;
}
return state;
};

const store=createStore(reducer,1);

store.subscribe(()=>{
 console.log("store updated",store.getState());
});

store.dispatch({
    type:"ADD",
    payload:10
});

store.dispatch({
    type:"SUBSTRACT",
    payload:80
})