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
    const [productPicture, setProductPicture] = useState("")

    
    const [wrongTitle, setWrongTitle] = useState(false)
	const [wrongPrice, setWrongPrice] = useState(false)
	const [wrongDescription, setWrongDescription] = useState(false)
	const [wrongPicture, setWrongPicture] = useState(false)

	const [isVisible, setIsVisible] = useState(false)

    const [isEmptyTitle, setIsEmptyTitle] = useState(false)
	const [isEmptyPrice, setIsEmptyPrice] = useState(false)
	const [isEmptyDescription, setIsEmptyDescription] = useState(false)
	const [isEmptyPicture, setIsEmptyPicture] = useState(false)

    const [isValidTitle, notValidTitle] = isTitleValid(productName)

	const isValidClassTitle = wrongTitle ? isValidTitle ? "valid" : "invalid" : null

    const [isValidPrice, notValidPrice] = isPriceValid(productPrice)

	const isValidClassPrice = wrongPrice ? isValidPrice ? "valid" : "invalid" : null

	const [isValidDescription, notValidDescription] = isDescriptionValid(productDescription)

	const isValidClassDescription = wrongDescription ? isValidDescription ? "valid" : "invalid" : null

	const [isValidPicture, notValidPicture] = isPictureValid(productPicture)

	const isValidClassPicture = wrongPicture ? isValidPicture ? "valid" : "invalid" : null

    
        const OnHandleSubmit = (event) => {
            event.preventDefault()
            if (isValidTitle && isValidPrice && isValidDescription && isValidPicture) {
                const productAdd = {
                    action: 'add-product',
                    name: productName,
                    price: productPrice,
                    picture: productPicture,
                    description: productDescription,
                    shopid: shopId
                }
                addProduct(productAdd)
                setProductName("")
                setProductPrice("")
                setProductDescription("")
                setProductPicture("")
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
        if (e.target.value === "") {
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
        setProductPicture(e.target.value)
        if (e.target.value === "") {
            setIsEmptyPicture(true) 
        } else {
            setIsEmptyPicture(false)
        }
    }





    return (
        <FormBox onSubmit={OnHandleSubmit}>
            <h1>Lägg till ny produkt</h1>
            <FlexBox>
                <FormLabel htmlFor="productNameInput">Produktnamn: {isEmptyTitle ? null : wrongTitle ? isValidTitle ? "✔️" : "❌" : null}</FormLabel>
                <FormInput id="productNameInput" type="text" value={productName} className={isValidClassTitle} onChange={handleChangeProductName} onBlur={() => setWrongTitle(true)}></FormInput>

                {isEmptyTitle ? null : wrongTitle ? notValidTitle : null}
            </FlexBox>

            <FlexBox>
                <FormLabel htmlFor="productPriceInput">Produktpris: {isEmptyPrice ? null : wrongPrice ? isValidPrice ? "✔️" : "❌" : null}</FormLabel>
                <FormInput id="productPriceInput" type="text" value={productPrice} className={isValidClassPrice} onChange={handleChangeProductPrice} onBlur={() => setWrongPrice(true)}></FormInput>

                {isEmptyPrice ? null : wrongPrice ? notValidPrice : null}
            </FlexBox>

            <FlexBox>
                <FormLabel htmlFor="productDescriptionInput">Produktbeskrivning: {isEmptyDescription ? null : wrongDescription ? isValidDescription ? "✔️" : "❌" : null}</FormLabel>
                <FormInput id="productDescriptionInput" type="text" value={productDescription} className={isValidClassDescription} onChange={handleChangeProductDescription} onBlur={() => setWrongDescription(true)}></FormInput>

                {isEmptyDescription ? null : wrongDescription ? notValidDescription : null}
            </FlexBox>

            <FlexBox>
                <FormLabel htmlFor="productImageInput">Produktbild: {isEmptyPicture ? null : wrongPicture ? isValidPicture ? "✔️" : "❌" : null}</FormLabel>
                <FormInput id="productImageInput" type="text" value={productPicture} className={isValidClassPicture} onChange={handleChangeProductImage} onBlur={() => setWrongPicture(true)}></FormInput>

                {isEmptyPicture ? null : wrongPicture ? notValidPicture : null}
            </FlexBox>

            <FlexBox>
                {isVisible && (
                    <div>
                        Vänligen fyll i alla fälten.
                    </div>
                )}
                <button type="sumbit">Lägg till</button>
            </FlexBox>

        </FormBox>
    )
}

export default AddProduct