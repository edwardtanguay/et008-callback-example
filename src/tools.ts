export const showWaiting = () => {
	setTimeout(() => {
		document.querySelector<HTMLDivElement>('.employeeInfo')!.innerHTML = `<div><img class="spinner" src="images/spinner.gif"/></div>`;
	}, 0);
}