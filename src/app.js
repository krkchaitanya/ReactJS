import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import { Header} from "./app/header.js";
import {Home} from "./app/home.js";

class Main extends React.Component{
constructor(){
  super();
this.state={
  homeLink:"Homee"
}
}

onChangeLink(newName){
  this.setState({
    homeLink:newName
  });
}

  onGreet(){
    alert("greeting you for your success");
  };

  render(){
    var user={
      name:"mikel",
      age:23,
      address:"houston"
    };

    return(
      <div>
      <Header homeLink={this.state.homeLink}/>
      <Home   changeLink={this.onChangeLink.bind(this)} initName={this.state.homeLink} name={"max"}  user={user} age={22} greet={this.onGreet}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
