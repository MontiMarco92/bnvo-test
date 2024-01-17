import { BASE_API_URL, DEVICE_ID } from '@/constants';

export async function getOrderInfo(identifier: string) {
	try {
		const response = await fetch(`${BASE_API_URL}/orders/info/${identifier}`, {
			headers: {
				'X-Device-Id': DEVICE_ID,
			},
		});
		const json = await response.json();

		return json[0];
	} catch (err) {
		console.log(err);
	}
}
