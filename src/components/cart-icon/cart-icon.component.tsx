import {CartIconContainer, ShoppingIcon, ItemCountStyled} from './cart-icon.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);


    const toggleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen)) ;

    return (
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCountStyled>{cartCount}</ItemCountStyled>
        </CartIconContainer>
    )
}
export default CartIcon;