import axios from 'axios';
import { IEmployee, IEmployeeDataLoaderData } from '../interfaces';
import * as config from '../config';
import * as tools from '../tools';

const url = 'https://edwardtanguay.vercel.app/share/employees.json';

export const EmployeeDataLoader = async (elementIdentifier: string, cbPreload: (elementIdentifier: string) => void, cbPostload: (data: IEmployeeDataLoaderData) => void) => {
	cbPreload(elementIdentifier);

	// 0, 1, 2, 3 = data was successfully fetched
	// -2, -1 = can't get the data because a mock problem has occurred
	const randnum = tools.getRandomNumberBetween(-2, 3);

	setTimeout(async () => {
		const employees: IEmployee[] = (await axios.get(url)).data;

		if (employees && randnum >= 0) {
			cbPostload({
				employees,
				hasError: false,
				errorMessage: ''
			});
		} else {
			if (randnum === -2) {
				cbPostload({
					employees: [],
					hasError: true,
					errorMessage: 'Employees could not be loaded, no connection to data source.'
				});
			}
			if (randnum === -1) {
				cbPostload({
					employees: [],
					hasError: true,
					errorMessage: 'Employee API is unreachable.'
				});
			}
		}
	}, config.mockWaitInSeconds() * 1000);
};