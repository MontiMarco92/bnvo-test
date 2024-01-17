import { PaymentBox } from '@/components/PaymentBox';
import { PaymentSummary } from '@/components/PaymentSummary';
import { useWs } from '@/hooks/useWs';
import { getOrderInfo } from '@/services/getOrderInfo';
import { OrderInfo } from '@/types';

interface PaymentSummaryPageProps {
	orderInfo: OrderInfo;
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking',
	};
}

export async function getStaticProps({ params }: { params: { id: string } }) {
	const { id } = params;
	const orderInfo = await getOrderInfo(id);
	return {
		props: { orderInfo },
	};
}

export default function PaymentSummaryPage({
	orderInfo,
}: PaymentSummaryPageProps) {
	useWs(orderInfo.identifier);

	return (
		<div className='h-full w-full flex justify-center items-center px-40 pt-52 gap-8'>
			<PaymentSummary orderInfo={orderInfo} />
			<PaymentBox orderInfo={orderInfo} />
		</div>
	);
}
