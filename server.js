// richiedi alcuni moduli base di node
const http = require('http'); // il modulo http permette di creare il server, gestire le richieste di file (html, css, js) e mandarli al computer che li chiede
const fs = require('fs'); // il modulo "file system" (fs) permette a node di usare i file sul computer
const path = require('path'); // il modulo path aiuta a leggere dove stanno i file a partire dagli url

// Su che porta verrà creato il server?
const port = 8000;
// lista delle estensioni file che il server saprà riconoscere (per il tutotrial ne serviranno di fatto solo alcuni)
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mp3',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};

// Crea un server HTTP base, che sappia cosa fare quando gli vengono chiesti dei file
const server = http.createServer((request,response) => {
    console.log('request ', request.url);

    // ricava dove sta il file dall'url
    let filePath = '.' + request.url;
    if (filePath == './') {
        filePath = 'index.html';
    }

    // estrai l'estensione del file e capisci che tipo di file è
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // manda al client il file corretto o fargli sapere che il file non esiste o non è accessibile
    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                // ENOENT = Error NO ENTity (il file non esiste)
                response.writeHead(404, { 'Content-Type': 'text/html' });
                response.end(`404: this page doesn't exist`, 'utf-8');
            }
            else {
                // il file esiste ma è protetto e non può essere quindi mandato al client
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        else {
            // file trovato, mandalo al client
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
});

// Attiva il server e ascolta sulla porta se qualcuno inizia a chiedere file
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// carica il modulo serialport per comunicare con arduino
const SerialPort = require('serialport');
// Apri la connessione sulla porta seriale a cui è connesso anche Arduino
const serial = new SerialPort('COM3', {
        baudRate: 115200
    }, function() {
        console.log('Ready to communicate with Arduino on serial port');
});

// carica il modulo serialport per comunicare con arduino
const SerialPort2 = require('serialport');
// Apri la connessione sulla porta seriale a cui è connesso anche Arduino
const serial2 = new SerialPort('COM6', {
        baudRate: 115200
    }, function() {
        console.log('Ready to communicate with Arduino on serial port 2');
});


// carica il modulo Socket IO per far comunicare facilmente client e Arduino
const io = require('socket.io')(server);

// ascolta quando un nuovo client si connette
io.on('connection', (socket) => {
    console.log('a new client connected');

    // fai sapere al client che è connesso
    socket.emit('greetings', 'You are now connected to the server through Socket IO');

    // quando ricevi dati da Arduino, reagisci
    serial.on('data', data => {
        // parsa il messaggio
        let message = data.toString().replace(/\n*/, '');
        // se è un messaggio relativo all'accensione della torre
        if (message.includes('Tower ON')) {
            console.log("Tower ON");
            socket.emit('towerOn');
        }
        else if (message.includes('Tower OFF')) {
            console.log("Tower OFF");
            socket.emit('towerOff');
        } else if (message.includes('Letto')) {
            console.log("Tag Letto");
            socket.emit('tagLetto'); 
        // se è un messaggio relativo al bottone Rosso      
        } else if (message.includes('RED')) {
            console.log("RED button pressed");
            socket.emit('buttonPressed');  
        } else if (message.includes('BLACK')) {
            console.log("RED button released");
            socket.emit('buttonReleased');  
        } 
    });

     // quando ricevi dati da Arduino, reagisci
    serial2.on('data', data => {
        // parsa il messaggio
        let message = data.toString().replace(/\n*/, '');
        // se è un messaggio relativo all'accensione della torre
        if (message.includes('db:')) {
            socket.emit('stress',message.substring(4,6)); 
            console.log(message.substring(4,6));
        // se è un messaggio relativo al bottone
        } 
    });

});
