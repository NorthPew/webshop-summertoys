import { useLoaderData, Link } from "react-router-dom";
import { getProducts } from "./data/getProducts";
import styled from "styled-components";

import deleteProduct from "./data/deleteProduct"

export const loader = () => getProducts();

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
                <button>Ta bort</button>
            </div>
        </li>
    ))}</ul>)
}

export default EditProducts
