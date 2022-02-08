console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

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
    basket.splice(basket.indexOf(item), 1);
    return item;
  }
}

function listItems(basket) {
  for (let i=0; i<basket.length; i++) {
    console.log(basket[i]);
  }
  return;
}

function empty(basket) {
  return basket = [];
}

console.log('Test addItem: adding apples, oranges, bananas, pears, and kiwi');
console.log(addItem('apples'), addItem('oranges'), addItem('bananas'), addItem('pears'), addItem('kiwi'));

console.log('Test listItems')
console.log(`Basket contains`, listItems(basket));

console.log('Test isFull: are there 5 or more items in basket?', isFull(basket));
console.log('Test addItem: can a sixth item be added?', addItem('mango'));

console.log('Test removeItem: remove "pears"', removeItem('pears'));
console.log(listItems(basket));

console.log('Test empty', empty(basket));
