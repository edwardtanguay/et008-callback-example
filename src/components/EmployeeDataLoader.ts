import axios from 'axios';
import { IEmployee } from '../interfaces';

const url = 'https://edwardtanguay.vercel.app/share/employees.json';

export const EmployeeDataLoader = (callback: (employees: IEmployee[]) => void) => {
	(async () => {
		const employees:IEmployee[] = (await axios.get(url)).data;
		callback(employees);
	})();
};