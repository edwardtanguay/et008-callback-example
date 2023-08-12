export const showWaitingEmployees = () => {
	setTimeout(() => {
		document.querySelector<HTMLDivElement>('.employeeInfo')!.innerHTML = `<div><img class="spinner" src="images/spinner.gif"/></div>`;
	}, 0);
}

export const showWaitingCustomers = () => {
	setTimeout(() => {
		document.querySelector<HTMLDivElement>('.customerInfo')!.innerHTML = `<div><img class="spinner" src="images/spinner.gif"/></div>`;
	}, 0);
}