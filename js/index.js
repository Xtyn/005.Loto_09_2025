const butoane = document.querySelectorAll('.pick-number');//creem lista cu cele 6 butoane, pentru a o putea parcurge cu forEach
const lista = document.querySelector('.lista-numere'); // creem o lista in care vor aparea cele 49 numere

let butonActiv = null; // tine minte ce buton s-a apasat, initial e null

butoane.forEach(buton => { //parcurgem lista de 6 butoane si le numim temporar pe fiecare buton
  buton.addEventListener('click', (event) => { //la click pe un buton executa event, poate avea si alta denumire, dar event e cam standard
        butonActiv = event.target; // se memoreaza care buton s-a apasat in butonActiv, care era gol
      butoane.forEach(b => b.classList.remove('activ')); //dezactivam clasa activ, adica culoarea, ca sa stim care e ultimul apasat
        butonActiv.classList.add('activ'); // adagam clasa activ la ultimul apasat
       lista.innerHTML = ''; //tot continutul html din lista este sters, adica stergem cele 49 numere, daca s-au apasat mai devreme
    for (let i = 1; i <= 49; i++) {
      const li = document.createElement('li'); //creezi lista goala 
      li.textContent = i; //scrie textul in acel element din lista, de 49 ori
      lista.appendChild(li); //lipeste textul de mai sus pe pagina in 
    }
  });
});

lista.addEventListener('click', (event) => { // event este cuvantul standard, care poate fi schimbat
    const elementulApasat = event.target.closest('li'); //salvam intr-o variabila cel mai apropiat numar apasat(poste a apasat exact pe numer, pe casuta sau pe text)
    if (elementulApasat && butonActiv) { //condtie sa fie un buton apasat si un numar din cele 49 apasate
        const numar = elementulApasat.textContent; // o constanta numar ia textul numarului apasat.
        butonActiv.textContent = numar; // textul butonului apasat devine textul numarului apasat
        butonActiv.classList.remove('activ'); // butonul apasat pierde clasa si evident culoarea
        butonActiv = null; // bunonul devine null, ca la inceput
        lista.innerHTML = ''; //lista dispare dupa alegerea unui numar, daca nu punem codul raman mereu cele 49 numere.
    }
});




