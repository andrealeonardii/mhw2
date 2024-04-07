
//NAV
function inizializzaNav(){
  const img=document.querySelectorAll('.hamburgerMenuImg');
  img[0].addEventListener('click',clickHamburgerMenu);//img[0] perchè è una lista
  const img1=document.querySelectorAll('.lenteImg');
  img1[0].addEventListener('click',clickLenteNav);
  const sectionNascosta=document.querySelectorAll('#modalView');
  sectionNascosta[0].addEventListener('click',onModalClick);

  const mostraPiuCoordinatori=document.querySelectorAll('.mostraDiPiu');
  mostraPiuCoordinatori[0].addEventListener('click',mostraDiPiu);
}

function clickHamburgerMenu(event){
  img=event.currentTarget;
  const divNascosto=document.querySelectorAll('#divNascosto');

  if(divNascosto[0].classList.contains('hidden')){
    divNascosto[0].classList.remove('hidden');
    img.src='img/x.png';
  }else {
    divNascosto[0].classList.add('hidden');
    img.src='img/hamburger.png';
  }

}

function mostraDiPiu(){
  event.preventDefault();//essendo un link si aggiornerebbe la pagina, così no
  target=event.currentTarget;
  par=document.getElementById('tuttiIcoordinatori');
  if(target.classList.contains('mostrato')){
    target.textContent='Mostra di Più';
    const aMostrati=document.querySelectorAll('.mostrati');
    for (const a of aMostrati)
    {
      a.remove();
    }
    target.classList.remove('mostrato');

  }else{

    const coor1= document.createElement('a');
    coor1.textContent='Stefano Cantarini';
    coor1.classList.add('aFoot');
    coor1.classList.add('mostrati');
    const br= document.createElement('br');
    br.classList.add('mostrati');
    const coor2= document.createElement('a');
    coor2.textContent='Claudio Pelizzeni';
    coor2.classList.add('aFoot');
    coor2.classList.add('mostrati');



    par.appendChild(coor1);
    par.appendChild(br);
    par.appendChild(coor2);
    target.classList.add('mostrato');
    target.textContent='Mostra di Meno';

  }

}

function clickLenteNav(){

  const sectionNascosta=document.querySelectorAll('#modalView');
  if(sectionNascosta[0].classList.contains('hidden')){

    sectionNascosta[0].style.top=window.pageYOffset + 'px';//rappresenta lo scostamente verticale della viewport rispetto all’inizio della pagina.
    document.body.classList.add('no-scroll');//evita che quando la modale è attiva si possa scrollare
    sectionNascosta[0].classList.remove('hidden');
    sectionNascosta[0].classList.add('modalViewShow');
  }

}

function onModalClick(event) {
  modalView=event.currentTarget;
  document.body.classList.remove('no-scroll');
  modalView.classList.add('hidden');
  modalView.classList.remove('modalViewShow');
}

function inizializzaAnavSectionNascosta(){
  const boxes=document.querySelectorAll('section .naviga a');
  for (const box of boxes)
  {
    box.addEventListener('click', clickAnavSectionNascosta);
    box.classList.add('reset');

  }
  boxes[0].classList.remove('reset');
  boxes[0].classList.add('cliccato');

  gestisciDiv(boxes[0].dataset.naviga);// passo il dataset del primo link così da mostrare il div associato
  const naviga=document.querySelectorAll('section .naviga');
  naviga[0].addEventListener('click', clickNavigaNav);

}

function clickNavigaNav(){
  event.stopPropagation();//così quando appare la schermata con il div, cliccando il div la modale non si chiude, ma cliccando attorno si
}

function clickAnavSectionNascosta(){
  event.preventDefault();//dice al browser di impedire il comportamento normale di questo evento(# nel link porta all'inizio)
  const a=event.currentTarget;//mi prendo il link preciso che è stato cliccato
  gestisciDiv(a.dataset.naviga);
  const boxes=document.querySelectorAll('section .naviga a');//prendo tutti i link perchè devo resettare il colore tranne per quello cliccato
  for (const box of boxes)
  {
    if(box.classList.contains('cliccato')){
      box.classList.remove('cliccato');
      box.classList.add('reset');
    }
  }
  a.classList.remove('reset');
  a.classList.add('cliccato');

}

function gestisciDiv(dataSet){

    const divNaviga=document.querySelectorAll('.naviga .divNaviga');//prendo tutti i div

    for (const div of divNaviga)
    {
      if(div.classList.contains(dataSet)){//per ogni div controllo se la classe coincide con il dataset del link (i div hanno il nome della classe uguale ad dataset associato)
        div.classList.remove('hidden');
      }else{
        div.classList.add('hidden');
      }
    }
}

//HEADER

function inizializzaAheader(){
  const boxes=document.querySelectorAll('Header .naviga a');
  for (const box of boxes)
  {
    box.addEventListener('click', clickAHeader);
    box.classList.add('reset');

  }

  boxes[0].classList.remove('reset');
  boxes[0].classList.add('cliccato');

  gestisciDiv(boxes[0].dataset.naviga);// passo il dataset del primo link così da mostrare il div associato

}

function clickAHeader(){
  event.preventDefault();//dice al browser di impedire il comportamento normale di questo evento(# nel link porta all'inizio)
  const a=event.currentTarget;//mi prendo il link preciso che è stato cliccato
  gestisciDiv(a.dataset.naviga);
  const boxes=document.querySelectorAll('Header .naviga a');//prendo tutti i link perchè devo resettare il colore tranne per quello cliccato
  for (const box of boxes)
  {
    if(box.classList.contains('cliccato')){
      box.classList.remove('cliccato');
      box.classList.add('reset');
    }
  }
  a.classList.remove('reset');
  a.classList.add('cliccato');
}

//MAIN

//gestione dell'immagine in alto a destra della nav e della comparsa del div nascosto
inizializzaNav();
inizializzaAnavSectionNascosta();
//gestione delle a dell'header per il colore della scritta selezionata e gestione dei div nascosti in base a ciò che si preme
inizializzaAheader();//mi occupo del funzionamento del div centrale
