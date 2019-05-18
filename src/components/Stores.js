import React from "react";

/* !!! You must import the same "MyContext" (or whatever you named it)
      from the main Provider.js file you created first !!! */
import { MyContext } from "./Provider";

// Wrap the component in the "MyContext.Consumer" then you will have access
const Stores = () => (
  <MyContext.Consumer>
    {/* pull the context out of the "props" */}
    {context => (
      <div className="stores">
        {/* I can map over now that I have access! */}
        {context.stores.map((store) => {
          // render out some data and you're good to go!!!
          return(
            <div className="store">
              <h3>{store.name}</h3>
              <ul className="productList">
                {/* since I have access to the state, I can run an array on anything now! */}
                {store.products.map((prod) => {
                  return(
                    <li>Product: {prod.name} - <strong>${prod.price}</strong></li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    )}
  </MyContext.Consumer>
)

export default Stores;