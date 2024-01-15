import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Mulish } from 'next/font/google';
import Logo from '../../public/icons/logo.svg';
import Image from 'next/image';

const inter = Mulish({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${inter.className} h-screen w-screen flex flex-col`}>
			<Component {...pageProps} />

			<footer className='flex items-center justify-center mb-8'>
				<Image src={Logo} alt='company logo' />
				<span className='text-[#C0CCDA] text-xs font-bold leading-[18px] before:content-["|"] before:mx-4 before:text-base'>
					© 2022 Bitnovo. All rights reserved.
				</span>
			</footer>
		</main>
	);
}
