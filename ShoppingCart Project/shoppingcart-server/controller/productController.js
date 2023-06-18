const products=require('../model/products');

let updatedProducts = [...products];

exports.getAll=(request,response)=>{
  if(updatedProducts.length===0){
    response.status(200).json({message: "There are no items"});
  } else {
    response.status(200).json(updatedProducts);
  }
}

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