var isActive = 0;
//0 small group, 1 big group

var small_span = document.querySelector('#small_click'); 
var big_span = document.querySelector('#big_click'); 
var group_span = document.querySelector('#group-span'); 
var img = document.querySelector('#img'); 

function attivaSmall(){
    if(isActive==1){
        console.log("kit da 5");
        small_span.className = "active";
        big_span.className = "";
        group_span.innerHTML = "5 people group";
        img.src = "img/assets/sk/Sito_Set5.png";

        isActive = 0;
    }
}
function attivaBig(){
    if(isActive==0){
        console.log("kit da 10");
        small_span.className = "";
        big_span.className = "active";
        group_span.innerHTML = "10 people group";
        img.src = "img/assets/sk/Sito_Set10_corretto.png";

        isActive = 1;
    }
}
