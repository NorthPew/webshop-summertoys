import { useLoaderData, Link } from "react-router-dom";
import { getProducts } from "./data/getProducts";
import styled from "styled-components";
import { shopId } from "./data/constants";

import deleteProduct from "./data/deleteProduct"

export const loader = () => getProducts();

const onDeleteProduct = (item) => {
    const productDelete = {
        action: 'delete-product',
        productid: item.id,
        shopid: shopId
    }
    deleteProduct(productDelete)
}

function EditProducts() {
    const productData = useLoaderData()
    return (<ul>{productData.map(item => (
        <li key={item.id}>
            <img src={item.picture} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price} kr</p>
            <p>{item.description}</p>
            <div>
                <button>Ändra</button>
                <button onClick={() => onDeleteProduct(item)}>Ta bort</button>
            </div>
        </li>
    ))}</ul>)
}

export default EditProducts
