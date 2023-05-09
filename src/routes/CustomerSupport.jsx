import { useState } from "react"
import styled from "styled-components"

// Styled

// Wrapper

const Wrapper = styled.section `
    width: 80vw;
    height: 100%;
    gap: 15px;
    display: grid;
`

// Title

const TitleContainer = styled.div `
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

// Info box

const InfoBox = styled.div `
    display: flex;
    flex-flow: column wrap;
`

const InfoTitle = styled.h2 `
    font-size: 22px;
    margin: 0px;
`

const InfoUl = styled.ul `
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    list-style-type: circle;
    padding-left: 0px;
`

const InfoListElemBtn = styled.button `
    background-color: transparent;
    border-radius: 6.5px;
    padding: .25em 1.5em;
    border: none;

    &:hover {
        background-color: #F9F9F9;
    }
`

const InfoPhoneNumber = styled.p `
    font-size: 20px;
    font-weight: 400;
    margin: 0px;
`

const InfoUlColumn = styled.ul `
    display: flex;
    list-style-type: none;
    flex-flow: row wrap;
    column-gap: 15px;
    padding-left: 0px;
`

const ListElemBtn = styled.button `
    border: none;
    background-color: transparent;
    display: grid;
    place-content: center;
    border-radius: 6.5px;
    padding: .75em 1.5em;

    &:hover {
        background-color: #F9F9F9;
    }
`

const FormBox = styled.form `
    min-width: 320px;
    height: 100%;
    display: flex;
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
`

const TextArea = styled.textarea `
    min-width: 320px;
    min-height: 120px;
    border-radius: 6.5px;
    font-family: 'Lato', sans-serif;
    padding: .25em;
`

const SubmitBtn = styled.button `
    width: 60px;
    border-radius: 6.5px;
    background-color: #3C44D5;
    color: #fff;
    border: none;
    height: 28px;

    &:hover {
        background-color: #454df3;
    }
`

function CustomerSupport() {
    // Category buttons
    const [selectedShipping, setSelectedShipping] = useState(false)


    // Form
    const validCharLetters = "abcdefghijklmnopqrstuvwxyzåäö"

    const validOrderLetters = "abcdefghijklmnopqrstuvwxyz0123456789#"

    function isValidOrderNumber(order) {
        for (let i = 0; i < order.length; i++) {
            let character = order.charAt(i).toLowerCase()
            if (!validOrderLetters.includes(character)) {
                return [false, "Vänligen använd (#), siffror och engelska tecken."]
            }
        }
        if (order.length < 10) {
            return [false, "Behöver minst vara 9 tecken plus #."]
        }
        if (order.length > 10) {
            return [false, "Får inte vara mer än 9 tecken!"]
        }
        return [true, ""]
    }

    function isValid(name) {
        for (let i = 0; i < name.length; i++) {
            let character = name.charAt(i).toLowerCase()
            if (!validCharLetters.includes(character)) {
                return [false, "Vänligen använd endast bokstäver."]
            }
        }
        if (name.length < 2) {
            return [false, "Behöver minst vara 2 tecken."]
        }
        return [true, ""]
    }

    function isValidMail(mail) {
        const validMailChars = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/
        if (!validMailChars.test(mail)) {
            return [false, "Ej godkänt format"]
        }
        return [true, ""]
    }

    const [order, setOrder] = useState("")
    const [name, setName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")

    const [wrongOrder, setWrongOrder] = useState(false)
	const [wrongName, setWrongName] = useState(false)
	const [wrongLastName, setWrongLastName] = useState(false)
	const [wrongEmailAddress, setWrongEmailAddress] = useState(false)

	const [isVisible, setIsVisible] = useState(false)

    const [isEmptyOrder, setIsEmptyOrder] = useState(false)
	const [isEmptyName, setIsEmptyName] = useState(false)
	const [isEmptyLastName, setIsEmptyLastName] = useState(false)
	const [isEmptyEmailAddress, setIsEmptyEmailAddress] = useState(false)

    const [isValidOrder, notValidOrder] = isValidOrderNumber(order)

	const isValidClassOrder = wrongOrder
		? isValidOrder
			? "valid"
			: "invalid"
		: ""

    const [isValidName, notValidName] = isValid(name)

	const isValidClassName = wrongName
		? isValidName
			? "valid"
			: "invalid"
		: ""

	const [isValidLastName, notValidLastName] = isValid(lastName)

	const isValidClassLastName = wrongLastName
		? isValidLastName
			? "valid"
			: "invalid"
		: ""

	const [isValidEmailAddress, notValidEmailAddress] = isValidMail(email)

	const isValidClassEmail = wrongEmailAddress
		? isValidEmailAddress
			? "valid"
			: "invalid"
		: ""

        function handleSubmit(event) {
            event.preventDefault()
            if (
                isValidOrder &&
                isValidName &&
                isValidLastName &&
                isValidEmailAddress
            ) {
                setOrder("")
                setName("")
                setLastName("")
                setEmail("")
                setIsEmptyName(true)
                setIsEmptyLastName(true)
                setIsEmptyEmailAddress(true)
            } else if (name == "" || lastName == "" || email == "") {
                setIsVisible(true)
            }
            setTimeout(() => {
                setIsVisible(false)
            }, 2000)
        }

        function handleOrderChange(e) {
            setOrder(e.target.value.toUpperCase())
            if (e.target.value === "") {
                setIsEmptyOrder(true)
            } else {
                setIsEmptyOrder(false)
            }
        }

        function handleNameChange(e) {
            setName(e.target.value)
            if (e.target.value === "") {
                setIsEmptyName(true)
            } else {
                setIsEmptyName(false)
            }
        }
    
        function handleLastNameChange(e) {
            setLastName(e.target.value)
            if (e.target.value === "") {
                setIsEmptyLastName(true)
            } else {
                setIsEmptyLastName(false)
            }
        }
    
        function handleEmailChange(e) {
            setEmail(e.target.value)
            if (e.target.value === "") {
                setIsEmptyEmailAddress(true)
            } else {
                setIsEmptyEmailAddress(false)
            }
        }

    return (
        <Wrapper>
            <TitleContainer>
                <PageTitle>Kundtjänst</PageTitle>
            </TitleContainer>
            <InfoBox>
                <p>Vi är glada att du har valt att handla hos oss!</p>
                <p>Om du har några frågor eller funderingar om din beställning, eller om du behöver hjälp med att genomföra ett köp, är vi här för dig.</p> 
                <p>Du kan nå oss via telefon, e-post eller chatt. Vi svarar så snart vi kan och gör vårt bästa för att lösa eventuella problem.</p>
                <InfoPhoneNumber>Telefon: 070-6942015</InfoPhoneNumber>
            </InfoBox>
            <InfoBox>
                <InfoTitle>Välj från en kategori för att fortsätta</InfoTitle>
                <InfoUlColumn>
                    <li><ListElemBtn onClick={() => setSelectedShipping(!selectedShipping)}><span className="material-symbols-outlined">local_shipping</span>Spårning & leverans</ListElemBtn></li>
                </InfoUlColumn>
            </InfoBox>
            {
                selectedShipping && (
                    <FormBox>
                        <FlexBox>
                            <FormLabel htmlFor="orderInput">Beställningsnummer:</FormLabel>
                            <FormInput id="orderInput" onChange={handleOrderChange} onBlur={() => setWrongOrder(true)} value={order} className={isValidClassOrder} maxLength={10} type="text" placeholder="#NNN-NNN-XXX"></FormInput>
                            {isEmptyOrder ? "" : wrongOrder ? notValidOrder : ""}
                            {isEmptyOrder
							? ""
							: wrongOrder
							? isValidOrder
								? "✔️"
								: "❌"
							: ""}
                        </FlexBox>

                        <FlexBox>
                            <FormLabel htmlFor="nameInput">Namn:</FormLabel>
                            <FormInput id="nameInput"  onChange={handleNameChange} onBlur={() => setWrongName(true)} value={name} className={isValidClassName} type="text" placeholder="Sebastian"></FormInput>
                            {isEmptyName ? "" : wrongName ? notValidName : ""}
                            {isEmptyName
							? ""
							: wrongName
							? isValidName
								? "✔️"
								: "❌"
							: ""}
                        </FlexBox>

                        <FlexBox>
                            <FormLabel htmlFor="afterNameInput">Efternamn:</FormLabel>
                            <FormInput id="afterNameInput" onChange={handleLastNameChange} onBlur={() => setWrongLastName(true)} value={lastName} className={isValidClassLastName}  type="text" placeholder="Hare"></FormInput>
                            {isEmptyLastName
							? ""
							: wrongLastName
							? notValidLastName
							: ""}
                            {isEmptyLastName
							? ""
							: wrongLastName
							? isValidLastName
								? "✔️"
								: "❌"
							: ""}
                        </FlexBox>

                        <FlexBox>
                            <FormLabel htmlFor="emailInput">Epost-adress:</FormLabel>
                            <FormInput id="emailInput" onChange={handleEmailChange} onBlur={() => setWrongEmailAddress(true)} value={email} className={isValidClassEmail} type="email" placeholder="sebastian.hare@email.com"></FormInput>
                            {isEmptyEmailAddress ? "" : wrongEmailAddress ? notValidEmailAddress : ""}
                            {isEmptyEmailAddress
							? ""
							: wrongEmailAddress
							? isValidEmailAddress
								? "✔️"
								: "❌"
							: ""}
                        </FlexBox>


                        <TextArea placeholder="Vad är ditt problem?"></TextArea>
                        <FlexBox>
                            {isVisible && (
                                <div className="popupInvalid">
                                    Vänligen fyll i alla fälten.
                                </div>
                            )}
                        <SubmitBtn onClick={handleSubmit} type="submit">Skicka</SubmitBtn>
                        </FlexBox>
                    </FormBox>
                )
            }
        </Wrapper>
    )
}

export default CustomerSupport