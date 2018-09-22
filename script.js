var randomBox;
var toplamPuan=0;
var boxCount=12;
function start(){

    for(let i=1;i<=boxCount;i++){
        var div=document.createElement("div");
        div.setAttribute("class","box");
        div.setAttribute("id","box"+i);
        div.boxNumber=i;
        div.onclick=function () {
            boxClick(this.boxNumber);
        };
      document.getElementById("box-container").appendChild(div);
    }
  setNewColor();
}
function setNewColor() {

    while(randomColor1===randomColor2) {
        var randomColor1 = getRandomColor();
        var randomColor2 = getRandomColor();
    }

    let i=1;
    while(i<=12){
        boxColor(i,randomColor1);
        i++;
    }
    window.randomBox = randomInt(1,12);
    boxColor(randomBox,randomColor2);
    textColor(randomColor2);

}

function boxColor(boxID,colorId){
    document.getElementById("box"+boxID).style.background=colorId;
}

function getRandomColor() {
    var hex = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function boxClick(boxId) {
    if(boxId===window.randomBox) {
        $.notify("Dogru! +20 Puan",
            {
              className: "success",
              autoHideDelay:1000
            });
        puanHesaplama(+20);
        setNewColor();
    }
    else{
        $.notify("Yanlis!! -30 Puan",
            {
                className: "error",
                autoHideDelay:1000
            });
        puanHesaplama(-30);
        setNewColor();
    }
}

function puanHesaplama(puan){
   if(window.toplamPuan+puan<0) {
       window.toplamPuan =0;
       document.getElementById("puan").innerHTML = "Toplam Puaniniz = " + window.toplamPuan;
   }
   else
   {
       window.toplamPuan += puan;
       document.getElementById("puan").innerHTML = "Toplam Puaniniz = " + window.toplamPuan;
   }
}

function textColor(colorId){
      var x= document.getElementsByClassName("score");
    for (let i = 0; i < x.length; i++) {
        x[i].style.color =colorId;
    }
}

//timer very soon
$(document).ready(function(){
    $("#timer").mouseenter(function(){
        $("#timer").notify(
            "Very Soon !",
            { position:"left",
              className:"info",
                autoHideDelay:1000
            }
        )});
});