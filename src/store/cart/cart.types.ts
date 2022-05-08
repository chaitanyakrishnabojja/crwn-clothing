import { CategoryItem } from "../categories/category.types";


export enum CART_ACTION_TYPE {
    SET_CART_ITEMS = 'SET_CART_ITEMS',
    SET_IS_CART_OPEN = 'SET_IS_CART_OPEN'
}

export type CartItem = CategoryItem & {
    quantity: number;
};


