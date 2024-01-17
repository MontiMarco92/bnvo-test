import { WS_URL } from '@/constants';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export const useWs = (paymentId: string) => {
	const router = useRouter();

	const ws = useRef<WebSocket | null>(null);

	useEffect(() => {
		const socket = new WebSocket(`${WS_URL}/${paymentId}`);

		socket.onmessage = (event) => {
			const data = JSON.parse(event.data);
			if (data.status === 'CO' || data.status === 'AC') {
				router.push(data.url_ok);
			} else if (data.status === 'OC' || data.status === 'EX')
				router.push(data.url_ko);
		};

		ws.current = socket;

		return () => {
			socket.close();
		};
	}, []);
};
