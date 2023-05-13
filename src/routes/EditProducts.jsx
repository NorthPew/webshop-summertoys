import { useLoaderData, Link } from "react-router-dom";
import { getProducts } from "./data/getProducts";
import styled from "styled-components";
import { shopId } from "./data/constants";
import editProduct from "./data/editProducts";

// Styled

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

const ProductTextBox = styled.div `
    width: inherit;
    height: 240px;
    overflow: auto;
`

const ProductDescription = styled.p `
    font-size: 16px;
    font-weight: 400;
`

const ProductButtonsBox = styled.div `
    display: flex;
    flex-flow: row wrap;
`

const ProductBtn = styled.button `
    width: 110px;
    padding: .95em 1.75em;
    font-weight: 800;
    background-color: #242424;
    color: #fff;
    border: none;

    &:hover {
        color: #10a7dd;
    }
`

// Form

const FormBox = styled.form `
    width: inherit;
    height: 100%;
    display: inline-flex;
    flex-flow: column wrap;
    align-content: flex-start;
    row-gap: 15px;
`

const FormLabel = styled.label `
    cursor: pointer;
`

const FormInput = styled.input `
    border: .5px solid #373737;
    border-radius: 6.5px;
    min-width: inherit;
    height: 26px;
    padding: .25em;
`

const FlexBox = styled.div `
    display: flex;
    flex-flow: column wrap;
    align-content: flex-start;
    width: inherit;
`

import deleteProduct from "./data/deleteProduct"
import { useState } from "react";

export const loader = () => getProducts();

function EditProducts() {
    const [editingProduct, setEditingProduct] = useState({})
    const [products, setProducts] = useState(useLoaderData())

    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [productImage, setProductImage] = useState("")

    const handleChangeProductName = (e) => {
        setProductName(e.target.value)
    }
    const handleChangeProductPrice = (e) => {
        setProductPrice(e.target.value)
    }
    const handleChangeProductDescription = (e) => {
        setProductDescription(e.target.value)
    }
    const handleChangeProductImage = (e) => {
        setProductImage(e.target.value)
    }


    const onDeleteProduct = (item) => {
        const productDelete = {
            action: 'delete-product',
            productid: item.id,
            shopid: shopId
        }
        deleteProduct(productDelete)
    }
    
    const onEditProduct = (item) => {
        setEditingProduct(item)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (productName.length > 0 && productPrice.length > 0 && productDescription.length > 0 && productImage.length > 0) {
            const updatedProduct = {
                action: 'edit-product',
                productid: editingProduct.id,
                name: productName,
                price: productPrice,
                description: productDescription,
                picture: productImage,
                shopid: shopId
            }

            

            editProduct(updatedProduct)
            setEditingProduct({})
        }
    }

    return (
        <>     
            <h1>Redigera produkter</h1>
            <GridView>{products.map(item => (
                <ProductItem key={item.id}>
                    {
                        editingProduct.id === item.id ? 
                        <FormBox onSubmit={onSubmit}>
                            <p>Ändrar på: {item.name}</p>
                            <FlexBox>
                                <FormLabel htmlFor={`${item.id}-name`}>Produktnamn: </FormLabel>
                                <FormInput id={`${item.id}-name`} type="text" onChange={handleChangeProductName} placeholder={item.name} value={productName}></FormInput>
                                <p>{item.name}</p>
                            </FlexBox>
                            <FlexBox>
                                <FormLabel htmlFor={`${item.id}-price`}>Produktpris: </FormLabel>
                                <FormInput id={`${item.id}-price`} type="text" onChange={handleChangeProductPrice} placeholder={item.price} value={productPrice}></FormInput>
                                <p>{item.price}</p>
                            </FlexBox>
                            <FlexBox>
                                <FormLabel htmlFor={`${item.id}-description`}>Produktbeskrivning: </FormLabel>
                                <FormInput id={`${item.id}-description`} onChange={handleChangeProductDescription} placeholder={item.description} type="text" value={productDescription}></FormInput>
                                <ProductTextBox>
                                    <ProductDescription>{item.description}</ProductDescription>
                                </ProductTextBox>
                            </FlexBox>
                            <FlexBox>
                                <FormLabel htmlFor={`${item.id}-picture`}>Produktbild: </FormLabel>
                                <FormInput id={`${item.id}-picture`} onChange={handleChangeProductImage} placeholder={item.picture} type="text" value={productImage}></FormInput>
                                <p>{item.picture}</p>
                            </FlexBox>
                            <ProductButtonsBox>
                                <ProductBtn type="submit">Slutföra</ProductBtn>
                                <ProductBtn onClick={() => setEditingProduct({})}>Ångra</ProductBtn>
                            </ProductButtonsBox>
                        </FormBox>
                        :   
                        <>
                            <ProductImage src={item.picture} alt={item.name} />
                            <ProductName>{item.name}</ProductName>
                            <ProductPrice>{item.price} kr</ProductPrice>
                            <ProductTextBox>
                                <ProductDescription>{item.description}</ProductDescription>
                            </ProductTextBox>
                            <ProductButtonsBox>
                                <ProductBtn onClick={() => onEditProduct(item)}>Ändra</ProductBtn>
                                <ProductBtn onClick={() => onDeleteProduct(item)}>Ta bort</ProductBtn>
                            </ProductButtonsBox>
                        </> 
                    }
                </ProductItem>
            ))}</GridView>
                    </>)
}

export default EditProducts
