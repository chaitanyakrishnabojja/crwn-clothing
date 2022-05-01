import {CartIconContainer, ShoppingIcon, ItemCountStyled} from './cart-icon.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCountStyled>{cartCount}</ItemCountStyled>
        </CartIconContainer>
    )
}
export default CartIcon;