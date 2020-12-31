
  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
  }
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show1");
  }
  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show1");
  }
  function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show1");
  }
  function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show1");
  }
  function myFunction6() {
    document.getElementById("myDropdown6").classList.toggle("show1");
  }
  function myFunction7() {
    document.getElementById("myDropdown7").classList.toggle("show1");
  }
  function myFunction8() {
     document.getElementById("myDropdown8").classList.toggle("show1");
   }
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn1')) {
    var myDropdown = document.getElementById("myDropdown1");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }


