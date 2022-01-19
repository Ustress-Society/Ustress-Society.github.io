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
socket.on('stress', (message) => {

        var mess = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
        var id;
        
       /* mess.forEach((element, indexNumber) => {
          id=indexNumber
        

          setTimeout(() => {  
            element = message;
            console.log(id + ":");
            console.log(element); 
            
              if(Number(element) <= 46)
                document.getElementById(id).style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png')";
              else if (Number(element) <= 50)
                document.getElementById(id).style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png')";
              else if (Number(element) <= 55)
                document.getElementById(id).style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png')";
              else if (Number(element) <= 65)
                document.getElementById(id).style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png')";
              else
                document.getElementById(id).style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png')";
          }, id*1000);
    
        });*/
        
          
        setTimeout(() => {  
          mess[0] = message;
          console.log("0 :");
          console.log(mess[0]); 
          
            if(mess[0] <= 46)
              document.getElementById("0").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png' )";
            else if (mess[0] <= 50)
              document.getElementById("0").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png' )";
            else if (mess[0] <= 55)
              document.getElementById("0").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png' )";
            else if (mess[0] <= 65)
              document.getElementById("0").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png' )";
            else
              document.getElementById("0").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png' )";
        
            document.getElementById("0").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 1000);
        setTimeout(() => {  
          mess[1] = message;
          console.log("1 :");
          console.log(mess[1]); 
          
            if(mess[1] <= 46)
              document.getElementById("1").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png' )";
            else if (mess[1] <= 50)
              document.getElementById("1").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png' )";
            else if (mess[1] <= 55)
              document.getElementById("1").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png' )";
            else if (mess[1] <= 65)
              document.getElementById("1").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png' )";
            else
              document.getElementById("1").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png' )";
        
              document.getElementById("1").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 2000);
        setTimeout(() => {  
          mess[2] = message;
          console.log("2 :");
          console.log(mess[2]); 
          
            if(mess[2] <= 46)
              document.getElementById("2").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png' )";
            else if (mess[2] <= 50)
              document.getElementById("2").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png' )";
            else if (mess[2] <= 55)
              document.getElementById("2").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png' )";
            else if (mess[2] <= 65)
              document.getElementById("2").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png' )";
            else
              document.getElementById("2").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png' )";
        
              document.getElementById("2").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 3000);
        setTimeout(() => {  
          mess[3] = message;
          console.log("3 :");
          console.log(mess[3]); 
          
            if(mess[3] <= 46)
              document.getElementById("3").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png' )";
            else if (mess[3] <= 50)
              document.getElementById("3").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png' )";
            else if (mess[3] <= 55)
              document.getElementById("3").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png' )";
            else if (mess[3] <= 65)
              document.getElementById("3").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png' )";
            else
              document.getElementById("3").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png' )";
        
              document.getElementById("3").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 4000);
        setTimeout(() => {  
          mess[4] = message;
          console.log("4 :");
          console.log(mess[4]); 
          
            if(mess[4] <= 46)
              document.getElementById("4").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png' )";
            else if (mess[4] <= 50)
              document.getElementById("4").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png' )";
            else if (mess[4] <= 55)
              document.getElementById("4").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png' )";
            else if (mess[4] <= 65)
              document.getElementById("4").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png' )";
            else
              document.getElementById("4").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png' )";
        
              document.getElementById("4").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 5000);
        setTimeout(() => {  
          mess[5] = message;
          console.log("5 :");
          console.log(mess[5]); 
          
            if(mess[5] <= 46)
              document.getElementById("5").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png' )";
            else if (mess[5] <= 50)
              document.getElementById("5").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png' )";
            else if (mess[5] <= 55)
              document.getElementById("5").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png' )";
            else if (mess[5] <= 65)
              document.getElementById("5").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png' )";
            else
              document.getElementById("5").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png' )";
       
              document.getElementById("5").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 6000);
        setTimeout(() => {  
          mess[6] = message;
          console.log("6 :");
          console.log(mess[6]); 
          
            if(mess[6] <= 46)
              document.getElementById("6").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png' )";
            else if (mess[6] <= 50)
              document.getElementById("6").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png' )";
            else if (mess[6] <= 55)
              document.getElementById("6").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png' )";
            else if (mess[6] <= 65)
              document.getElementById("6").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png' )";
            else
              document.getElementById("6").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png' )";
        
              document.getElementById("6").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 7000);
        setTimeout(() => {  
          mess[7] = message;
          console.log("7 :");
          console.log(mess[7]); 
          
            if(mess[7] <= 46)
              document.getElementById("7").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png' )";
            else if (mess[7] <= 50)
              document.getElementById("7").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png')";
            else if (mess[7] <= 55)
              document.getElementById("7").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png')";
            else if (mess[7] <= 65)
              document.getElementById("7").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png')";
            else
              document.getElementById("7").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png')";
        
              document.getElementById("7").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 8000);
        setTimeout(() => {  
          mess[8] = message;
          console.log("8 :");
          console.log(mess[8]); 
          
            if(mess[8] <= 46)
              document.getElementById("8").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png')";
            else if (mess[8] <= 50)
              document.getElementById("8").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png')";
            else if (mess[8] <= 55)
              document.getElementById("8").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png')";
            else if (mess[8] <= 65)
              document.getElementById("8").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png')";
            else
              document.getElementById("8").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png')";
        
              document.getElementById("8").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 9000);
        setTimeout(() => {  
          mess[9] = message;
          console.log("9 :");
          console.log(mess[9]); 
          
            if(mess[9] <= 46)
              document.getElementById("9").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png')";
            else if (mess[9] <= 50)
              document.getElementById("9").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png')";
            else if (mess[9] <= 55)
              document.getElementById("9").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png')";
            else if (mess[9] <= 65)
              document.getElementById("9").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png')";
            else
              document.getElementById("9").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png')";
        
              document.getElementById("9").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 10000);
        setTimeout(() => {  
          mess[10] = message;
          console.log("10 :");
          console.log(mess[10]); 
          
            if(mess[10] <= 46)
              document.getElementById("10").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png')";
            else if (mess[10] <= 50)
              document.getElementById("10").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png')";
            else if (mess[10] <= 55)
              document.getElementById("10").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png')";
            else if (mess[10] <= 65)
              document.getElementById("10").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png')";
            else
              document.getElementById("10").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png')";
        
              document.getElementById("10").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 11000);
        setTimeout(() => {  
          mess[11] = message;
          console.log("11 :");
          console.log(mess[11]); 
          
            if(mess[11] <= 46)
              document.getElementById("11").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png')";
            else if (mess[11] <= 50)
              document.getElementById("11").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png')";
            else if (mess[11] <= 55)
              document.getElementById("11").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png')";
            else if (mess[11] <= 65)
              document.getElementById("11").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png')";
            else
              document.getElementById("11").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png')";
        
              document.getElementById("11").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 12000);
        setTimeout(() => {  
          mess[12] = message;
          console.log("12 :");
          console.log(mess[12]); 
          
            if(mess[12] <= 46)
              document.getElementById("12").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png')";
            else if (mess[12] <= 50)
              document.getElementById("12").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png')";
            else if (mess[12] <= 55)
              document.getElementById("12").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png')";
            else if (mess[12] <= 65)
              document.getElementById("12").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png')";
            else
              document.getElementById("12").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png')";
       
              document.getElementById("12").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 13000);
        setTimeout(() => {  
          mess[13] = message;
          console.log("13 :");
          console.log(mess[13]); 
          
            if(mess[13] <= 46)
              document.getElementById("13").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png')";
            else if (mess[13] <= 50)
              document.getElementById("13").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png')";
            else if (mess[13] <= 55)
              document.getElementById("13").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png')";
            else if (mess[13] <= 65)
              document.getElementById("13").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png')";
            else
              document.getElementById("13").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png')";
        
              document.getElementById("13").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 14000);
        setTimeout(() => {  
          mess[14] = message;
          console.log("14 :");
          console.log(mess[14]); 
          
            if(mess[14] <= 46)
              document.getElementById("14").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png')";
            else if (mess[14] <= 50)
              document.getElementById("14").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png')";
            else if (mess[14] <= 55)
              document.getElementById("14").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png')";
            else if (mess[14] <= 65)
              document.getElementById("14").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png')";
            else
              document.getElementById("14").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png')";
        
              document.getElementById("14").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 15000);
        setTimeout(() => {  
          mess[15] = message;
          console.log("15 :");
          console.log(mess[15]); 
          
            if(mess[15] <= 46)
              document.getElementById("15").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png')";
            else if (mess[15] <= 50)
              document.getElementById("15").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png')";
            else if (mess[15] <= 55)
              document.getElementById("15").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png')";
            else if (mess[15] <= 65)
              document.getElementById("15").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png')";
            else
              document.getElementById("15").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png')";
        
              document.getElementById("15").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 16000);
        setTimeout(() => {  
          mess[16] = message;
          console.log("16 :");
          console.log(mess[16]); 
          
            if(mess[16] <= 46)
              document.getElementById("16").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png')";
            else if (mess[16] <= 50)
              document.getElementById("16").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png')";
            else if (mess[16] <= 55)
              document.getElementById("16").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png')";
            else if (mess[16] <= 65)
              document.getElementById("16").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png')";
            else
              document.getElementById("16").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png')";
        
              document.getElementById("16").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 17000);
        setTimeout(() => {  
          mess[17] = message;
          console.log("17 :");
          console.log(mess[16]); 
          
            if(mess[17] <= 46)
              document.getElementById("17").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl1.png')";
            else if (mess[17] <= 50)
              document.getElementById("17").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl2.png')";
            else if (mess[17] <= 55)
              document.getElementById("17").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl3.png')";
            else if (mess[17] <= 65)
              document.getElementById("17").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl4.png')";
            else
              document.getElementById("17").style.backgroundImage = "url('img/assets/profile/TextureDati_Sito/lvl5.png')";
        
              document.getElementById("17").style.backgroundSize = getRandomArbitrary(40,100) +"%";
            }, 18000);

        
        var x;
        x = Number(message)-40;
        if(x<0)
          x=0;
        else
          x = Number(message)-40;
        
        document.getElementById("stresslevel").innerHTML= "Your current stress level is: " + String(x);
        
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
  
  