import { url, shopId } from './constants.js'

async function editProduct(oneProduct) {
	console.log("Editing product...");
	oneProduct.shopid = shopId
	const options = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(oneProduct)
	}
	const response = await fetch(url + '?action=edit-product ', options)
	const statusObject = await response.json()
	console.log('Response from API: ', statusObject)
}

export default editProduct;
