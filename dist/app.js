"use strict";
let cuenta = 0;
const boton = document.getElementById('btn');
const display = document.getElementById('contador');
boton.addEventListener('click', () => {
    cuenta++;
    display.innerText = cuenta.toString();
});
//# sourceMappingURL=app.js.map