import { MsgBox } from '@/components/MsgBox';

export default function SuccessPaymentPage() {
	return (
		<div className='h-full w-full flex justify-center items-center'>
			<MsgBox
				icon='success'
				title='¡Pago Completado!'
				text='Lorem ipsum dolor sit amet consectetur. Laoreet blandit auctor et varius dolor elit facilisi enim. Nulla ut ut eu nunc.'
				ctaLabel='Crear nuevo pago'
			/>
		</div>
	);
}
