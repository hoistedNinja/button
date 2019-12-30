import React from "react";
import ReactDOM, { render } from "react-dom";

import "./styles.css";

const styles={
  fontFamily:'Sans-Serif',
  textAlign:'center',
};
class App extends React.Component{

constructor(props){
  super(props)
  this.state={count:0,}
}
increaseCount(){
  this.setState({count:this.state.count+1})
}

  render(){
    return (
      <div style={styles}>

        <div>
          <button onClick={this.increaseCount.bind(this)}>Increase</button>
        </div>
        <h2>{this.state.count}</h2>
      
      
      </div>
    )
  }
}


render(<App count/>,document.getElementById('root'))

