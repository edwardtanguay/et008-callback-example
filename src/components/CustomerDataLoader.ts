import axios from 'axios';
import { ICustomer } from '../interfaces';
import * as config from '../config';

const url = 'https://edwardtanguay.vercel.app/share/customers.json';

export const CustomerDataLoader = async (cbPreload: () => void, cbPostload: (customers: ICustomer[]) => void) => {
	cbPreload();
	setTimeout(async () => {
		const customers: ICustomer[] = (await axios.get(url)).data;
		cbPostload(customers);
	}, config.mockWaitInSeconds() * 1000);
};