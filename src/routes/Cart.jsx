import { CartContext } from "../Wrapper"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"





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

// Banners

const ShipToCountryBannerField = styled.div `
    height: 50px;
    font-size: 18px;
    border-radius: 6.5px;
    font-weight: 500;
    background-color: #F3F3F3;
    width: 54vw;
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
    width: 54vw;
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
    width: 54vw;
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

//  Article

const ArticlesBox = styled.ul `
    max-width: calc(54vw - 7.5px);
    background-color: #F3F3F3;
    height: calc(100% - 7.5px);
    border-radius: 6.5px;
    padding-left: 0em;
    list-style-type: none;
    display: flex;
    justify-items: center;
    flex-flow: column wrap;
    gap: 15px;
    padding-left: 7.5px;
    padding-top: 7.5px;
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
    margin-left: calc(.75em - 7.5px);
`

const ArticleAmountBox = styled.div `
    width: 250px;
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
    margin-right: 1.75em;
`

const ArticleAmountInputField = styled.input `
    background-color: transparent;
    width: 32px;
    height: 20px;
    display: flex;
    justify-items: center;
    outline: none;
    border: .5px solid #373737;
    text-align: center;
`

// Containers

const BannerFieldsContainer = styled.div `
    display: flex;
    flex-flow: column wrap;
    row-gap: 15px;
    width: 54vw;
`

const BannersAndSubTotalContainer = styled.div `
    width: 85vw;
    height: 100%;
    display: flex;
    column-gap: 1vw;
`

// Subtotal

const SubTotalBox = styled.div `
    border-radius: 6.5px;
    min-height: 180px;
    width: 30vw;
    background-color: #F3F3F3;
    padding-left: 7.5px;
    padding-right: 7.5px;
`

const SubTotalTitle = styled.h2 `
    font-size: 24px;
    font-weight: 500;
`

const SubTotalText = styled.p `
    font-size: 20px;
    font-weight: 500;
`

const SubTotalTextsContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    column-gap: 5em;
`

const SubTotalPrice = styled.p `
    font-weight: 600;
    font-size: 20px;
`

const SubTotalBoxForButton = styled.div `
    width: 100%;
    display: grid;
`

const CheckoutButton = styled.button `
    background-color: #242424;
    color: #fff;
    font-weight: 600;
    border-radius: 0px;
    font-size: 22px;
`

// Empty cart
const EmptyCartContainer = styled.div `
    width: calc(85vw - 15px);
    border-radius: 6.5px;
    background-color: #F3F3F3;
    height: 70vh;
    display: grid;
    place-content: center;
    padding-left: 7.5px;
    padding-right: 7.5px;
`

const ShopNowButton = styled(Link) `
    background-color: #242424;
    color: #fff;
    font-weight: 600;
    padding: 1.5em 1em;
    text-align: center;
    &:hover {
        color: #fff;
    }
`



function Cart() {
    const {cart, deleteFromCart} = useContext(CartContext)
    const [priceTotal, setPriceTotal] = useState(0)

    // To calculate all product prices in cart
    const calculateSum = (cart, value) => {
        let sum = cart.reduce((delsumma,item) => delsumma + item.price * value, 0)
        sum = Math.round(sum)
        return sum
 }


    // Article change amount

    function ArticleTotalPrice({ id, pricePerUnit }) {
        const [totalPrice, setTotalPrice] = useState(pricePerUnit);
      
        const handleValueChange = (value) => {
          setTotalPrice(value * pricePerUnit);

         setPriceTotal(calculateSum(cart, value))
         console.log('calculateSum(cart, value)', calculateSum(cart, value));
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
            {
                cart.length ? (
                    <>
                        <BannersAndSubTotalContainer>
                            <BannerFieldsContainer>
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
                            </BannerFieldsContainer>
                            <SubTotalBox>
                                <SubTotalTitle>Order sammanfattning</SubTotalTitle>
                                <SubTotalTextsContainer>
                                    <SubTotalText>Delsumma</SubTotalText>
                                    <SubTotalPrice>
                                    {
                                            priceTotal + "kr"
                                    }
                                    </SubTotalPrice>
                                </SubTotalTextsContainer>
                                <SubTotalBoxForButton>
                                    <CheckoutButton>
                                        Kassa nu
                                    </CheckoutButton>
                                </SubTotalBoxForButton>
            
                            </SubTotalBox>
                        </BannersAndSubTotalContainer>
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
                    </> 
                    ) : <EmptyCartContainer>
                            <h1>Din varukorg är tom</h1>
                            <ShopNowButton>SHOPPA NU</ShopNowButton>
                        </EmptyCartContainer>
            }

        </Wrapper>
    )
}

export default Cart