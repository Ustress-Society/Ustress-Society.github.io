function changeMap(){
    var selectedValue = document.getElementById("city-select").value;
    console.log(selectedValue);
    var map = document.getElementById("map");

    var urlMil = "url('img/assets/cm/milan-street-map.png')";
    var urlNY = "url('img/assets/cm/ny-map.png')";
    var urlTok = "url('img/assets/cm/tokio-map.png')";

    if(selectedValue == "Milan"){
        map.style.backgroundImage = urlMil;
        console.log("Mappa Milano")
    }
    else if(selectedValue == "New York"){
        map.style.backgroundImage = urlNY;
        console.log("Mappa New York");
    }
    else if(selectedValue == "Tokyo"){
        map.style.backgroundImage = urlTok;
        console.log("Mappa Tokyo");
    }
}