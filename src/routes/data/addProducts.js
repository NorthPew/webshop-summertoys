import { url, shopId } from './constants.js'

const data = [
	{
		action: 'add-product',
		name: 'Water pistol',
		description: 'Fires cooling streams of water at unsuspecting foes.',
		picture: 'undefined',
		price: 800,
		shopid: shopId,
	}
]
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
async function addAllTheProducts() {
	// let products = data.map(x => ({.)

	data.forEach(product => {
		addProduct(product)
	})
}

export default addProduct;
