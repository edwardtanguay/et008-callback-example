import axios from 'axios';
import { ICustomer } from '../interfaces';
import * as config from '../config';
import * as tools from '../tools';

const url = 'https://edwardtanguay.vercel.app/share/customers.json';

export const CustomerDataLoader = async (elementIdentifier: string, cbPreload: (elementIdentifier: string) => void): Promise<ICustomer[]> => {
	cbPreload(elementIdentifier);
	return new Promise((resolve, reject) => {

		// 0, 1, 2, 3 = data was successfully fetched
		// -2, -1 = can't get the data because a mock problem has occurred
		const randnum = tools.getRandomNumberBetween(-2, 3);

		setTimeout(async () => {
			const customers: ICustomer[] = (await axios.get(url)).data;
			if (customers && randnum >= 0) {
				resolve(customers);
			} else {
				if (randnum === -2) {
					reject(new Error('Network error occurred, customers could not be loaded.'));
				}
				if (randnum === -1) {
					reject(new Error('Customer API is currently undergoing maintenance.'));
				}
			}
		}, config.mockWaitInSeconds() * 1000);
	});
};