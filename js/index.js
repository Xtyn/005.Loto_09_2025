const butoane = document.querySelectorAll('.pick-number');
const lista = document.getElementById('listaNumere');

butoane.forEach(buton => {
  buton.addEventListener('click', () => {
    lista.innerHTML = ''; // Golește lista la fiecare click, pentru a nu adăuga numere la nesfârșit
    for (let i = 1; i <= 49; i++) {
      const li = document.createElement('li');
      li.textContent = i;
      li.addEventListener('click', () => {
        alert(`Ai selectat numărul ${i}`);
      });
      lista.appendChild(li);
    }
  });
});
