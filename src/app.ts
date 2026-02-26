let cuenta: number = 0;
const boton = document.getElementById('btn') as HTMLButtonElement;
const display = document.getElementById('contador') as HTMLElement;

boton.addEventListener('click', () => {
    cuenta++;
    display.innerText = cuenta.toString();
});