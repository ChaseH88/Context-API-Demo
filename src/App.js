import React from "react";
import './App.css';

// Other Components
import Stores from "./components/Stores";

// Import the Context here and wrap out app!
import Provider from "./components/Provider";
import Products from "./components/Products";

// Doing so will allow all of our components to have access to the data

const App = () => (
  <Provider>
    <h1>Stores!</h1>
    <Stores />
    <Products />
  </Provider>
);

export default App;