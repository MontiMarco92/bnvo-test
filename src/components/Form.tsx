import { useForm } from '@/hooks/useForm';
import { CurrencyMenu } from './CurrencyMenu';
import { Input } from './Input';
import { Currency } from '@/types';

export const Form = ({ currencies }: { currencies: Currency[] }) => {
	const {
		formData,
		handleInputChange,
		handleMenuSelection,
		handleSubmit,
		disableBtn,
	} = useForm({
		activeCurrency: currencies[0] || null,
		currencies: currencies,
	});

	return (
		<form
			className='w-[609px] flex flex-col gap-8 justify-center items-center align-middle rounded-2xl border-[1px] border-border p-8 relative shadow-form'
			onSubmit={handleSubmit}
		>
			<h2 className='text-3xl text-day-darker font-bold'>Crear Pago</h2>

			<Input
				text='Importe a pagar'
				name='amount'
				type='number'
				placeHolder='Añade importe a pagar'
				value={formData.amount}
				onChangeHandler={handleInputChange}
			/>

			<CurrencyMenu
				currencies={currencies}
				activeCurrency={formData.currency}
				onChangeHandler={handleMenuSelection}
				errorMsg={formData.errorMsg}
			/>

			<Input
				text='Concepto'
				name='concept'
				type='text'
				placeHolder='Añade descripción del pago'
				value={formData.concept}
				onChangeHandler={handleInputChange}
			/>

			<button
				disabled={disableBtn}
				className='bg-day-lighter w-full rounded-md text-white py-[18px] px-6 disabled:bg-day-blue-4'
			>
				Continuar
			</button>
		</form>
	);
};
