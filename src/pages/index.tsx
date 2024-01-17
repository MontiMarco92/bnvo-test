import { Form } from '@/components/Form';
import { getCurrencies } from '@/services/getCurrencies';
import { Currency } from '@/types';

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
