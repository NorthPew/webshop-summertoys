import { CartContext } from "../Wrapper"
import { useContext } from "react"
import styled from "styled-components"

// To calculate all product prices in cart
const calculateSum = (cart) => {
   let sum = cart.reduce((delsumma,item) => delsumma + item.price, 0)
   sum = Math.round(sum)
   return sum
}



// Styled

// Wrapper

const Wrapper = styled.section `
    width: 85vw;
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

// Banners

const ShipToCountryBannerField = styled.div `
    height: 50px;
    font-size: 18px;
    border-radius: 6.5px;
    font-weight: 500;
    background-color: #F3F3F3;
    width: 65vw;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
`

const ShipToCountryIconDiv = styled.div `
    height: 50px;
    width: 50px;
    display: grid;
    place-content: center;
`

const ShipToCountryText = styled.p `
    margin: 0px;
`

// Shipping

const ShippingBannerCostField = styled.div `
    height: 50px;
    width: 65vw;
    background-color: #F3F3F3;
    font-size: 18px;
    border-radius: 6.5px;
    font-weight: 500;
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
`

const ShippingCostTitle = styled.p `
    margin: 0px;
`

const ShippingCostText = styled.p `
    margin: 0px;
    font-weight: lighter;
`

const ShippingIconDiv = styled.div `
    height: 50px;
    width: 50px;
    display: grid;
    place-content: center;
`

const ShippingContainer = styled.div `
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
`


function Cart() {
    const {cart, deleteFromCart} = useContext(CartContext)
    return (
        <Wrapper>
            <TitleContainer>
                <PageTitle>Varukorg</PageTitle>
            </TitleContainer>
            <ShipToCountryBannerField>
                <ShipToCountryIconDiv>
                    <span className="material-symbols-outlined">flag</span>
                </ShipToCountryIconDiv>
                <ShipToCountryText>Skicka till Sverige</ShipToCountryText>
            </ShipToCountryBannerField>
            <ShippingBannerCostField>
                <ShippingIconDiv>
                    <span className="material-symbols-outlined">local_shipping</span>
                </ShippingIconDiv>
                <ShippingContainer>
                    <ShippingCostTitle>
                        Fraktkostnad
                    </ShippingCostTitle>
                    {
                        calculateSum(cart) > 99 ? <ShippingCostText>Berättigad till GRATIS FRAKT!</ShippingCostText> : <ShippingCostText>99kr frakt</ShippingCostText>
                    }
                </ShippingContainer>
            </ShippingBannerCostField>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <p>Totala belopp: {calculateSum(cart)} kr</p>
        </Wrapper>
    )
}

export default Cart