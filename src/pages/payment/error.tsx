import { MsgBox } from '@/components/MsgBox';

export default function ErrorPaymentPage() {
	return (
		<div className='h-full w-full flex justify-center items-center'>
			<MsgBox
				icon='error'
				title='¡Pago Cancelado!'
				text='Lorem ipsum dolor sit amet consectetur. Laoreet blandit auctor et varius dolor elit facilisi enim. Nulla ut ut eu nunc.'
				ctaLabel='Crear nuevo pago'
			/>
		</div>
	);
}
