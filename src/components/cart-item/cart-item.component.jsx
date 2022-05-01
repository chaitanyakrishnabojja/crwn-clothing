import { CartItemContainerStyled, ItemDetailsStyled } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainerStyled>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetailsStyled>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} X ${price}</span>
            </ItemDetailsStyled>
        </CartItemContainerStyled>
    )
}

export default CartItem;