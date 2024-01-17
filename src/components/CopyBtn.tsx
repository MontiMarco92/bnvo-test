import Image from 'next/image';
import CopyIcon from '../../public/icons/Copy.svg';

export const CopyBtn = ({ text }: { text: string | number }) => {
	const copyToClipboard = async (text: string | number) => {
		try {
			await navigator.clipboard.writeText(text.toString());
		} catch (error) {
			console.log('error copying to clipboard');
		}
	};
	return (
		<button onClick={() => copyToClipboard(text)}>
			<Image src={CopyIcon} alt='copy icon' />
		</button>
	);
};
