console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = ['a', 'b', 'c', 'd'];
const maxItems = 5;
console.log(basket);
console.log(basket.indexOf('o'));
console.log(basket.splice(1));
console.log(basket);

function isFull(basket) {
  if (basket.length >= 5)
    return true;

  else return false;
}

function addItem(item) {
  if (isFull(basket)) {
    return false
  }
  else {
    basket.push(item);
    return true;
  }
}

function removeItem(item) {
  if (basket.indexOf(item) == -1)
    return null;
  else {
    basket.splice(basket.indexOf(item));
    return item;
  }
}

console.log('TEST removeItem; should return "peas"');
console.log(removeItem('peas'));

console.log('Test addItem  - should return "true"', addItem('blueberries'))
console.log('Test addItem - basket should contain "blueberries"', basket);

function listItems(basket) {
  for (let i=0; i<basket.length; i++) {
    console.log(basket[i]);
  }
  return;
}

console.log('Test listItems - should log apples, oranges, pears and return undefined');
console.log(listItems(['apples', 'oranges', 'pears']));

function empty(basket) {
  return basket = [];
}

console.log('Test empty - should return empty array');
console.log(empty(['apples', 'watermelon', 'raspberries']));
