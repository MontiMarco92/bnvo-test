import Image from 'next/image';
import { useState } from 'react';
import { Currency } from '@/types';
import { CurrencyOption } from './CurrencyOption';
import { Input } from './Input';
import SearchIcon from '../../public/icons/search-normal.svg';
import { useMenu } from '@/hooks/useMenu';

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
	const { searchInput, inputChangeHandler, filteredCurrencies } =
		useMenu(currencies);

	const clickHandler = (currency: Currency) => {
		setShowMenu(false);
		onChangeHandler(currency);
	};

	return (
		<>
			<div className='flex flex-col w-full gap-1'>
				<label
					htmlFor='cryptocurrency'
					className='text-sm font-bold text-day-darker'
				>
					Seleccionar moneda
				</label>
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
				<div className='h-full w-full flex flex-col absolute bg-white p-6 rounded-2xl'>
					<h5 className='text-lg font-bold mb-4 text-day-darker'>
						Seleccionar criptomoneda
					</h5>

					<Input
						icon={<Image src={SearchIcon} alt='search icon' />}
						placeHolder='Buscar'
						name='search'
						type='text'
						value={searchInput}
						onChangeHandler={inputChangeHandler}
					/>
					<div className='flex flex-col gap-8 mt-4'>
						{filteredCurrencies?.map((currency, idx) => (
							<button
								type='button'
								key={idx}
								className='flex justify-between w-full p-2 hover:bg-day-light-4 hover:rounded-md'
								onClick={() => clickHandler(currency)}
							>
								<CurrencyOption
									currency={currency}
									selected={activeCurrency?.symbol === currency?.symbol}
									showSymbol
								/>
							</button>
						))}
					</div>
				</div>
			)}
		</>
	);
};
