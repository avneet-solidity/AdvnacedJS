const AmazonCart = () => {
    let cart = [];
    const purchases = [];
    const items = [
        {
            name: 'item1',
            price: 100
        },
        {
            name: 'item2',
            price: 150
        },
        {
            name: 'item3',
            price: 75
        },
        {
            name: 'item4',
            price: 225
        },
    ]

    const addToCart = (idx) => {
        cart.push(items[idx]);
        return `added ${items[idx].name} to cart`;
    }

    const buyCart = () => {
        if(cart.length === 0) return "Error: cart is empty";
        const itemName = [];
        let price = 0;
        for(let obj of cart){
            itemName.push(obj.name);
            price += obj.price;
        }
        price += price*0.03;
        purchases.push({
            itemPurchased: itemName,
            totalPrice: price
        })
        cart = [];
        return `Total cost of cart= ${price}`;
    }
    const clearCart = ()=>{
        cart = [];
        return "cart emptied";
    }

    const showPurchases = () => {
        for(let purchase of purchases){
            console.log(purchase);
        }
    }

    return {addToCart, buyCart, clearCart, showPurchases }
}
const amzn = AmazonCart();
console.log(amzn.addToCart(0));
console.log(amzn.addToCart(2));
console.log(amzn.clearCart());
console.log(amzn.buyCart());
console.log(amzn.addToCart(0));
console.log(amzn.addToCart(2));
console.log(amzn.buyCart());

console.log(amzn.addToCart(1));
console.log(amzn.addToCart(3));
console.log(amzn.buyCart());
console.log(amzn.showPurchases());