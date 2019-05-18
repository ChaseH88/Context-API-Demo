import React, { Component, createContext } from 'react';

// 1. Once you have createContext imported from React, set it to a variable.
export const MyContext = createContext();

// 2. Create our provider component
class Provider extends Component {
  // Our App Data goes here! :)
  state = {
    stores: [
      {
        name: "Bob's Grocery",
        products: [
          {name: "Bread", price: 1.99},
          {name: "Milk", price: 3.99}
        ]
      },
      {
        name: "Food Mart",
        products: [
          {name: "Bread", price: 1.49},
          {name: "Milk", price: 3.29}
        ]
      }
    ]
  }

  /* 3. Render our MyContext Component and pass the state
        down as the value. Also pass the props down inside */
  render(){
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default Provider;
