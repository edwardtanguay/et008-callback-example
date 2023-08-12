import axios from 'axios';
import { IEmployee } from '../interfaces';
import * as config from '../config';

const url = 'https://edwardtanguay.vercel.app/share/employees.json';

export const EmployeeDataLoader = async (elementIdentifier: string, cbPreload: (elementIdentifier: string) => void, cbPostload: (employees: IEmployee[]) => void) => {
	cbPreload(elementIdentifier);
	setTimeout(async () => {
		const employees: IEmployee[] = (await axios.get(url)).data;
		cbPostload(employees);
	}, config.mockWaitInSeconds() * 1000);
};