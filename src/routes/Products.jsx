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
        },
        {
            id: 4,
            name: 'Product 4',
            description: 'This is a short description of Product 4.',
            price: 39.99,
            image: 'https://example.com/fake-image-4.jpg'
          },
          {
            id: 5,
            name: 'Product 5',
            description: 'This is a short description of Product 5.',
            price: 49.99,
            image: 'https://example.com/fake-image-5.jpg'
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
    align-items: center;
    padding-left: 1.75em;
    gap: .75em;
`

const FilterSelect = styled.select `
    border-radius: 6.5px;
    border: .5px solid #373737;
    height: 30px;
`

const SearchBox = styled.div `
    height: 30px;
    border-radius: 6.5px;
    border: .5px solid #373737;
    display: flex;
    flex-flow: row wrap;
`

const SearchIcon = styled.div `
    width: 1.5em;
    height: 30px;
    background-color: #373737;
    border-radius: 0px 6.5px 6.5px 0px;
    color: #fff;
    cursor: pointer;
    display: grid;
    place-content: center;
`

const SearchTextIcon = styled.p `
    margin: 0px;
`

const SearchBar = styled.input `
    height: 26px;
    border-radius: 6.5px;
    border: 0px solid;
`

// Grid view

const GridView = styled.ul `
    display: grid;
    grid-template-columns: repeat(auto-fit, 220px);
    list-style-type: none;
    place-content: center;
    row-gap: 35px;
    column-gap: 10px;
`

// Product item

const ProductItem = styled.li `
    min-height: 338px;
    width: 220px;
`

const ProductImage = styled.img `
    width: 220px;
    height: 300px;
`

const ProductName = styled.p `
    font-size: 16px;
    font-weight: lighter;
`

const ProductPrice = styled.p `
    font-weight: 600;
    font-size: 18px; 
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
                    <SearchBox>
                        <SearchBar type="text" placeholder="Sök" onChange={handleSearch}></SearchBar>
                        <SearchIcon>
                                <SearchTextIcon className="material-symbols-outlined">
                                    search
                                </SearchTextIcon>
                        </SearchIcon>
                    </SearchBox>
                    <FilterSelect>
                        <option>Rekommendera</option>
                        <option>Namn</option>
                        <option>Lågt pris</option>
                        <option>Högst pris</option>
                    </FilterSelect>
                    <p>Sortera efter</p>
                </TopSideContainer>
            </TopMultiContainer>
            <GridView>
                {
                filteredProducts ? filteredProducts.map((product) => (
                    <ProductItem key={product.id}> 
                        <Link to={'/products/' + product.id}>
                            <ProductImage src={product.image} alt={product.name} />
                            <ProductName>{product.name}</ProductName>
                            <ProductPrice>{product.price} kr</ProductPrice>
                        </Link>
                        <AddToCartButton product={product} />
                    </ProductItem>
                )) :
                productData.map((product) => (
                    <ProductItem key={product.id}> 
                    <Link to={'/products/' + product.id}>
                        <ProductImage src={product.image} alt={product.name} />
                        <ProductName>{product.name}</ProductName>
                        <ProductPrice>{product.price} kr</ProductPrice>
                    </Link>
                    <AddToCartButton product={product} />
                </ProductItem>
                ))}
            </GridView>
        </Wrapper>
    )
}

export default Products