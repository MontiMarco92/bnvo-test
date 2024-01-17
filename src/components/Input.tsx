import { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from 'react';

interface InputProps {
	text?: string;
	type: HTMLInputTypeAttribute;
	name: string;
	placeHolder?: string;
	value: string;
	onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	icon?: ReactNode;
}

export const Input = ({
	text,
	type,
	name,
	placeHolder,
	value,
	onChangeHandler,
	icon,
}: InputProps) => {
	return (
		<div className='flex flex-col w-full gap-1'>
			{text && (
				<label htmlFor={name} className='text-sm font-bold text-day-darker'>
					{text}
				</label>
			)}
			<div className='rounded-md border-solid border-[1px] py-[18px] px-3 flex gap-2'>
				{icon}
				<input
					id={name}
					name={name}
					type={type}
					step={0.01}
					placeholder={placeHolder}
					className={` placeholder:text-day-dark-4 placeholder:text-sm w-full outline-none focus:bg-white`}
					value={value}
					autoComplete='off'
					onChange={onChangeHandler}
				/>
			</div>
		</div>
	);
};
