import Image from 'next/image';
import SuccessIcon from '../../public/icons/success.svg';
import ErrorIcon from '../../public/icons/close-circle.svg';
import { useRouter } from 'next/router';

interface MsgBoxProps {
	icon: 'success' | 'error';
	title: string;
	text: string;
	ctaLabel: string;
}

export const MsgBox = ({ icon, title, text, ctaLabel }: MsgBoxProps) => {
	const router = useRouter();
	const getIcon = (icon: MsgBoxProps['icon']) => {
		const options = {
			success: SuccessIcon,
			error: ErrorIcon,
		};
		return options[icon];
	};

	const ctaClickHandler = () => {
		router.push('/');
	};
	return (
		<div className='flex flex-col p-8 border-border border-[1px] rounded-2xl shadow-form w-[490px] h-[420px]'>
			<div className='flex flex-col gap-4 justify-center items-center py-10'>
				<Image src={getIcon(icon)} alt={`${icon} icon`} />
				<h4 className='text-day-darker text-xl font-bold'>{title}</h4>
				<p className='text-day-dark-4 text-center text-base w-[360px] flex-1'>
					{text}
				</p>
			</div>
			<button
				className='w-full px-6 py-[18px] bg-day-lighter text-white text-base font-semibold rounded-md'
				onClick={ctaClickHandler}
			>
				{ctaLabel}
			</button>
		</div>
	);
};
