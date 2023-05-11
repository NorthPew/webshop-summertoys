import { CartContext } from "../Wrapper"
import { useContext, useState } from "react"

import {Wrapper, TitleContainer, PageTitle, ShipToCountryBannerField, ShipToCountryIconDiv, ShipToCountryText, ShippingBannerCostField, ShippingCostTitle, ShippingCostText, ShippingIconDiv, ShippingContainer, OverviewBannerField, OverviewIconDiv, OverviewTitleBox, OverviewTitle, OverviewTextsContainer, OverviewText, ArticlesBox, ArticleLi, ArticleImg, ArticleValuesContainer, ArticleAmountBox, ArticleAmountMinBtn, ArticleAmountMaxBtn, ArticleAmountInputField, BannerFieldsContainer, BannersAndSubTotalContainer, SubTotalBox, SubTotalTitle, SubTotalText, SubTotalTextsContainer, SubTotalPrice, SubTotalBoxForButton, CheckoutButton, EmptyCartContainer, ShopNowButton} from "./styles/cart"


// När du ökar kvantitet på produkt, lägg till en ny prop på produkten i carten

//cart[2].quantity = itemQuantity;

function Cart() {
    const { cart, deleteFromCart } = useContext(CartContext)
    const [priceTotal, setPriceTotal] = useState(0)

    // To calculate all product prices in cart
    const calculateSum = (cart, value) => {
        let sum = cart.reduce((delsumma, item) => delsumma + item.price * value, 0)
        sum = Math.round(sum)
        return sum
    }



    // Article change amount

    function ArticleTotalPrice({ item, id, pricePerUnit }) {
        const [totalPrice, setTotalPrice] = useState(pricePerUnit);
        const [quantity, setQuantity] = useState(1);

        function handleChangeQuantity(item, add) {
            if (item.quantity) {
                if (add) {
                item.quantity = item.quantity + 1
                } else if (!add && item.quantity > 0) {
                item.quantity = item.quantity - 1
                }
            } else {
                item.quantity = 2
            }
            setQuantity(item.quantity)
            // ändra cart item så den får en quantity-property på sig med
        }

        return (
            <>
                <ArticleAmountMinBtn id={`${id}-min`} onClick={() => handleChangeQuantity(item, true)}>-</ArticleAmountMinBtn>
                <ArticleAmountInputField id={`${id}-input`} type="text" value={quantity} readOnly />
                <ArticleAmountMaxBtn id={`${id}-max`} onClick={() => handleChangeQuantity(item, false)}>+</ArticleAmountMaxBtn>
                <p>{totalPrice} kr</p>
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