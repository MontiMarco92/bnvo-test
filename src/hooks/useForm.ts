import { Currency } from '@/types';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type UseFormStateType = {
	amount: string;
	currency: Currency;
	concept: string;
	errorMsg: string;
};

export const useForm = ({
	activeCurrency,
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
	const [disableBtn, setDisableBtn] = useState(false);
	const router = useRouter();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleMenuSelection = (selectedCurrency: Currency) => {
		setFormData({ ...formData, currency: selectedCurrency });
	};

	useEffect(() => {
		if (!formData.amount) return;
		const hasError =
			Number(formData.amount) >= Number(formData.currency?.min_amount) &&
			Number(formData.amount) <= Number(formData.currency?.max_amount);
		if (!hasError)
			setFormData({
				...formData,
				errorMsg: `El importe debe ser entre ${formData.currency?.min_amount} y ${formData.currency?.max_amount}`,
			});
		else {
			setFormData({ ...formData, errorMsg: '' });
		}
	}, [formData.amount, formData.currency]);

	useEffect(() => {
		if (Boolean(formData.errorMsg) || !Boolean(formData.amount.length)) {
			setDisableBtn(true);
		} else {
			setDisableBtn(false);
		}
	}, [formData.errorMsg, formData.amount]);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setFormData({ ...formData, amount: '' });
		try {
			const res = await fetch('/api/postOrder', {
				method: 'POST',
				body: JSON.stringify(formData),
			});
			const json = await res.json();
			window.sessionStorage.setItem('paymentUri', json.payment_uri);
			router.push(`/payment-summary/${json.identifier}`);
		} catch (err) {
			console.log(err);
		}
	};

	return {
		formData,
		handleInputChange,
		handleMenuSelection,
		handleSubmit,
		disableBtn,
	};
};
