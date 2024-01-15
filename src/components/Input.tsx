import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

interface InputProps {
	text: string;
	type: HTMLInputTypeAttribute;
	name: string;
	placeHolder?: string;
	value: string;
	onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
	text,
	type,
	name,
	placeHolder,
	value,
	onChangeHandler,
}: InputProps) => {
	return (
		<div className='flex flex-col w-full gap-1'>
			<label htmlFor='amount'>{text}</label>
			<input
				id={name}
				name={name}
				type={type}
				step={0.01}
				placeholder={placeHolder}
				className='rounded-md border-solid border-[1px] py-[18px] px-3'
				value={value}
				onChange={onChangeHandler}
			></input>
		</div>
	);
};
