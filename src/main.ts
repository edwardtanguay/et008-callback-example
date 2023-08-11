import { ColorDataLoader } from './components/ColorDataLoader';
import { EmployeeDataLoader } from './components/EmployeeDataLoader';
import './style.scss';

const colors = ColorDataLoader();

EmployeeDataLoader((employees) => {
	document.querySelector<HTMLDivElement>('.employeeInfo')!.innerHTML = `
	There are ${employees.length} employees:
	<ul>
	${employees.map(employee => {
		return `<li>${employee.firstName} ${employee.lastName}</li>`;
	}).join('')}	
	</ul>
	`;
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Callback Demo Site</h1>
<p>There are ${colors.length} colors: ${colors.map(m => `${m}`).join(', ')}</p>
<p class="employeeInfo"></p>
`;