const butoane = document.querySelectorAll('.pick-number');
const lista = document.querySelector('.lista-numere');
let butonActiv = null;
const myChosenNumbers = [];

const checkButton = document.getElementById('checkButton');


butoane.forEach(buton => {
  buton.addEventListener('click', (event) => {
    butonActiv = event.target;
    butoane.forEach(b => b.classList.remove('activ'));
    butonActiv.classList.add('activ');
    lista.innerHTML = '';
    for (let i = 1; i <= 49; i++) {
      const li = document.createElement('li');
      li.textContent = i;
       if (myChosenNumbers.includes(i)) {
        li.classList.add('ales');
    }
      lista.appendChild(li);
    }
  });
});


lista.addEventListener('click', (event) => {
    const elementulApasat = event.target.closest('li');
    if (elementulApasat && butonActiv) {
        const numberPressed = elementulApasat.textContent;
        const numarAles = parseInt(numberPressed, 10);

        if (myChosenNumbers.includes(numarAles)) {
        alert("Acest număr a fost deja ales. Te rog alege altul.");
        return; 
    }
        butonActiv.textContent = numarAles;
        const index = parseInt(butonActiv.dataset.index, 10);
        myChosenNumbers[index] = numarAles;

        butonActiv.classList.remove('activ');
        butonActiv = null;
        lista.innerHTML = '';
        console.log("Numerele alese:", myChosenNumbers);

        if (myChosenNumbers.filter(Boolean).length === 6) {
            console.log("Gata de verificare! Poți apăsa butonul.");
            checkButton.disabled = false; 
        }
    }
});

checkButton.addEventListener('click', () => {
    const luckyNumbersDrawn = [];
    while (luckyNumbersDrawn.length < 6) {
        const winningNumber = Math.floor(Math.random() * 49) + 1;
        if (!luckyNumbersDrawn.includes(winningNumber)) {
            luckyNumbersDrawn.push(winningNumber);
        }
    }

    let numereGhicite = 0;
    for (const numarAles of myChosenNumbers) {
        if (luckyNumbersDrawn.includes(numarAles)) {
            numereGhicite++; 
        }
    }

    alert(`Numerele tale: ${myChosenNumbers.join(', ')}\nNumerele câștigătoare: ${luckyNumbersDrawn.join(', ')}\n\nAi ghicit ${numereGhicite} numere!`);
    
    checkButton.disabled = true;
});