function tocaSom(idElementoAudio){
   const elemento = document.querySelector(seletorAudio).play('');
}

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        alert('Elemento não encontrado')
    }
const listaDeTeclas = document.querySeclectorAll('.tecla');

for (contador = 0; contador < listaDeTeclas.length; contador++){

    const instrumento = listaDeTeclas[contador].classList[1];

    const tecla = listaDeTeclas[contador];
    const idAudio = `#son_${instrumento}`;
        tecla.onclick = function(){
            tocaSom(idAudio);
        };

        tecla.onkeydown = function (){
            if(evento.code === 'Space'|| evento.code === 'Enter'){
                tecla.classList.add('ativa');
            }
           } 
        }
        tecla.onkeyup = function(){
            tecla.classList.remove('ativa');
        }
    
listaDeTeclas[1].onclick;
listaDeTeclas[2].onclick;
listaDeTeclas[3].onclick;
