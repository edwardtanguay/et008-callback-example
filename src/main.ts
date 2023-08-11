import { ColorDataLoader } from './components/ColorDataLoader';
import { EmployeeDataLoader } from './components/EmployeeDataLoader';
import './style.scss';

const colors = ColorDataLoader();
const employees = EmployeeDataLoader();
console.log(employees);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Callback Demo Site</h1>
<p>There are ${colors.length} colors: ${colors.map(m => `${m}`).join(', ')}</p>
`;