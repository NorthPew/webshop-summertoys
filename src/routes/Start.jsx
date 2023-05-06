import styled from "styled-components"


// Images

import heroImage from "./images/hero-image.jpg"

// Body

const Wrapper = styled.section `
    width: 85vw;
    height: 100%;
    gap: 15px;
    display: grid;
`

// Banner

const BannerField = styled.div `
    width: 100%;
    height: 50px;
    border-radius: 6.5px;
    background-color: #EAEAEA;
    display: flex;
    flex-flow: column wrap;
    font-weight: 800;
    text-align: center;
    justify-content: center;
`

const SidePartBannerLeft = styled.div `
    border-right: 1px solid #242424;
    height: 34px;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-items: center;
`

const SidePartBannerRight = styled.div `
    border-left: 1px solid #242424;
    height: 34px;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-items: center;
`

const SidePartBannerMid = styled.div `
    height: 34px;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-items: center;
`

const SideBannerTextElem = styled.p `
    margin: 0px;
`

// Message

const MessageField = styled.div `
    height: 50px;
    background-color: #1CC8EE;
    width: 100%;
    font-size: 32px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    border-radius: 6.5px;
`

const MessageTitle = styled.p `
    font-weight: 600;
    margin: 0px;
`

const MessageText = styled.p `
    font-weight: lighter;
    margin: 0px;
`

// Hero Image

const HeroImage = styled.div `
    width: 100%;
    height: 395px;
    background-image: url('${heroImage}');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 6.5px;
    display: grid;
    justify-content: right;
    align-items: center;
`

const HeroImageText = styled.p `
    font-size: 32px;
    font-weight: 500;
    margin-right: 1.25em;
    color: #fff;
`

// Welcome code

const WelcomeCodeContainer = styled.div `
    width: 100%;
    height: 46px;
    display: grid;
    place-content: center;
`

const WelcomeCodeBox = styled.div `
    background-color: #242424;
    color: #fff;
    width: 12em;
    display: flex;
    flex-flow: row wrap;
    border-radius: 6.5px;
    align-items: center;
    justify-content: center;
    height: 46px;
`

const WelcomeCodeSmallText = styled.p `
    font-size: 14px;
    font-weight: lighter;
    margin: 0px;
`

const WelcomeCodeText = styled.p `
    font-size: 18px;
    font-weight: bold;
    margin: 0px;
`

// Title & Texts

const TitleContainer = styled.div `
    width: 100%;
    height: 46px;
    display: grid;
    place-content: center;
`

const TextContainer = styled.div `
    width: 65vw;
    height: 100%;
    display: grid;
    place-content: center;
`

function Start() {
    return (
        <Wrapper>
            <BannerField>
                <SidePartBannerLeft>
                    <SideBannerTextElem>Flash Rea</SideBannerTextElem>
                    </SidePartBannerLeft>
                <SidePartBannerMid>
                    <SideBannerTextElem>Gratis Retur</SideBannerTextElem>
                    </SidePartBannerMid>
                <SidePartBannerRight>
                    <SideBannerTextElem>Sommarleksaker x Klarna</SideBannerTextElem>
                </SidePartBannerRight>
            </BannerField>
            <MessageField>
                <MessageTitle>
                    Meddelande om prissänkning!
                </MessageTitle>
                <MessageText>
                    Kolla in de senaste priserna för säsongens leksaker.
                </MessageText>
            </MessageField>
            <HeroImage>
                <HeroImageText>Marknadens bästa vattenpistoler</HeroImageText>
            </HeroImage>
            <WelcomeCodeContainer>
                <WelcomeCodeBox>
                    <WelcomeCodeSmallText>Kod:</WelcomeCodeSmallText>
                    <WelcomeCodeText>23SEKOD</WelcomeCodeText>
                </WelcomeCodeBox>
            </WelcomeCodeContainer>
            <TitleContainer>
                <h1>Sommaren knackar på!</h1>
            </TitleContainer>
            <TextContainer>
                <p>Är du redo för sommaren? Vi har allt du behöver för att ha kul i solen!</p>
                <p> Oavsett om du vill bada, spela, bygga eller utforska, har vi leksaker som passar alla åldrar och intressen.</p>
                <p> Kolla in vårt stora utbud av sommarleksaker för barn och vuxna.</p>
                <p>Här hittar du allt från vattenpistoler, badbollar och flytande djur till sandslottformar, kubb och frisbees.</p>
                <p> Vi har också leksaker som utmanar din kreativitet och fantasi, som målarset, pussel och experimentkit.</p>
                <p> Beställ idag och få snabb leverans till din dörr. </p>
                <p>Missa inte chansen att göra din sommar oförglömlig med våra fantastiska sommarleksaker!</p>
            </TextContainer>
        </Wrapper>
    )
}

export default Start