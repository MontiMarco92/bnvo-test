import React, { ChangeEvent, useEffect, useState } from 'react';
import { Timer } from './Timer';
import { OrderInfo, RadioBtnType } from '@/types';
import QRCode from 'react-qr-code';
import { CopyBtn } from './CopyBtn';
import { RadioBtn } from './RadioBtn';
import Image from 'next/image';
import MMImage from '../../public/metamask.png';
import WarningIcon from '../../public/icons/warning-2.svg';
import { useMetaMask } from '@/hooks/useMetaMask';

export const PaymentBox = ({ orderInfo }: { orderInfo: OrderInfo }) => {
	const [paymentUri, setPaymentUri] = useState<string | null>(null);
	const [activeBtn, setActiveBtn] = useState<RadioBtnType>('qr');
	const { connecting, isConnected, connectMM } = useMetaMask();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setPaymentUri(window.sessionStorage.getItem('paymentUri'));
		}
	}, []);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setActiveBtn(e.target.value as RadioBtnType);
	};

	const isChecked = (value: 'qr' | 'w3') => {
		return value === activeBtn;
	};

	return (
		<div className='h-full w-full flex flex-col gap-6'>
			<h4 className='text-xl font-bold text-day-darker'>Realiza el pago</h4>
			<div className='flex flex-col p-8 justify-between items-center w-[583px] h-[530px] border-border border-[1px] rounded-2xl shadow-form'>
				<Timer expirationTime={orderInfo.expired_time} />

				<div className='flex gap-3'>
					<RadioBtn
						text='Smart QR'
						id='qr'
						value='qr'
						checked={isChecked('qr')}
						changeHandler={handleChange}
					/>
					<RadioBtn
						text='Web3'
						id='w3'
						value='w3'
						checked={isChecked('w3')}
						changeHandler={handleChange}
					/>
				</div>

				{activeBtn === 'qr' && paymentUri && (
					<QRCode value={paymentUri} size={193} />
				)}
				{activeBtn === 'w3' && (
					<button
						className='w-[193px] h-[193px] border-day-light-3 border-[1px] rounded-xl flex flex-col justify-center items-center'
						onClick={connectMM}
						disabled={connecting}
					>
						<Image src={MMImage} alt='metamask' />
						{isConnected && (
							<span className='text-day-darker text-xs'>Connected</span>
						)}
					</button>
				)}

				<div className='flex flex-col justify-center'>
					<p className='text-sm font-semibold text-day-darker text-center mb-3 flex gap-2 justify-center items-center'>
						Enviar
						<span className='text-base font-bold flex gap-2'>
							{orderInfo.crypto_amount} {orderInfo.currency_id}
							<CopyBtn text={orderInfo.crypto_amount} />
						</span>
					</p>
					<p className='text-sm text-day-darker text-center mb-[14px] flex gap-2 justify-center items-center'>
						{orderInfo.address}
						<CopyBtn text={orderInfo.address} />
					</p>

					{orderInfo.tag_memo.length > 0 && (
						<p className='text-day-darker text-center text-xs font-semibold flex gap-2 justify-center items-center'>
							<Image src={WarningIcon} alt='warning icon' />
							Etiqueta de destino: {orderInfo.tag_memo}
							<CopyBtn text={orderInfo.tag_memo} />
						</p>
					)}
				</div>
			</div>
		</div>
	);
};
