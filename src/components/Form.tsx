import { useForm } from '@/hooks/useForm';
import { CurrencyMenu } from './CurrencyMenu';
import { Input } from './Input';
import { Currency } from '@/types';

export const Form = ({ currencies }: { currencies: Currency[] }) => {
	const { formData, handleInputChange, handleMenuSelection, handleSubmit } =
		useForm({
			activeCurrency: currencies[0],
			currencies: currencies,
		});

	return (
		<form
			className='w-[609px] flex flex-col gap-8 justify-center items-center align-middle rounded-2xl border-[1px] p-8 relative'
			onSubmit={handleSubmit}
		>
			<h2 className='text-3xl to-blue-400'>Crear Pago</h2>

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
				disabled={Boolean(formData.errorMsg)}
				className='bg-blue-700 w-full rounded-md text-white py-[18px] px-6'
			>
				Continuar
			</button>
		</form>
	);
};
