export const showWaiting = (elementIdentifier: string) => {
	setTimeout(() => {
		document.querySelector<HTMLDivElement>(elementIdentifier)!.innerHTML = `<div><img class="spinner" src="images/spinner.gif"/></div>`;
	}, 0);
}

export const getRandomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}