export interface Currency {
	name: string;
	min_amount: string;
	max_amount: string;
	image: string;
	blockchain: string;
	symbol: string;
}

export type RadioBtnType = 'qr' | 'w3';

export interface OrderInfo {
	identifier: string;
	created_at: string;
	edited_at: string;
	status: string;
	fiat_amount: number;
	crypto_amount: number;
	currency_id: string;
	merchant_device: string;
	address: string;
	tag_memo: string;
	url_ko: string;
	url_ok: string;
	expired_time: string;
	notes: string;
	fiat: string;
}
