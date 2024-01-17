import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TimerIcon from '../../public/icons/timer.svg';

export const Timer = ({ expirationTime }: { expirationTime: string }) => {
	const [time, setTime] = useState(Date.parse(expirationTime) - Date.now());
	const router = useRouter();

	useEffect(() => {
		if (time <= 0) {
			router.push('/payment/error');
		}
		const timer = setTimeout(() => {
			setTime(time - 1000);
		}, 1000);

		return () => clearInterval(timer);
	}, [time]);

	const formatTime = (milliseconds: number) => {
		const totalSeconds = Math.floor(milliseconds / 1000);
		const totalMinutes = Math.floor(totalSeconds / 60);

		const seconds = totalSeconds % 60;
		const minutes = totalMinutes % 60;
		return `${minutes}:${seconds}`;
	};

	return (
		<div className='flex items-center'>
			<Image src={TimerIcon} alt='timer icon' />
			<span
				className='font-semibold text-xs text-day-darker'
				suppressHydrationWarning
			>
				{formatTime(time)}
			</span>
		</div>
	);
};
