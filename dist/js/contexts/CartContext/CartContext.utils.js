function addToCart(state, id) {
    const newCart = [...state.cart];
    const itemInCart = state.cart.find((item) => item.id === id);
    if (itemInCart) {
        newCart[state.cart.indexOf(itemInCart)] = {
            id,
            quantity: itemInCart.quantity + 1,
        };
        return Object.assign(Object.assign({}, state), { cart: newCart });
    }
    newCart.push({
        id,
        quantity: 1,
    });
    return Object.assign(Object.assign({}, state), { cart: newCart });
}
function removeFromCart(state, id) {
    const itemInCart = state.cart.find((item) => item.id === id);
    if (!itemInCart) {
        return state;
    }
    const newItemInCart = Object.assign(Object.assign({}, itemInCart), { quantity: itemInCart.quantity - 1 });
    if (newItemInCart.quantity <= 0) {
        return Object.assign(Object.assign({}, state), { cart: state.cart.filter((cartItem) => cartItem.id !== id) });
    }
    const newCart = [...state.cart];
    newCart[state.cart.indexOf(itemInCart)] = newItemInCart;
    return Object.assign(Object.assign({}, state), { cart: newCart });
}
export { addToCart, removeFromCart };
