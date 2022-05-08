import { ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { CategoryItem } from "../categories/category.types";
import { CartItem, CART_ACTION_TYPE } from "./cart.types";


const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
    const productAlreadyAddedToCart = cartItems.find((item) => item.id === productToAdd.id);
    if (productAlreadyAddedToCart) {
        return cartItems.map((item) => item.id === productToAdd.id ? {...item, quantity: item.quantity + 1} : item);
    } else {
        return [...cartItems,{...productToAdd, quantity: 1}];
    }
};

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
    const existingCartItem = cartItems.find((item) => item.id === cartItemToRemove.id);
    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter((item) => item.id !== cartItemToRemove.id);
    } else {
        return cartItems.map((item) => item.id === cartItemToRemove.id ? {...item, quantity: item.quantity - 1} : item);
    }
};

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] => cartItems.filter((item) => item.id !== cartItemToClear.id);

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPE.SET_CART_ITEMS, CartItem[]>;

export const setIsCartOpen = withMatcher((isCartOpen: boolean): SetIsCartOpen => createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, isCartOpen));

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => createAction(CART_ACTION_TYPE.SET_CART_ITEMS, cartItems));

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return setCartItems(newCartItems);
};


