import { BASE_API_URL, DEVICE_ID } from '@/constants';
import { Currency } from '@/types';

export async function getCurrencies() {
	try {
		const response = await fetch(`${BASE_API_URL}/currencies`, {
			headers: {
				'X-Device-Id': DEVICE_ID,
			},
		});
		const json: Currency[] = await response.json();

		return json;
	} catch (err) {
		console.log(err);
	}
}
