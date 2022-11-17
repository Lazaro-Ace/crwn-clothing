import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton} from "./checkout-item.styles";

const CheckoutItem = ({ checkoutItem }) => {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const { name, quantity, imageUrl, price } = checkoutItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={() => addItemToCart(checkoutItem)}>
          &#10094;
        </Arrow>
        <Value> {quantity}</Value>
        <Arrow
          onClick={() => removeItemFromCart(checkoutItem, false)}
        >
          &#10095;
        </Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton
        onClick={() => removeItemFromCart(checkoutItem, true)}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
