var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newItem = {};
  newItem.itemName = item;
  newItem.itemPrice = Math.floor(Math.random() * 100);
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length > 0){
    let cartView = [];
    for(let i = 0; i < cart.length; i++) {
      cartView.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
      return `In your cart, you have ${cartView.join(", ")}`
    }
  } else {
    return "Your shopping cart is empty."
  }
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
