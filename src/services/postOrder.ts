import { BASE_API_URL, DEVICE_ID } from '@/constants';

// interface Data {
// 	amount: string;
// 	currency: string;
// 	reference: string;
// }
export async function createOrder(data: FormData) {
	console.log('🚀 ~ createOrder ~ data:', data);
	try {
		console.log(BASE_API_URL);
		console.log(DEVICE_ID);
		const response = await fetch(`${BASE_API_URL}/orders/`, {
			method: 'POST',
			headers: {
				'X-Device-Id': DEVICE_ID,
				'Content-Type': 'multipart/form-data',
				Accept: 'application/json',
			},
			body: data,
		});
		console.log('🚀 ~ createOrder ~ response:', response);
		// const json = await response.json();
		// console.log('🚀 ~ createOrder ~ json:', json);

		//return json;
	} catch (err) {
		console.log(err);
	}
}
