export const showWaiting = (elementIdentifier: string) => {
	setTimeout(() => {
		document.querySelector<HTMLDivElement>(elementIdentifier)!.innerHTML = `<div><img class="spinner" src="images/spinner.gif"/></div>`;
	}, 0);
}