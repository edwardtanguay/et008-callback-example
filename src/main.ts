import { DataLoader } from './components/dataLoader';
import './style.scss';

const colors = DataLoader();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Callback Demo Site</h1>
<p>There are ${colors.length} colors: ${colors.map(m => `${m}`).join(', ')}</p>
`;