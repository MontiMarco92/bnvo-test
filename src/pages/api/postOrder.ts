import { createOrder } from '@/services/createOrder';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function createOrderHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { body } = req;
		const response = await createOrder(body);
		res.status(200).send(response);
	} catch (err) {
		console.log(err);
	}
}
