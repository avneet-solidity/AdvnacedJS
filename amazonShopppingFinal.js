const user = {
  name: "kim",
  active: true,
  cart: [],
  purchases: []
};

function purchaseItem(user, item) {
  return Object.assign({}, user, { purchases: item });
}
const user2 = purchaseItem({ name: 'laptop', price: 20000 });
function itemToCart() {}
function applyTaxToItem() {}
function buyItem() {}
console.log(user2);