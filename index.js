
// navbar section starts here 
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
// sliding code starts here
var slidehead = document.getElementById("slide_heading");
var headingg = new Array("EXPERTISE YOU CAN RELY ON",
    "PERSONALIZED FINANCIAL SOLUTIONS",
    "INTEGRITY WITH EXCELLENCE",
);
var len1 = headingg.length;
var j = 0;
function sliderhead() {
    if (j > len1 - 1) {
        j = 0;
    }
    slidehead.innerHTML = headingg[j];
    j++;
    setTimeout('sliderhead()', 3000);
}


