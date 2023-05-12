import { url, shopId } from './constants.js'

async function deleteProduct(oneProduct) {
	console.log("Deleting product...");
	oneProduct.shopid = shopId
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(oneProduct)
	}
	const response = await fetch(url + '?action=delete-product', options)
	const statusObject = await response.json()
	console.log('Response from API: ', statusObject)
}

export default deleteProduct;
