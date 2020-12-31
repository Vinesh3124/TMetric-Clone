function myFunctiondropdown() {
   document.getElementById("dropdown_content").classList.toggle("show");
 }
 
 function myFunctiondropdown1() {
   document.getElementById("dropdown_content1").classList.toggle("show");
 }
 
 function myFunctiondropdown2() {
   document.getElementById("dropdown_content2").classList.toggle("show");
 }
 
 function myFunctiondropdown3() {
   document.getElementById("dropdown_content3").classList.toggle("show");
 }
 
 // Close the dropdown if the user clicks outside of it
 window.onclick = function(e) {
   if (!e.target.matches('.dropbtn')) {
   var myDropdown = document.getElementById("myDropdown");
     if (myDropdown.classList.contains('show')) {
       myDropdown.classList.remove('show');
     }
   }
 }
 
 window.onclick = function(e) {
   if (!e.target.matches('.dropbtn1')) {
   var myDropdown1 = document.getElementById("myDropdown1");
     if (myDropdown1.classList.contains('show')) {
       myDropdown1.classList.remove('show');
     }
   }
 }
 
 window.onclick = function(e) {
   if (!e.target.matches('.dropbtn2')) {
   var myDropdown2 = document.getElementById("myDropdown2");
     if (myDropdown2.classList.contains('show')) {
       myDropdown2.classList.remove('show');
     }
   }
 }
 
 window.onclick = function(e) {
   if (!e.target.matches('.dropbtn3')) {
   var myDropdown3 = document.getElementById("myDropdown3");
     if (myDropdown3.classList.contains('show')) {
       myDropdown3.classList.remove('show');
     }
   }
 }