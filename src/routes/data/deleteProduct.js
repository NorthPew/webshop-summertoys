import { url, shopId } from './constants.js'

async function addProduct(oneProduct) {
	console.log("Deleting product...");
	oneProduct.shopid = shopId
	const options = {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(oneProduct)
	}
	const response = await fetch(url + '?action=delete-product', options)
	const statusObject = await response.json()
	console.log('Response from API: ', statusObject)
}

export default addProduct;
