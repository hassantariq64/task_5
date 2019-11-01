

function backgroundChanger(){
    var color1 ="green";
   
    document.body.style.backgroundColor = color1;
   
}

function backgroundImage(){
    
   
    document.body.style.backgroundImage = "url('Suicide-Squad-Joker-Skrillex-Wallpaper.jpg')";
 

}

function myFunction() {
    var i;
    var y = document.getElementById("tableNo").value;
    var z = document.getElementById("tableRange").value;
    for(i=1;i<=z;i++){
        var x = y * i;
        var result = y+" x "+i+" = "+x;
        document.getElementById("no").innerHTML += result+"<br/>";
    }
}

