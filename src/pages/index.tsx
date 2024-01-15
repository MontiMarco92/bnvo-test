import { CurrencyMenu } from '@/components/CurrencyMenu';
import { Form } from '@/components/Form';
import { Input } from '@/components/Input';
import { useForm } from '@/hooks/useForm';
import { getCurrencies } from '@/services/getCurrencies';
import { Currency } from '@/types';
import Image from 'next/image';

interface CreatePaymentPageProps {
	currencies: Currency[];
}

export const getServerSideProps = async () => {
	const currencies = await getCurrencies();

	return { props: { currencies: currencies ?? null } };
};

export default function CreatePaymentPage({
	currencies,
}: CreatePaymentPageProps) {
	return (
		<div className='h-full w-full flex justify-center items-center'>
			<Form currencies={currencies} />
		</div>
	);
}
