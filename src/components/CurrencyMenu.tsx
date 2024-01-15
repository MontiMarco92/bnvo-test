import Image from 'next/image';
import { useState } from 'react';
import ArrowDown from '../../public/icons/arrow-down.svg';
import Tick from '../../public/icons/tick-circle.svg';
import { Currency } from '@/types';

interface CurrencyMenuProps {
	currencies: Currency[];
	activeCurrency: Currency;
	onChangeHandler: (currency: Currency) => void;
	errorMsg: string;
}

export const CurrencyMenu = ({
	currencies,
	activeCurrency,
	onChangeHandler,
	errorMsg,
}: CurrencyMenuProps) => {
	const [showMenu, setShowMenu] = useState(false);

	const clickHandler = (currency: Currency) => {
		setShowMenu(false);
		onChangeHandler(currency);
	};

	const CurrencyOption = ({
		selected = false,
		currency,
		imgSize = 32,
		showSymbol = false,
	}: {
		selected?: boolean;
		currency: Currency;
		imgSize?: number;
		showSymbol?: boolean;
	}) => {
		return (
			<>
				<div className={`flex ${showSymbol ? 'gap-3' : 'gap-2'}`}>
					<Image
						src={currency.image}
						alt={`Logo for ${currency.name}`}
						width={imgSize}
						height={imgSize}
						className='object-contain'
					/>
					<div className='flex flex-col'>
						<span
							className={`text-sm ${showSymbol ? 'font-bold' : 'font-normal'}`}
						>
							{currency.name}
						</span>
						{showSymbol && (
							<span className='text-xs text-gray-500'>{currency.symbol}</span>
						)}
					</div>
				</div>
				<Image
					src={selected ? Tick : ArrowDown}
					alt={selected ? 'Tick circle icon' : 'Arrow Down icon'}
				/>
			</>
		);
	};

	return (
		<>
			<div className='flex flex-col w-full gap-1'>
				<label htmlFor='cryptocurrency'>Seleccionar moneda</label>
				<button
					id='cryptocurrency'
					type='button'
					className='rounded-md border-solid border-[1px] py-[18px] px-4 bg-white items-center flex justify-between'
					onClick={() => setShowMenu(!showMenu)}
				>
					<CurrencyOption currency={activeCurrency} imgSize={20} />
				</button>
				{errorMsg && <span className='text-xs text-red-500'>{errorMsg}</span>}
			</div>

			{showMenu && (
				<div className='h-full w-full flex flex-col absolute bg-white justify-between p-6 rounded-2xl'>
					<h5 className='text-lg font-bold mb-4'>Seleccionar criptomoneda</h5>
					{currencies.map((currency, idx) => (
						<button
							type='button'
							key={idx}
							className='flex justify-between w-full'
							onClick={() => clickHandler(currency)}
						>
							<CurrencyOption
								currency={currency}
								selected={activeCurrency.symbol === currency.symbol}
								showSymbol
							/>
						</button>
					))}
				</div>
			)}
		</>
	);
};
