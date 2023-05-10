import {url, shopId} from './constants.js'


async function getProducts(){
	console.log('getting products...')
	const response= await fetch(url + '?action=get-products&shopid=' + shopId)
	const data = await response.json()
	console.log('response from API: ', data )

	return data
}
export {getProducts}