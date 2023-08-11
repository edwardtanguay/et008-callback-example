import axios from 'axios';

const url = 'https://edwardtanguay.vercel.app/share/employees.json';

export const EmployeeDataLoader = () => {
	(async () => {
		const employees = (await axios.get(url)).data;
		console.log(employees);
		return employees;
	})();
	return 'nothing';
};