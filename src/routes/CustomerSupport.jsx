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

function CustomerSupport() {
    // List Elem States
    const [accountProblemSelected, setAccountProblemSelected] = useState(false)

    // Account Issues
    const [userRememberUsername, setUserRememberUsername] = useState(false)
    const [userForgotUsername, setUserForgotUsername] = useState(false)

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
                    <li><ListElemBtn onClick={() => setAccountProblemSelected(!accountProblemSelected)}><span className="material-symbols-outlined">person</span>Kontoproblem</ListElemBtn></li>
                    <li><ListElemBtn><span className="material-symbols-outlined">local_shipping</span>Spårning & leverans</ListElemBtn></li>
                </InfoUlColumn>
            </InfoBox>
            {
                accountProblemSelected && (
                    <form>
                        <div>
                            <h2>Kontoproblem</h2>
                        <input onChange={() => setUserForgotUsername(!userForgotUsername)} id="forgotUsername" type="radio" name="username"></input><label htmlFor="forgotUsername">Vill du ha ett nytt användarnamn?</label>
                        {userForgotUsername && <input type="text" placeholder="Email"></input>}
                        <input onChange={() => setUserRememberUsername(!userRememberUsername)} id="rememberedUsername" type="radio" name="username"></input><label htmlFor="rememberedUsername">Vill du byta lösenord?</label>
                        {userRememberUsername && <input type="text" placeholder="Användarnamn"></input>}
                        </div>
                    </form>
                )
            }
        </Wrapper>
    )
}

export default CustomerSupport