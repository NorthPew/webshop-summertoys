import { url, shopId } from './constants.js'

async function loginUser(oneUser) {
	console.log("Logging in user...");
	oneUser.shopid = shopId
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(oneUser)
	}
	const response = await fetch(url + '?action=login-user', options)
	const statusObject = await response.json()
	console.log('Response from API: ', statusObject)
    return {loggedIn: statusObject.status}
}

export default loginUser;