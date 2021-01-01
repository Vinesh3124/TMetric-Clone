window.onscroll = function() {myFunction()};

var navbar = document.getElementById("top__navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// ------------------Accordian----------------

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {

var panel = this.nextElementSibling;
if (panel.style.maxHeight){
  panel.style.maxHeight = null;
} else {
  let active = document.querySelectorAll(".Top__middle__cards__accordion-div .accordion.active");
  for(let j = 0; j < active.length; j++){
    active[j].classList.remove("active");
    active[j].nextElementSibling.style.maxHeight = null;
  }
  this.classList.toggle("active");
  panel.style.maxHeight = panel.scrollHeight + "px";
}
});
}

// ------------------Accordian Pic change----------------------------------------

var change1 = document.getElementById("ac1")
change1.addEventListener("click", chan1)

var change2 = document.getElementById("ac2")
change2.addEventListener("click", chan2)

var change3 = document.getElementById("ac3")
change3.addEventListener("click", chan3)

var change4 = document.getElementById("ac4")
change4.addEventListener("click", chan4)

var change5 = document.getElementById("ac5")
change5.addEventListener("click", chan5)

var change6 = document.getElementById("ac6")
change6.addEventListener("click", chan6)

function chan1(){
    document.getElementById("theImage").src="https://tmetric.com/media/e5enfaae/img-advantages.png"
}

function chan2(){
    document.getElementById("theImage").src="https://tmetric.com/media/d2dhexfq/img-advantages-project-management.png"
}

function chan3(){
    document.getElementById("theImage").src="https://tmetric.com/media/b3abexjt/img-advantages-team-management.png"
}

function chan4(){
    document.getElementById("theImage").src="https://tmetric.com/media/nmmhl5l3/img-advantages-invoice.png"
}

function chan5(){
    document.getElementById("theImage").src="https://tmetric.com/media/bpli5hts/img-advantages-reporting.png"
}

function chan6(){
    document.getElementById("theImage").src="https://tmetric.com/media/kuqjgrfl/img-advantages-time-off.png"
}
