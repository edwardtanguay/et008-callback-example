import { ColorDataLoader } from './components/ColorDataLoader';
import './style.scss';

const colors = ColorDataLoader();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Callback Demo Site</h1>
<p>There are ${colors.length} colors: ${colors.map(m => `${m}`).join(', ')}</p>
`;