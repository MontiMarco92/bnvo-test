import { Currency } from '@/types';
import { ChangeEvent, useMemo, useState } from 'react';

export const useMenu = (currencies: Currency[]) => {
	const [searchInput, setSearchInput] = useState('');

	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value.toLowerCase());
	};

	const filteredCurrencies = useMemo(() => {
		return currencies.filter((currency) => {
			const lowerCaseName = currency.name.toLowerCase();
			return lowerCaseName.includes(searchInput);
		});
	}, [searchInput, currencies]);

	return {
		filteredCurrencies,
		inputChangeHandler,
		searchInput,
	};
};
