var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.random()*100;
  var itemObj = {itemName:item, itemPrice:Math.floor(price)};
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
 for (let i=cart.length; i<cart.length; i++);
  if (cart.length>0)
  {cart.push(`${[]} at $${Math.floor(Math.random()*100)}`);
  return "In your cart, you have" +  cart + "."}
  else (cart.length===0);
  {return "Your shopping cart is empty."}
  
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
