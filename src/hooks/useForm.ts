import { createOrder } from '@/services/postOrder';
import { Currency } from '@/types';
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';

type UseFormStateType = {
	amount: string;
	currency: Currency;
	concept: string;
	errorMsg: string;
};

export const useForm = ({
	activeCurrency,
	currencies,
}: {
	activeCurrency: Currency;
	currencies: Currency[];
}) => {
	const [formData, setFormData] = useState<UseFormStateType>({
		amount: '',
		currency: activeCurrency,
		errorMsg: '',
		concept: '',
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleMenuSelection = (selectedCurrency: Currency) => {
		setFormData({ ...formData, currency: selectedCurrency });
	};

	useEffect(() => {
		if (!formData.amount) return;
		console.log(formData);
		const hasError =
			Number(formData.amount) >= Number(formData.currency.min_amount) &&
			Number(formData.amount) <= Number(formData.currency.max_amount);
		console.log('🚀 ~ useEffect ~ checkError:', hasError);
		if (!hasError)
			setFormData({
				...formData,
				errorMsg: `El importe debe ser entre ${formData.currency.min_amount} y ${formData.currency.max_amount}`,
			});
		else {
			setFormData({ ...formData, errorMsg: '' });
		}
	}, [formData.amount, formData.currency]);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			const data = new FormData();
			data.append('expected_output_amount', formData.amount);
			data.append('input_currency', formData.currency.symbol);
			data.append('reference', formData.concept);
			data.append('merchant_urlko', 'http://localhost:3000/404');
			data.append('merchant_urlok', 'http://localhost:3000');

			const res = await fetch('/api/postOrder', {
				method: 'POST',
				body: data,
			});
			console.log('🚀 ~ handleSubmit ~ res:', res);
		} catch (err) {
			console.log(err);
		}
	};

	return { formData, handleInputChange, handleMenuSelection, handleSubmit };
};
