const tablecaballos = () => {
	const hideTable = () => {
		let tables = document.querySelectorAll('.lorem')
		for(let index = 0; index < tables.length; index++) {
			tables[index].style.display = 'none';
		}
	}//fin de ocultar tablas

	const d = document,
		tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container-caballos__tab'))

	for (let index = 0; index < tabs.length; index++) {
		tabs[index].addEventListener('click', e => {
			let x = tabs[index];
			hideTable();
			let table = document.querySelector(`.${x.id}`);
			table.style.display = 'block';
		})
	}
};

export default tablecaballos
