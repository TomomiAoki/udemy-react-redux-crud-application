import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange= {() => {console.log("I on clicked")}} />;
      </React.Fragment>
    )
    
    
    
    // const greeting = "hi TOM"
    // const dom = <h1 className="foo">{greeting}</h1>
    // return dom;
  }
}

export default App;
