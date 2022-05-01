import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const productAlreadyAddedToCart = cartItems.find((item) => item.id === productToAdd.id);
    if (productAlreadyAddedToCart) {
        return cartItems.map((item) => item.id === productToAdd.id ? {...item, quantity: item.quantity + 1} : item);
    } else {
        return [...cartItems,{...productToAdd, quantity: 1}];
    }
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((item) => item.id === cartItemToRemove.id);
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((item) => item.id !== cartItemToRemove.id);
    } else {
        return cartItems.map((item) => item.id === cartItemToRemove.id ? {...item, quantity: item.quantity - 1} : item);
    }
};


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newTotal = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0)
        setCartTotal(newTotal);
    }, [cartItems]);


    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        setCartItems(newCartItems);
    };

    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        setCartItems(newCartItems);
    };

    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = cartItems.filter((item) => item.id !== cartItemToClear.id);
        setCartItems(newCartItems);
    };

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, cartCount, cartTotal};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}