let total = 0;

function addToCart(price) {
    total += price;

    document.getElementById("cart").innerHTML =
        "🛒 Cart Total: ₹" + total;
}