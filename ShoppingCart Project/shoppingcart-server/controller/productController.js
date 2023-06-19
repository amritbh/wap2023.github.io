const products=require('../model/products');
//Create a copy of the products array and assign it to the updatedProducts variable using the spread operator.
let updatedProducts = [...products];
/**
The `getAll` function retrieves all products from an initial copy of the `products` array and returns them in a JSON response
 as `updatedProducts`. If `updatedProducts` is empty an appropriate JSON message is returned instead.
 */
exports.getAll=(request,response)=>{
  if(updatedProducts.length===0){
    response.status(200).json({message: "There are no items"});
  } else {
    response.status(200).json(updatedProducts);
  }
}
/**
The `placeOrder` function takes an order from a `cart` object sent in the request body. It loops through each item in the cart and 
looks for the corresponding product in the `updatedProducts` array. If the product exists and has enough available stock to fulfill
 the order, the product's `stock_quantity` is updated to reflect the order. If the product does not exist or does not have enough 
 stock, the `orderValid` flag is set to `false`.
 */
exports.placeOrder=(request,response)=>{
  const cart=request.body.cart;
  let orderValid = true;
  cart.forEach(cartItem => {
    const productName = cartItem.name;
    const quantity = cartItem.stock_quantity;
    const productIndex = updatedProducts.findIndex(product => product.name === productName);
    if (productIndex !== -1) {
      if (updatedProducts[productIndex].stock_quantity >= quantity) {
        updatedProducts[productIndex].stock_quantity -= quantity;
      } else {
        orderValid = false;
      }
    } else {
      orderValid = false;
    }
  });
  if (orderValid) {
    response.status(200).json(products);
  } else {
    response.status(400).json({message: "Invalid order"});
  }
}