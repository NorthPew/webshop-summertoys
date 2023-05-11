import { CartContext } from "../Wrapper"
import { useContext, useEffect, useState } from "react"

import {Wrapper, TitleContainer, PageTitle, ShipToCountryBannerField, ShipToCountryIconDiv, ShipToCountryText, ShippingBannerCostField, ShippingCostTitle, ShippingCostText, ShippingIconDiv, ShippingContainer, OverviewBannerField, OverviewIconDiv, OverviewTitleBox, OverviewTitle, OverviewTextsContainer, OverviewText, ArticlesBox, ArticleLi, ArticleImg, ArticleValuesContainer, ArticleAmountBox, ArticleAmountMinBtn, ArticleAmountMaxBtn, ArticleAmountInputField, BannerFieldsContainer, BannersAndSubTotalContainer, SubTotalBox, SubTotalTitle, SubTotalText, SubTotalTextsContainer, SubTotalPrice, SubTotalBoxForButton, CheckoutButton, EmptyCartContainer, ShopNowButton} from "./styles/cart"


// När du ökar kvantitet på produkt, lägg till en ny prop på produkten i carten

//cart[2].quantity = itemQuantity;

function Cart() {
    const { cart, deleteFromCart, setCart } = useContext(CartContext)
    cart.forEach(item => {
        item['quantity'] = 1
        item['totalPrice'] = item.price * item.quantity
    })

    // To calculate all product prices in cart
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.totalPrice, 0
    )

    // Article change amount
    
    function ArticleAmountBox({item}) {
        const [quantity, setQuantity] = useState(1);

        function handleChangeQuantity(item, addOrReduce) {
            if (item.quantity) {
                if (addOrReduce == true ) {
                    item.quantity = item.quantity + 1

                } else if (addOrReduce == false) {
                    item.quantity = item.quantity - 1
                }
            }
            /* else {
                item.quantity = 2
            }
            */
            cart.forEach(item => {
                item['totalPrice'] = item.price * item.quantity
            })
            console.log('cart', cart, 'totalPrice', totalPrice);
            setQuantity(item.quantity)
            // ändra cart item så den får en quantity-property på sig med
        }

        return (
            <>
                <ArticleAmountMinBtn id={`${item.id}-min`} onClick={() => handleChangeQuantity(item, false)}>-</ArticleAmountMinBtn>
                <p id={`${item.id}-input`}>{quantity}</p>
                <ArticleAmountMaxBtn id={`${item.id}-max`} onClick={() => handleChangeQuantity(item, true)}>+</ArticleAmountMaxBtn>
                <p>{item.price * item.quantity} kr</p>
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
                                            totalPrice > 99 ? <ShippingCostText>Berättigad till GRATIS FRAKT!</ShippingCostText> : <ShippingCostText>99kr frakt</ShippingCostText>
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
                                        {totalPrice}
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
                                        <ArticleAmountBox item={item} />
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