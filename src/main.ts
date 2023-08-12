import { ColorDataLoader } from './components/ColorDataLoader';
import { EmployeeDataLoader } from './components/EmployeeDataLoader';
import { showWaiting } from './tools';
import './style.scss';
import { CustomerDataLoader } from './components/CustomerDataLoader';

const colors = ColorDataLoader();

EmployeeDataLoader(showWaiting, (employees) => {
	document.querySelector<HTMLDivElement>('.employeeInfo')!.innerHTML = `
	There are ${employees.length} employees:
	<ul>
	${employees.map(employee => {
		return `<li>${employee.firstName} ${employee.lastName}</li>`;
	}).join('')}	
	</ul>
	`;
});

CustomerDataLoader(showWaiting, (customers) => {
	document.querySelector<HTMLDivElement>('.customerInfo')!.innerHTML = `
	There are ${customers.length} customers:
	<ul>
	${customers.map(customer => {
		return `<li>${customer.companyName} ${customer.contactName}</li>`;
	}).join('')}	
	</ul>
	`;
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Callback Demo Site</h1>
<p>There are ${colors.length} colors: ${colors.map(m => `${m}`).join(', ')}</p>
<div class="employeeInfo"></div>
<div class="customerInfo"></div>
`;