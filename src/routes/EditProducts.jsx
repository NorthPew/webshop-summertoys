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
   // Form

   const validChars = "abcdefghijklmnopqrstuvwxyzåäö1234567890 "

   const validNumberChars = "0123456789"

   function isTitleValid(title) {
       for (let i = 0; i < title.length; i++) {
           let character = title.charAt(i).toLowerCase()
           if(!validChars.includes(character)) {
               return [false, "Vänligen använd svenska tecken och siffror."]
           }
       }
       if (title.length < 3) {
           return [false, "Behöver minst vara 3 tecken."]
       }
       return [true, ""]
   }

   
   function isPriceValid(price) {
       for (let i = 0; i < price.length; i++) {
           let character = price.charAt(i).toLowerCase()
           if (!validNumberChars.includes(character)) {
               return [false, "Vänligen använd endast siffror."]
           }
       }
       if (price.length < 1) {
           return [false, "Behöver minst vara ett tecken."]
       }
       return [true, ""]
   }

   function isDescriptionValid(description) {
       if (description.length < 20) {
           return [false, "Behöver minst vara 20 tecken."]
       }
       return [true, ""]
   }

   function isPictureValid(picture) {
       const whiteSpaceCheck = /\s/
       if (whiteSpaceCheck.test(picture)) {
           return [false, "Godkänner ej mellanrum"]
       }
       if (picture.substring(0, 5) != "https") {
           return [false, "Måste innehålla https!"]
       }
       return [true, ""]
   }

   const [productName, setProductName] = useState("")
   const [productPrice, setProductPrice] = useState("")
   const [productDescription, setProductDescription] = useState("")
   const [productImage, setProductImage] = useState("")

   const [wrongTitle, setWrongTitle] = useState(false)
   const [wrongPrice, setWrongPrice] = useState(false)
   const [wrongDescription, setWrongDescription] = useState(false)
   const [wrongPicture, setWrongPicture] = useState(false)

   const [isVisible, setIsVisible] = useState(false)

   const [isEmptyTitle, setIsEmptyTitle] = useState(false)
   const [isEmptyPrice, setIsEmptyPrice] = useState(false)
   const [isEmptyDescription, setIsEmptyDescription] = useState(false)
   const [isEmptyPicture, setIsEmptyPicture] = useState(false)

   const [editingProduct, setEditingProduct] = useState({})
   const [products, setProducts] = useState(useLoaderData())

   const [isValidTitle, notValidTitle] = isTitleValid(productName)

   const isValidClassTitle = wrongTitle ? isValidTitle ? "valid" : "invalid" : null

   const [isValidPrice, notValidPrice] = isPriceValid(productPrice)

   const isValidClassPrice = wrongPrice ? isValidPrice ? "valid" : "invalid" : null

   const [isValidDescription, notValidDescription] = isDescriptionValid(productDescription)

   const isValidClassDescription = wrongDescription ? isValidDescription ? "valid" : "invalid" : null

   const [isValidPicture, notValidPicture] = isPictureValid(productImage)

   const isValidClassPicture = wrongPicture ? isValidPicture ? "valid" : "invalid" : null


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
        if (isValidTitle && isValidPrice && isValidDescription && isValidPicture) {
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
            setProductName("")
            setProductPrice("")
            setProductDescription("")
            setProductImage("")
            setIsEmptyTitle(true)
            setIsEmptyPrice(true)
            setIsEmptyDescription(true)
            setIsEmptyPicture(true)
        }
        else if (productName.length == 0 && productPrice.length == 0 && productDescription.length == 0 && productPicture.length == 0) {
            setIsVisible(true)
        }
        setTimeout(() => {
            setIsVisible(false)
        }, 2000)
    }

    const handleChangeProductName = (e) => {
        setProductName(e.target.value)
        if(e.target.value === "") {
            setIsEmptyTitle(true)
        } else {
            setIsEmptyTitle(false)
        }
    }
    const handleChangeProductPrice = (e) => {
        setProductPrice(e.target.value)
        if (e.target.value === "") {
            setIsEmptyPrice(true)
        } else {
            setIsEmptyPrice(false)
        }
    }
    const handleChangeProductDescription = (e) => {
        setProductDescription(e.target.value)
        if (e.target.value === "") {
            setIsEmptyDescription(true) 
        } else {
            setIsEmptyDescription(false)
        }
    }
    const handleChangeProductImage = (e) => {
        setProductImage(e.target.value)
        if (e.target.value === "") {
            setIsEmptyPicture(true)
        } else {
            setIsEmptyPicture(false)
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
                                <FormLabel htmlFor={`${item.id}-name`}>Produktnamn: {isEmptyTitle ? null : wrongTitle ? isValidTitle ? "✔️" : "❌" : null}</FormLabel>
                                <FormInput id={`${item.id}-name`} type="text" className={isValidClassTitle} onChange={handleChangeProductName} onBlur={() => setWrongTitle(true)} placeholder={item.name} value={productName}></FormInput>
                                {isEmptyTitle ? null : wrongTitle ? notValidTitle : null}
                                <p>{item.name}</p>
                            </FlexBox>
                            <FlexBox>
                                <FormLabel htmlFor={`${item.id}-price`}>Produktpris: {isEmptyPrice ? null : wrongPrice ? isValidPrice ? "✔️" : "❌" : null}</FormLabel>
                                <FormInput id={`${item.id}-price`} type="text" className={isValidClassPrice} onChange={handleChangeProductPrice} onBlur={() => setWrongPrice(true)} placeholder={item.price} value={productPrice}></FormInput>
                                {isEmptyPrice ? null : wrongPrice ? notValidPrice : null}
                                <p>{item.price}</p>
                            </FlexBox>
                            <FlexBox>
                                <FormLabel htmlFor={`${item.id}-description`}>Produktbeskrivning: {isEmptyDescription ? null : wrongDescription ? isValidDescription ? "✔️" : "❌" : null}</FormLabel>
                                <FormInput id={`${item.id}-description`} className={isValidClassDescription} onChange={handleChangeProductDescription} onBlur={() => setWrongDescription(true)} placeholder={item.description} type="text" value={productDescription}></FormInput>
                                {isEmptyDescription ? null : wrongDescription ? notValidDescription : null}
                                <ProductTextBox>
                                    <ProductDescription>{item.description}</ProductDescription>
                                </ProductTextBox>
                            </FlexBox>
                            <FlexBox>
                                <FormLabel htmlFor={`${item.id}-picture`}>Produktbild: {isEmptyPicture ? null : wrongPicture ? isValidPicture ? "✔️" : "❌" : null}</FormLabel>
                                <FormInput id={`${item.id}-picture`} className={isValidClassPicture} onChange={handleChangeProductImage} onBlur={() => setWrongPicture(true)} placeholder={item.picture} type="text" value={productImage}></FormInput>
                                {isEmptyPicture ? null : wrongPicture ? notValidPicture : null}
                                <p>{item.picture}</p>
                            </FlexBox>
                            <ProductButtonsBox>
                                {isVisible && (
                                    <div>
                                        Vänligen fyll i alla fälten.
                                    </div>
                                )}
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
