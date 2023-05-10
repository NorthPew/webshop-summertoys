import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../Wrapper"
import styled from "styled-components"

const LoggedInMain = styled.main `
    width: calc(100% - 48px);
`

function Main() {
    const {isLoggedIn, setIsLoggedIn} = useContext(CartContext)

    return (
        <>
            {
                isLoggedIn ? <LoggedInMain>
                    <Outlet />
                    </LoggedInMain> : <main>
                <Outlet />
            </main>
            }
        </>

    )
}

export default Main