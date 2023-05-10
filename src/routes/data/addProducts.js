import { url, shopId } from './constants.js'

async function addProduct(oneProduct) {
	console.log("adding product...");
	oneProduct.shopid = shopId
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(oneProduct)
	}
	const response = await fetch(url + '?action=add-product', options)
	const statusObject = await response.json()
	console.log('Response from API: ', statusObject)
}

export default addProduct;
