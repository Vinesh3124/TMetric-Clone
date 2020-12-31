function Invoices_Function1() {
    document.getElementById("Invoices_Dropdown1").classList.toggle("Invoices_show1");
  }
  function Invoices_Function2() {
    document.getElementById("Invoices_Dropdown2").classList.toggle("Invoices_show1");
  }
  
  window.onclick = function(e) {
    if (!e.target.matches('.Invoices_dropbtn1')) {
    var myDropdown = document.getElementById("Invoices_Dropdown1");
      if (myDropdown.classList.contains('Invoices_show1')) {
        myDropdown.classList.remove('Invoices_show1');
      }
    }
  }






