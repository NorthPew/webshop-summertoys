import { useContext } from "react";
import { CartContext } from "../../Wrapper";

function AddToCartButton({product}) {
    const { addToCart } = useContext(CartContext);
    return (
      <button onClick={() => addToCart(product)}>Add to cart</button>
    )
}

export default AddToCartButton