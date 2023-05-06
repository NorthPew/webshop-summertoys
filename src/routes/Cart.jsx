import { CartContext } from "../Wrapper"
import { useContext, useState } from "react"
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

// Overview (Table header)

const OverviewBannerField = styled.div `
    height: 50px;
    width: 65vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
    background-color: #F3F3F3;
    font-size: 18px;
    border-radius: 6.5px;
`

const OverviewIconDiv = styled.div `
    height: 50px;
    width: 50px;
    display: grid;
    place-content: center;
`

const OverviewTitleBox = styled.div `
    height: 50px;
`

const OverviewTitle = styled.p `
    font-size: 18px;
    margin: 0px;
    margin-top: .4em;
`

const OverviewTextsContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    column-gap: 5em;
    align-content: center;
    margin-left: .75em;
`

const OverviewText = styled.p `
    font-size: 18px;
    margin: 0px;
`

const ArticlesBox = styled.ul `
    max-width: 65vw;
    background-color: #F3F3F3;
    height: 100%;
    border-radius: 6.5px;
    padding-left: 0em;
    list-style-type: none;
    display: flex;
    justify-items: center;
    flex-flow: column wrap;
    gap: 15px;
`

const ArticleLi = styled.li `
    display: flex;
    flex-flow: row wrap;
`

const ArticleImg = styled.img `
    width: 116px;
    height: 120px;
`

const ArticleValuesContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    column-gap: 5em;
    margin-left: .75em;
`

const ArticleAmountBox = styled.div `
    width: 200px;
    border-radius: 6.5px;
    height: 24px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
`

const ArticleAmountMinBtn = styled.button `
    background-color: transparent;
    border: .5px solid #373737;
    height: 24px;
    width: 1em;
    display: grid;
    place-content: center;
    border-radius: 6.5px 0px 0px 6.5px;
`

const ArticleAmountMaxBtn = styled.button `
    background-color: transparent;
    border: .5px solid #373737;
    height: 24px;
    width: 1em;
    display: grid;
    place-content: center;
    border-radius: 0px 6.5px 6.5px 0px;
    margin-right: .35em;
`

const ArticleAmountInputField = styled.input `
    background-color: transparent;
    width: 32px;
    height: 20px;
    display: flex;
    justify-items: center;
    outline: none;
    border: .5px solid #373737;
`



function Cart() {
    const {cart, deleteFromCart} = useContext(CartContext)

    // Article change amount

    function ArticleTotalPrice({ id, pricePerUnit }) {
        const [totalPrice, setTotalPrice] = useState(pricePerUnit);
      
        const handleValueChange = (value) => {
          setTotalPrice(value * pricePerUnit);
        };
      
        return (
          <>
            <ArticleAmountInput id={id} onValueChange={handleValueChange} />
            <p>{totalPrice} kr</p>
          </>
        );
      }

    function ArticleAmountInput({item, id, onValueChange }) {
        const [value, setValue] = useState(1);
      
        const handleDecrease = () => {
        if (value <= 0) {
            deleteFromCart(id)
        }
        if (value > 0) {
            const newValue = value - 1;
            setValue(newValue);
            onValueChange(newValue);
          }
        };
      
        const handleIncrease = () => {
          const newValue = value + 1;
          setValue(newValue);
          onValueChange(newValue);
        };
      
        return (
          <>
            <ArticleAmountMinBtn id={`${id}-min`} onClick={handleDecrease}>-</ArticleAmountMinBtn>
            <ArticleAmountInputField id={`${id}-input`} type="text" value={value} readOnly />
            <ArticleAmountMaxBtn id={`${id}-max`} onClick={handleIncrease}>+</ArticleAmountMaxBtn>
          </>
        );
      }

     

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
            <OverviewBannerField>
                <OverviewIconDiv>
                    <span className="material-symbols-outlined">overview_key</span>
                </OverviewIconDiv>
                <OverviewTitleBox>
                    <OverviewTitle>Översikt</OverviewTitle>
                </OverviewTitleBox>
                <OverviewTextsContainer>
                    <OverviewText>
                            Artikel
                        </OverviewText>
                        <OverviewText>
                            Pris
                        </OverviewText>
                        <OverviewText>
                            Styck
                        </OverviewText>
                        <OverviewText>
                            Totalt
                        </OverviewText>
                </OverviewTextsContainer>
                    

            </OverviewBannerField>
            <ArticlesBox>
                {cart.map(item => (
                    <ArticleLi key={item.id}>
                        <ArticleImg src={item.image} />
                        <ArticleValuesContainer><p>{item.name}</p><p>{item.price}kr</p>
                        <ArticleAmountBox>
                            <ArticleTotalPrice id={item.id} item={item} pricePerUnit={item.price} />
                        </ArticleAmountBox>
                        
                        </ArticleValuesContainer></ArticleLi>
                ))}
            </ArticlesBox>
            <p>Totala belopp: {calculateSum(cart)} kr</p>
        </Wrapper>
    )
}

export default Cart