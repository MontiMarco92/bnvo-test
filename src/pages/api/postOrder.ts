import { DEVICE_ID } from '@/constants';
import { createOrder } from '@/services/postOrder';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	name: string;
};

export default async function createOrderHandler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	try {
		const { body } = req;
		console.log('🚀 ~ body:', body);
		const response = await createOrder(body);
		// console.log('🚀 ~ response:', response);
		// const json = await response.json();
		// console.log('🚀 ~ json:', json);
		// return res.send(json);
	} catch (err) {
		console.log(err);
	}
}
