import styled from "styled-components"
import { useState } from "react"
import addUser from "./data/addUsers"
import { shopId } from "./data/constants"

// Styled

const FormBtn = styled.button `
    width: 260px;
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
    width: 260px;
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
    min-width: 250px;
    height: 26px;
    padding: .25em;
`

const FlexBox = styled.div `
    display: flex;
    flex-flow: column wrap;
    align-content: flex-start;
    width: inherit;
`



function AddUser() {

    const validCharLettersNumbers = "abcdefghijklmnopqrstuvwxyz1234567890"

    function isUserNameValid(validName) {
        for (let i = 0; i < validName.length; i++) {
            let character = validName.charAt(i).toLowerCase()
            if (!validCharLettersNumbers.includes(character)) {
                return [false, "Vänligen använd endast engelska tecken."]
            }
        }
        if (validName.length < 3) {
            return [false, "Behöver minst vara 3 tecken."]
        }
        return [true, ""]
    }
    
    function isPasswordValid(userPassword) {
        for (let x = 0; x < userPassword.length; x++) {
            let characterPassword = userPassword.charAt(x).toLowerCase()
            if (!validCharLettersNumbers.includes(characterPassword)) {
                return [false, "Vänligen använd endast engelska tecken och siffror."]
            }
        }
        if (userPassword.length < 4) {
            return [false, "Behöver minst vara 4 tecken."]
        }
        if (userPassword != "password") {
            console.log(userPassword);
            return [false, "Fel lösenord. Försök igen."]
        } else {
            return [true, ""]
        }
    }

    const [userName, setUserName] = useState("")
	const [wrongUserName, setWrongUserName] = useState(false)
    const [isEmptyName, setIsEmptyName] = useState(false)

	const [userPassword, setUserPassword] = useState("")
	const [wrongUserPassword, setWrongUserPassword] = useState(false)
    const [isEmptyPassword, setIsEmptyPassword] = useState(false)

	const [isValidName, notValidName] = isUserNameValid(userName)

	const isValidClassName = wrongUserName ? isValidName ? "correct" : "incorrect" : null

	const [isValidUserPassword, notValidUserPassword] = isPasswordValid(userPassword)
	
    const isValidClassPassword = wrongUserPassword ? isValidUserPassword ? "correct-password" : "incorrect-password" : null

	const handleSubmit = (event) => {
		event.preventDefault()
		if (userName.length > 0 && userPassword.length > 0) {
            const userAdd = {
                action: 'add-user',
                username: userName,
                password: userPassword,
                shopid: shopId
            }
            addUser(userAdd)
            setUserName('')
            setUserPassword('')
            setIsEmptyName(true)
            setIsEmptyPassword(true)
		}
	}

    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
        if (e.target.value === "") {
			setIsEmptyName(true);
		} else {
			setIsEmptyName(false);
		}
    }

    const handleUserPassword = (e) => {
        setUserPassword(e.target.value)
        if (e.target.value === "") {
			setIsEmptyPassword(true);
		} else {
			setIsEmptyPassword(false);
		}
    }

    return (
    <FormBox onSubmit={handleSubmit}>
        <h1>Ny användare</h1>
        <FlexBox>
            <FormLabel htmlFor="userNameInput">Användarnamn: {isEmptyName ? null : wrongUserName ? (isValidName ? "✔️" : "❌") : null}</FormLabel>
            <FormInput id="userNameInput" type="text" className={isValidClassName} placeholder="admin123" value={userName} onChange={handleUserNameChange} onBlur={() => setWrongUserName(true)}></FormInput>
            {isEmptyName ? null : wrongUserName ? notValidName : null}
        </FlexBox>

        <FlexBox>
            <FormLabel htmlFor="userPasswordInput">Lösenord: {isEmptyPassword ? null : wrongUserPassword ? isValidUserPassword ? "✔️" : "❌" : null}</FormLabel>
            <FormInput id="userPasswordInput" type="password" className={isValidClassPassword} value={userPassword} onChange={handleUserPassword} onBlur={() => setWrongUserPassword(true)}></FormInput>
            {isEmptyPassword ? null : wrongUserPassword ? notValidUserPassword : null}
        </FlexBox>

        <FlexBox>
            <FormLabel htmlFor="isThisUserAdminCheck">Är detta en admin?: </FormLabel>
            <FormInput id="isThisUserAdminCheck" type="checkbox"></FormInput>
        </FlexBox>
        <FormBtn type="submit">Lägg till användare</FormBtn>
    </FormBox>)
}

export default AddUser