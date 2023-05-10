import { useContext } from "react";
import { CartContext } from "../../Wrapper";
import styled from "styled-components";

const AddToCartBtn = styled.button `
  color: #fff;
  background-color: #242424;
  border-radius: 0px;
  padding: .95em 1.75em;
  font-weight: 800;
  border: none;
  &:hover {
    color: #10a7dd;
  }
`

function AddToCartButton({product}) {
    const { addToCart } = useContext(CartContext);
    return (
      <AddToCartBtn onClick={() => addToCart(product)}>Lägg till i varukorgen</AddToCartBtn>
    )
}

export default AddToCartButton