import { RadioBtnType } from '@/types';
import React, { ChangeEvent } from 'react';

interface RadioBtnProps {
	checked: boolean;
	id: RadioBtnType;
	value: RadioBtnType;
	changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	text: string;
}
export const RadioBtn = ({
	checked,
	id,
	value,
	text,
	changeHandler,
}: RadioBtnProps) => {
	return (
		<label htmlFor={id}>
			<input
				type='radio'
				checked={checked}
				id={id}
				value={value}
				className='invisible peer'
				onChange={changeHandler}
			/>
			<span className='rounded-[100px] px-3 py-[6px] cursor-pointer bg-day-light-5 text-day-dark-4 peer-checked:bg-day-lighter peer-checked:text-white'>
				{text}
			</span>
		</label>
	);
};
