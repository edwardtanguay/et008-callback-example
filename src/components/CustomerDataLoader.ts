import axios from 'axios';
import { ICustomer } from '../interfaces';
import * as config from '../config';

const url = 'https://edwardtanguay.vercel.app/share/customers.json';

export const CustomerDataLoader = async (elementIdentifier: string, cbPreload: (elementIdentifier: string) => void):Promise<ICustomer[]> => {
	cbPreload(elementIdentifier);
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			const customers: ICustomer[] = (await axios.get(url)).data;
			if (customers) {
				resolve(customers);
			} else {
				reject(new Error('Customer could not be loaded'));
			}
		}, config.mockWaitInSeconds() * 1000);
	});
};