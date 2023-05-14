import { url, shopId } from './constants.js'

async function deleteUser(oneUser) {
	console.log("Deleting user...");
	oneUser.shopid = shopId
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(oneUser)
	}
	const response = await fetch(url + '?action=', options)
	const statusObject = await response.json()
	console.log('Response from API: ', statusObject)
}

export default deleteUser;
