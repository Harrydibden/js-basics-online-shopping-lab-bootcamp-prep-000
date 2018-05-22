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
    }
    if(cartView.length === 1){
      return `In your cart, you have ${cartView[0]}.`;
    } else if (cartView.length === 2){
      return `In your cart, you have ${cartView[0]}, and ${cartView[1]}.`;
    } else {
      return `In your cart, you have ${cartView.slice(0, cart.length - 1).join(", ")}, and ${cartView[cartView.length - 1]}.`;
    }
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  let total = 0;
  for(let i = 0; i < cart.length; i++){
    total = total + cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      delete cart[i];
    } else {
      return "That item is not in your cart."
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
