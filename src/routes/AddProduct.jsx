import { useState } from "react"
import styled from "styled-components"
import addProduct from "./data/addProducts"
import { shopId } from "./data/constants"


// Form

const FormBox = styled.form `
    max-width: 320px;
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
    min-width: 320px;
    height: 26px;
    padding: .25em;
`

const FlexBox = styled.div `
    display: flex;
    flex-flow: column wrap;
    align-content: flex-start;
    width: inherit;
`


function AddProduct() {
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

    const OnHandleSubmit = (event) => {
        event.preventDefault()
        if (productName.length > 0 && productPrice.length > 0 && productDescription.length > 0 && productImage.length > 0) {
            const productAdd = {
                action: 'add-product',
                name: productName,
                price: productPrice,
                picture: productImage,
                description: productDescription,
                shopid: shopId
            }
            addProduct(productAdd)
        }
    }


    return (
        <FormBox onSubmit={OnHandleSubmit}>
            <h1>Lägg till ny produkt</h1>
            <FlexBox>
            <FormLabel htmlFor="productNameInput">Produktnamn: </FormLabel>
            <FormInput id="productNameInput" type="text" value={productName} onChange={handleChangeProductName}></FormInput>
            </FlexBox>

            <FlexBox>
            <FormLabel htmlFor="productPriceInput">Produktpris: </FormLabel>
            <FormInput id="productPriceInput" type="text" value={productPrice} onChange={handleChangeProductPrice}></FormInput>
            </FlexBox>

            <FlexBox>
            <FormLabel htmlFor="productDescriptionInput">Produktbeskrivning: </FormLabel>
            <FormInput id="productDescriptionInput" type="text" value={productDescription} onChange={handleChangeProductDescription}></FormInput>
            </FlexBox>

            <FlexBox>
            <FormLabel htmlFor="productImageInput">Produktbild: </FormLabel>
            <FormInput id="productImageInput" type="text" value={productImage} onChange={handleChangeProductImage}></FormInput>
            </FlexBox>

            <button type="sumbit">Lägg till</button>

        </FormBox>
    )
}

export default AddProduct