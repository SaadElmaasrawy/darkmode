var myBtn = document.getElementById("switch-btn");

var myCircle = document.getElementById("circle");

var myTop = document.getElementById("top");

var myCon = document.getElementById("con");

var myCard1 = document.getElementById("facebook0");
var myCard2 = document.getElementById("facebook1");
var myCard3 = document.getElementById("facebook2");
var myCard4 = document.getElementById("facebook3");
var myPart2 = document.getElementById("part-2");

var myPart2Header = document.getElementById("part-2-header");

var myP2C1 = document.getElementById("face0");
var myP2C2 = document.getElementById("face1");
var myP2C3 = document.getElementById("face2");
var myP2C4 = document.getElementById("face3");
var myP2C5 = document.getElementById("face4");
var myP2C6 = document.getElementById("face5");
var myP2C7 = document.getElementById("face6");
var myP2C8 = document.getElementById("face7");


myBtn.onclick = function () {
    if(myCircle.className == "circle"){
        myCircle.className = "circle-active";

        myTop.className += " top-dark";

        myCon.className = "con-dark";

        myPart2.classList.add("part-2-dark"); 

        myPart2Header.classList.add("part-2-header-dark");

        myCard1.classList.add("facebook-dark");
        myCard2.classList.add("facebook-dark");
        myCard3.classList.add("facebook-dark");
        myCard4.classList.add("facebook-dark");

        myP2C1.classList.add("face-dark");
        myP2C2.classList.add("face-dark");
        myP2C3.classList.add("face-dark");
        myP2C4.classList.add("face-dark");
        myP2C5.classList.add("face-dark");
        myP2C6.classList.add("face-dark");
        myP2C7.classList.add("face-dark");
        myP2C8.classList.add("face-dark");

    } else if (myCircle.className == "circle-active") {
        myCircle.className = "circle";
        myTop.className = "top";
        myCon.className = "con";
        myPart2.classList.remove("part-2-dark"); 
        myPart2Header.classList.remove("part-2-header-dark");
        myCard1.classList.remove("facebook-dark");
        myCard2.classList.remove("facebook-dark");
        myCard3.classList.remove("facebook-dark");
        myCard4.classList.remove("facebook-dark");

        myP2C1.classList.remove("face-dark");
        myP2C2.classList.remove("face-dark");
        myP2C3.classList.remove("face-dark");
        myP2C4.classList.remove("face-dark");
        myP2C5.classList.remove("face-dark");
        myP2C6.classList.remove("face-dark");
        myP2C7.classList.remove("face-dark");
        myP2C8.classList.remove("face-dark");
    }

};





