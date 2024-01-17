import { Currency } from '@/types';
import Image from 'next/image';
import ArrowDown from '../../public/icons/arrow-down.svg';
import ArrowRight from '../../public/icons/arrow-right.svg';
import Tick from '../../public/icons/tick-circle.svg';

export const CurrencyOption = ({
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
					src={currency?.image}
					alt={`Logo for ${currency?.name}`}
					width={imgSize}
					height={imgSize}
					className='object-contain'
				/>
				<div className='flex flex-col items-start'>
					<span
						className={`text-sm ${showSymbol ? 'font-bold' : 'font-normal'}`}
					>
						{currency?.name}
					</span>
					{showSymbol && (
						<span className='text-xs text-day-dark-4'>{currency?.symbol}</span>
					)}
				</div>
			</div>
			<Image
				src={selected ? Tick : showSymbol ? ArrowRight : ArrowDown}
				alt={selected ? 'Tick icon' : 'Arrow icon'}
			/>
		</>
	);
};
