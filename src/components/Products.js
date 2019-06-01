import React, { useContext, Fragment } from "react";
import { MyContext } from "./Provider";

const Products = () => {

  // Use Context Hook Example
  const data = useContext(MyContext);

  const showProducts = () => {
    const { stores } = data;
    let products = stores.map(store => {
      return(<Fragment>{store.products.map(prod => {
        return(<li>{prod.name}</li>)
      })}</Fragment>)
    })
    return products;
  }

  return(
    <Fragment>
      <hr />
      <h3>All Products</h3>
      <ul>
        {showProducts()}
      </ul>
    </Fragment>
  )
}

export default Products;