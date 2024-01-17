import { BASE_API_URL, DEVICE_ID } from '@/constants';

export async function createOrder(data: any) {
	const objData = JSON.parse(data);
	try {
		const newData = new FormData();

		newData.append('expected_output_amount', objData.amount);
		newData.append('input_currency', objData.currency.symbol);
		newData.append('notes', objData.concept);
		newData.append('merchant_urlko', '/payment/error');
		newData.append('merchant_urlok', '/payment/success');

		const response = await fetch(`${BASE_API_URL}/orders/`, {
			method: 'POST',
			headers: {
				'X-Device-Id': DEVICE_ID,
			},
			body: newData,
		});
		console.log('🚀 ~ createOrder ~ response:', response);
		const json = await response.json();

		return json;
	} catch (err) {
		console.log(err);
	}
}
