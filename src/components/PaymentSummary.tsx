import { OrderInfo } from '@/types';

const Divider = () => {
	return <div className='w-full border-t-[1px] border-day-dark-5'></div>;
};

const InfoItem = ({
	label,
	value,
	size = 'm',
	boldValue = false,
}: {
	label: string;
	value: string;
	size?: 'm' | 'l';
	boldValue?: boolean;
}) => {
	return (
		<div className='flex justify-between'>
			<p className={`font-bold text-day-darker ${size === 'l' && 'text-lg'}`}>
				{label}
			</p>
			<p
				className={`${
					boldValue ? 'font-bold' : 'font-semibold'
				} text-day-darker ${size === 'l' && 'text-lg'}`}
			>
				{value}
			</p>
		</div>
	);
};

export const PaymentSummary = ({ orderInfo }: { orderInfo: OrderInfo }) => {
	return (
		<div className='h-full w-full flex flex-col gap-6'>
			<h4 className='text-xl font-bold text-day-darker'>Resumen del pedido</h4>
			<div className='p-8 flex flex-col gap-8 bg-day-light-5 rounded-2xl'>
				<InfoItem
					label='Importe:'
					value={`${orderInfo.fiat_amount} ${orderInfo.fiat}`}
					size='l'
					boldValue
				/>
				<Divider />
				<InfoItem
					label='Moneda Seleccionada:'
					value={orderInfo.currency_id}
					boldValue
				/>
				<Divider />
				<InfoItem label='Comercio:' value={orderInfo.merchant_device} />
				<InfoItem
					label='Fecha:'
					value={new Date(orderInfo.created_at).toLocaleString()}
				/>
				<Divider />
				{!!orderInfo.notes.length && (
					<InfoItem label='Concepto:' value={orderInfo.notes} />
				)}
			</div>
		</div>
	);
};
