import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { CartContext } from "../Wrapper"
import imagePanel from "./images/lego.jpg"

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

// Form

const FormBox = styled.form `
    max-width: 260px;
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
    width: 260px;
`

const SubmitBtn = styled.button `
  color: #fff;
  background-color: #242424;
  border-radius: 0px;
  padding: .95em 1.75em;
  font-weight: 800;
  border: none;
  &:hover {
    color: #10a7dd;
  }
`

const ImagePanel = styled.img `
    height: 270px;
    border-radius: 6.5px;
    width: inherit;

`

function UserStart() {
    const {isUserLoggedIn, setIsUserLoggedIn} = useContext(CartContext)

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
        console.log('userName', userName, ' userPassword', userPassword);
		if (userName === "user" && userPassword === "password") {
			setIsUserLoggedIn(true)
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
        <>
			{isUserLoggedIn ? <>
                <Wrapper>
                    <TitleContainer>
                        <PageTitle>
                            Användare panel
                        </PageTitle>
                    </TitleContainer>
                    <h2>
                        Du är inloggad
                    </h2>
                    <SubmitBtn onClick={() => setIsUserLoggedIn(false)}>Logga ut</SubmitBtn>
                </Wrapper>
            </>
 : <Wrapper>
                <TitleContainer>
                    <PageTitle>Login</PageTitle>
                </TitleContainer>
				<FormBox onSubmit={handleSubmit} className="login-form">
                    <FlexBox>
                        <ImagePanel src={imagePanel}></ImagePanel>
                    </FlexBox>
					<FlexBox className="login-input-container">
                        <label htmlFor="userNameInput">Användarnamn:  {isEmptyName ? null : wrongUserName ? (isValidName ? "✔️" : "❌") : null}</label>
						<FormInput id="userNameInput" type="text" className={isValidClassName} placeholder="ValterVit420" value={userName} onChange={handleUserNameChange} onBlur={() => setWrongUserName(true)}
						></FormInput>
                        {isEmptyName ? null : wrongUserName ? notValidName : null}
					</FlexBox>
					<FlexBox>
                        <FormLabel htmlFor="passwordInput">Lösenord: {isEmptyPassword ? null : wrongUserPassword ? isValidUserPassword ? "✔️" : "❌" : null}</FormLabel>
						<FormInput id="passwordInput" type="password" className={isValidClassPassword} value={userPassword} onChange={handleUserPassword} onBlur={() => setWrongUserPassword(true)}
						></FormInput>
                        {isEmptyPassword ? null : wrongUserPassword ? notValidUserPassword : null}
					</FlexBox>
					<SubmitBtn type="submit">
						Logga in
					</SubmitBtn>
				</FormBox>
			</Wrapper>}
        </>
    )
}

export default UserStart