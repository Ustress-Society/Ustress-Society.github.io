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
  }),
  joinshort: new Howl({
    src: ['./sounds/joinshort.mp3']
  }),
}

//random % per la grandezza dei bg
function getRandomArbitrary(min, max){
  return Math.random()*(max-min) + min;
}

//scrivere i decibel sull'html

var i=0; //variabile contatore messaggi

socket.on('stress', (message) => {
        console.log(message);
        
        var ll1 = [
        'img/assets/profile/TextureViz/Texture_Livello1_1.png',
        'img/assets/profile/TextureViz/Texture_Livello1_2.png',
        'img/assets/profile/TextureViz/Texture_Livello1_3.png',];

        var ll2 = [
          'img/assets/profile/TextureViz/Texture_Livello2_1.png',
          'img/assets/profile/TextureViz/Texture_Livello2_2.png',
          'img/assets/profile/TextureViz/Texture_Livello2_3.png',];

        var ll3 = [
            'img/assets/profile/TextureViz/Texture_Livello3_1.png',
            'img/assets/profile/TextureViz/Texture_Livello3_2.png',
            'img/assets/profile/TextureViz/Texture_Livello3_3.png',];

        var r1 = Math.floor(Math.random()*ll1.length);
        var bgImgl1 = "url(" + ll1[r1] + ")";
        var bgImgl2 = "url(" + ll2[r1] + ")";
        var bgImgl3 = "url(" + ll3[r1] + ")";
        
        console.log(i);
          
        if(message <= 46){
          console.log("BG cambiato");
          document.getElementById(String(i)).style.backgroundImage = "url('img/assets/profile/texture/Texture_Livello01.png')";
        }
        else if(message < 48){
          console.log("BG cambiato");
          document.getElementById(String(i)).style.backgroundImage = "url('img/assets/profile/texture/Texture_Livello02.png')";
        }
        else if(message < 50){
          console.log("BG cambiato");
          document.getElementById(String(i)).style.backgroundImage = "url('img/assets/profile/texture/Texture_Livello03.png')";
        }
        else if(message < 52){
          console.log("BG cambiato");
          document.getElementById(String(i)).style.backgroundImage = "url('img/assets/profile/texture/Texture_Livello04.png')";
        }
        else if(message < 54){
          console.log("BG cambiato");
          document.getElementById(String(i)).style.backgroundImage = "url('img/assets/profile/texture/Texture_Livello05.png')";
        }
        else if(message < 56){
          console.log("BG cambiato");
          document.getElementById(String(i)).style.backgroundImage = "url('img/assets/profile/texture/Texture_Livello06.png')";
        }
        else if(message < 58){
          console.log("BG cambiato");
          document.getElementById(String(i)).style.backgroundImage = "url('img/assets/profile/texture/Texture_Livello07.png')";
        }
        else if(message < 60){
          console.log("BG cambiato");
          document.getElementById(String(i)).style.backgroundImage = "url('img/assets/profile/texture/Texture_Livello08.png')";
        }
        else if(message < 62){
          console.log("BG cambiato");
          document.getElementById(String(i)).style.backgroundImage = "url('img/assets/profile/texture/Texture_Livello09.png')";
        }
        else if(message < 64){
          console.log("BG cambiato");
          document.getElementById(String(i)).style.backgroundImage = "url('img/assets/profile/texture/Texture_Livello10.png')";
        }
        else if(message < 66){
          console.log("BG cambiato");
          document.getElementById(String(i)).style.backgroundImage = "url('img/assets/profile/texture/Texture_Livello11.png')";
        }
        else if(message <= 68){
          console.log("BG cambiato");
          document.getElementById(String(i)).style.backgroundImage = "url('img/assets/profile/texture/Texture_Livello12.png')";
        }
        else{
          console.log("BG cambiato");
          document.getElementById(String(i)).style.backgroundImage = "url('img/assets/profile/texture/Texture_Livello12.png')";
        }

        i=i+1;
        console.log("Prossima tile");
        
        if(i>17)
        {
          console.log ("Counter resettato");
          i=0;
        }

      
        
        var x;
        x = Number(message)-40;
        if(x<0)
          x=0;
        else
          x = Number(message)-40;
        
        document.getElementById("stresslevel").innerHTML= String(x);
        
  });



//far partire i suoni

  //bottone invisibile per permettere i suoni
function clickHandler(event){
  console.log('Playing starting sound');
  sounds.lvl0.play();
}


const btn = document.querySelector('.btn');
btn.addEventListener('click',clickHandler);

  //risposte alla torre
  socket.on('towerOn', (message) => {
    console.log('Tower On');
    sounds.joinshort.play();
    is_paused= false;
  });
  socket.on('towerOff', (message) => {
    console.log('Tower Off');
    sounds.joinshort.stop();
    is_paused = true;
  });
  
  
  socket.on('buttonPressed', (message) => {
      console.log('Red button pressed');
      sounds.joinshort.pause();
      is_paused = true;
  });
  
  
  socket.on('buttonReleased', (message) => {
      console.log('Red button released');
      sounds.joinshort.play();
      is_paused = false;
  });
  
  socket.on('buttonReleased', (message) => {
    console.log('Red button released');
    sounds.joinshort.play();
    is_paused = false;
  });
  
  
