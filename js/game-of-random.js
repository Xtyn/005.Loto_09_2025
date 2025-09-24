const butoane = document.querySelectorAll('.pick-number');
const lista = document.querySelector('.lista-numere'); 

let butonActiv = null; 

butoane.forEach(buton => { 
  buton.addEventListener('click', (event) => { 
        butonActiv = event.target; 
      butoane.forEach(b => b.classList.remove('activ')); 
        butonActiv.classList.add('activ'); 
       lista.innerHTML = ''; 
    for (let i = 1; i <= 49; i++) {
      const li = document.createElement('li'); 
      li.textContent = i; 
      lista.appendChild(li); 
    }
  });
});

lista.addEventListener('click', (event) => { 
    const elementulApasat = event.target.closest('li'); 
    if (elementulApasat && butonActiv) { 
        const numberPressed = elementulApasat.textContent; 
        butonActiv.textContent = numberPressed; 
        butonActiv.classList.remove('activ');
        butonActiv = null; 
        lista.innerHTML = ''; 

        
        let winningNUmber = Math.floor(Math.random() * 49) +1 ;
        
        let resultGame = '';
        if(winningNUmber === +numberPressed){
          resultGame = 'win';
        } else if (winningNUmber !== numberPressed.innerHTML) {
          resultGame = 'Lose'
        }
        alert(`You picked ${numberPressed} and the winning number is ${winningNUmber}, so you ${resultGame}`);
       
    }

    
});

