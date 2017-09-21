import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import propTypes from "prop-types";

export class Home extends React.Component{
  constructor(props){
    super();
    this.state={
      age:props.age,
      homeLink:props.initName
    }
  }

  makeMeOlder(){
    this.setState({
      age:this.state.age+3
    });

  }

changeHeaderName(){
  this.props.changeLink(this.state.homeLink)
}

reflectHeaderChange(event){
  this.setState({
    homeLink:event.target.value
  })
}

  render(){
    return(
      <div className="container">
      <br /><br /><br /><br />
      <div className="jumbotron">
        <h1>In Home Component</h1>
        <p>age gonna be--incremented-- <strong>{this.state.age}</strong></p>
        <p>object user name gonna be--{this.props.user.name}  and age --{this.props.user.age}</p>
        <hr/>
        <button className="btn btn-info" onClick={this.makeMeOlder.bind(this)}>Incre Age</button><hr/>
        <button className="btn btn-secondary" onClick={this.props.greet}>AlertMSG</button>
        <hr/>
        <div className="col-xs-6">
        <input className="form-control" type="text" value={this.state.homeLink} onChange={(event)=>this.reflectHeaderChange(event)} />
        </div>
        <button className="btn btn-success" onClick={this.changeHeaderName.bind(this)}>ChangeHeaderName</button>
      </div>
      </div>
    )
  }
}

Home.propTypes={
  name:propTypes.string
};
