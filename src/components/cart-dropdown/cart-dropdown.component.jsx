import { CartDropdownContainer, EmptyMessage, CartItemsContainer } from './cart-dropdown.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate(`/checkout`);
    };

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    )) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItemsContainer>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;