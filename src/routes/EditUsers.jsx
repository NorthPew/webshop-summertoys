import  {getUsers} from "./data/getUsers";
import styled from "styled-components";
import { useLoaderData } from "react-router-dom";
import deleteUser from "./data/deleteUsers";
import { shopId } from "./data/constants";

export const loader = () => getUsers();

// Grid view

const GridView = styled.ul `
    display: grid;
    grid-template-columns: repeat(auto-fit, 220px);
    list-style-type: none;
    place-content: center;
    row-gap: 35px;
    column-gap: 10px;
`

// Product item

const ProductItem = styled.li `
    min-height: 338px;
    width: 220px;
`

const ProductName = styled.p `
    font-size: 16px;
    font-weight: lighter;
`

const FormBtn = styled.button `
    width: 220px;
    padding: .95em 1.75em;
    font-weight: 800;
    background-color: #242424;
    color: #fff;
    border: none;

    &:hover {
        color: #10a7dd;
    }
`

function EditUsers() {
    const userData = useLoaderData()

    console.log(userData);

    const onDeleteUser = (item) => {
        const userDelete = {
            action: 'delete-user',
            userid: item.id,
            shopid: shopId
        }
        deleteUser(userDelete)
    }
    return (
        <GridView>
            {
                userData.map((user) => (
                    <ProductItem key={user.id}><ProductName>{user.username}</ProductName><FormBtn onClick={() => onDeleteUser(user)}>Ta bort</FormBtn></ProductItem>
                ))
            }
        </GridView>
    )
}

export default EditUsers