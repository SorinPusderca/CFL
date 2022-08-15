

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
 
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

var toggleStatus= 1;

function toggleMenu(){
  if(toggleStatus == 1){
    document.getElementById("menu").style.left= "-240px"; 
    toggleStatus = 0;
  } else if (toggleStatus == 0){
    document.getElementById("menu").style.left= "0px"; 
    toggleStatus=1; 
  }
}
