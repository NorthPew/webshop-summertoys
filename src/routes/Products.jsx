import { useLoaderData, Link } from "react-router-dom";
import AddToCartButton from "./components/AddToCartButton";
import styled from "styled-components";
import react, { useState } from "react";

// Temp data

const tempData = [
        {
            "id": 1,
            "name": "Product 1",
            "description": "This is a short description of Product 1.",
            "price": 9.99,
            "image": "https://example.com/fake-image-1.jpg"
        },
        {
            "id": 2,
            "name": "Product 2",
            "description": "This is a short description of Product 2.",
            "price": 19.99,
            "image": "https://example.com/fake-image-2.jpg"
        },
        {
            "id": 3,
            "name": "Product 3",
            "description": "This is a short description of Product 3.",
            "price": 29.99,
            "image": "https://example.com/fake-image-3.jpg"
        }
    ]


export const loader = () => tempData

// Styled

// Wrapper

const Wrapper = styled.section `
    width: 80vw;
    height: 100%;
    gap: 15px;
    display: grid;
`

// Title & Input Fields (Multi container)

const TopMultiContainer = styled.div `
    width: 100%;
    height: 64px;
    border-bottom: 1px solid #000;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;

`

const PageTitle = styled.h1 `
    font-size: 38px;
    margin: 0px;
`

const TopSideContainer = styled.div `
    width: 50vw;
    flex-flow: row-reverse wrap;
    display: flex;
`

function Products() {
    const productData = useLoaderData()
    const [searchValue, setSearchValue] = useState('');
    const handleSearch = (event) => {
        setSearchValue(event.target.value);
      };
    
      const filteredProducts = productData.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
  );
    return (
        <Wrapper>
            <TopMultiContainer>
                <PageTitle>Produkter</PageTitle>
                <TopSideContainer>
                    <input type="text" placeholder="Sök" onChange={handleSearch}></input>
                    <select>
                        <option>Rekommendera</option>
                        <option>Namn</option>
                        <option>Lågt pris</option>
                        <option>Högst pris</option>
                    </select>
                    <p>Sortera efter</p>
                </TopSideContainer>
            </TopMultiContainer>
            <ul>
                {
                filteredProducts ? filteredProducts.map((product) => (
                    <li key={product.id}> 
                        <Link to={'/products/' + product.id}>
                            <h2>{product.name}</h2>
                            <img src={product.image} alt={product.name} />
                            <p>{product.description}</p>
                            <p>{product.price} kr</p>
                        </Link>
                        <AddToCartButton product={product} />
                    </li>
                )) :
                productData.map((product) => (
                    <li key={product.id}> 
                    <Link to={'/products/' + product.id}>
                        <h2>{product.name}</h2>
                        <img src={product.image} alt={product.name} />
                        <p>{product.description}</p>
                        <p>{product.price} kr</p>
                    </Link>
                    <AddToCartButton product={product} />
                </li>
                ))}
            </ul>
        </Wrapper>
    )
}

export default Products