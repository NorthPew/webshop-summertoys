import { useLoaderData, Link } from "react-router-dom";
import AddToCartButton from "./components/AddToCartButton";
import styled from "styled-components";
import react, { useState, useEffect } from "react";
import { getProducts } from "./data/getProducts";

export const loader = () => getProducts();

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
    width: inherit;
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
    const [sortOption, setSortOption] = useState('');
    const [productsToDisplay, setProductsToDisplay] = useState([])
    
    // Search
    
    const filteredProducts = productData.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
        setProductsToDisplay(filteredProducts)
    };

      // Sort

    let sortedProducts = [...productData];

    if (sortOption === 'name') {
        console.log('Sorting by name');
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        console.log('sortedProducts', sortedProducts);
    } else if (sortOption === 'priceLowToHigh') {
        console.log('Sorting by price (lowest to highest)');
        sortedProducts.sort((a, b) => a.price - b.price);
        console.log('sortedProducts', sortedProducts);
    } else if (sortOption === 'priceHighToLow') {
        console.log('Sorting by price (highest to lowest)');
        sortedProducts.sort((a, b) => b.price - a.price);
        console.log('sortedProducts', sortedProducts);
    }

      const handleSortChange = (event) => {
        console.log('Sort option changed:', event.target.value);
        setSortOption(event.target.value);
        setProductsToDisplay(sortedProducts)
        console.log('productsToDisplay', productsToDisplay);
      };


    // When loading this page for the first time, this will run
    if(productsToDisplay.length === 0 && searchValue !== null) {
        setProductsToDisplay(filteredProducts)
    }


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
                    <FilterSelect id="sort" onChange={handleSortChange}>
                        <option value="recommend">Rekommendera</option>
                        <option value="name">Namn</option>
                        <option value="priceLowToHigh">Lågt pris</option>
                        <option value="priceHighToLow">Högst pris</option>
                    </FilterSelect>
                    <label htmlFor="sort">Sortera efter</label>
                </TopSideContainer>
            </TopMultiContainer>
            <GridView>
                {productsToDisplay.map((product) => (
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