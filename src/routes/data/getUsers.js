import {url, shopId} from './constants.js'


async function getUsers(){
	console.log('getting users...')
	const response= await fetch(url + '?action=get-users&shopid=' + shopId)
	const data = await response.json()
	console.log('response from API: ', data )

	return data
}
export {getUsers}