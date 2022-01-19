// initialize socket variable on client

const socket = io();

var is_paused = false;

var sounds = {
  lvl0: new Howl({
    src: ['./sounds/lvl0.mp3']
  }),  lvl1: new Howl({
    src: ['./sounds/lvl1.mp3']
  }),
  lvl2: new Howl({
    src: ['./sounds/lvl2.mp3']
  }),
  lvl3: new Howl({
    src: ['./sounds/lvl3.mp3']
  }),
  letitsno: new Howl({
    src: ['./sounds/letitsno.mp3']
  })
}



// ascolta il saluto del server
socket.on('greetings', (message) => {

    // stampa il messaggio in console
    console.log(message);

});


//
socket.on('towerOn', (message) => {
  console.log('Tower On');
  sounds.lvl3.play();
  is_paused= false;
});
socket.on('towerOff', (message) => {
  console.log('Tower Off');
  sounds.lvl3.stop();
  is_paused = true;
});


socket.on('buttonPressed', (message) => {
    console.log('Red button pressed');
    sounds.lvl3.pause();
    is_paused = true;
});


socket.on('buttonReleased', (message) => {
    console.log('Red button released');
    sounds.lvl3.play();
    is_paused = false;
});

socket.on('buttonReleased', (message) => {
  console.log('Red button released');
  sounds.lvl3.play();
  is_paused = false;
});


function clickHandler(event){
  console.log('Playing starting sound');
  sounds.lvl0.play();
}


const btn = document.querySelector('.btn');
btn.addEventListener('click',clickHandler);