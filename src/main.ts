import { ColorDataLoader } from './components/ColorDataLoader';
import { EmployeeDataLoader } from './components/EmployeeDataLoader';
import { showWaiting } from './tools';
import './style.scss';
import { CustomerDataLoader } from './components/CustomerDataLoader';
import { ICustomer, IEmployeeDataLoaderData } from './interfaces';

const colors = ColorDataLoader();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Callback/Promise Demo Site</h1>
<p>There are ${colors.length} colors: ${colors.map(m => `${m}`).join(', ')}</p>
<div class="employeeInfo"></div>
<div class="customerInfo"></div>
`;

EmployeeDataLoader('.employeeInfo', showWaiting, (data: IEmployeeDataLoaderData) => {
	const _customerInfoElem = document.querySelector<HTMLDivElement>('.employeeInfo');
	if (_customerInfoElem) {
		const customerInfoElem = _customerInfoElem;
		if (!data.hasError) {
			const employees = data.employees;
			customerInfoElem.innerHTML = `
	There are ${employees.length} employees:
	<ul>
	${employees.map(employee => {
				return `<li>${employee.firstName} ${employee.lastName}</li>`;
			}).join('')}	
	</ul>
	`;
		} else {
			customerInfoElem.innerHTML = `<p class="error">${data.errorMessage}</p>`;
		}
	}
});

(async () => {
	const _customerInfoElem = document.querySelector<HTMLDivElement>('.customerInfo');
	if (_customerInfoElem) {
		const customerInfoElem = _customerInfoElem;
		try {
			const customers: ICustomer[] = await CustomerDataLoader('.customerInfo', showWaiting);
			customerInfoElem.innerHTML = `<div>
	There are ${customers.length} customers:
	<ul>
	${customers.map(customer => {
				return `<li>${customer.companyName} - ${customer.contactName}</li>`;
			}).join('')}	
	</ul>
	</div>
	`;
		}
		catch (err: unknown) {
			if (err instanceof Error) {
				customerInfoElem.innerHTML = `<p class="error">${err.message}</p>`;
			} else {
				customerInfoElem.innerHTML = `<p class="error">GENERAL ERROR</p>`;
			}
		}
	}
})();
