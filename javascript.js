

// // VARIABILE   var, let, const

// var myName = "Sorin";
// let secondName = "Taz";
// const age = 30;


// let boolean=true;

// let n=null;
// let und=undefined;
// let nr=123;
// let str='acesta este un string';

// console.log(str);
// console.log(typeof(nr));
// console.log(typeof(n));
// console.log(typeof(und));
// console.log(typeof(str));


// // OBIECT

// let dog1 = {
//     age:3,
//     name: "Taz"
// }
// console.log(dog1)


// let dog2={
//     age : 13,
//     name:"Nero"
// }

// console.log(dog2);


// // ARRAY

// const hobbies=["reading","cycling", "gym" ];
// const prices=[10, 12.3, 50, 100];

// console.log(hobbies);
// console.log(prices);
// console.log();

// const price=prices[3];
// console.log(price);

// const gym=hobbies[2];
// const reading=hobbies[0];
// console.log(gym);
// console.log(reading);

// const dogs=[dog1, dog2];
// console.log(dogs);

// const dogz=[{ id:1, breed:'American Bully'}, {id:2, breed:'Prahova Sheep dog'} ]

// console.log(dogz);

// var nume = "Taz";
// var prenume = "Bully";
// console.log(nume + prenume);


// console.log(nume.indexOf());
// console.log(nume.length);



// var nume = " Sorin"
// console.log(nume);
// console.log("salut numele meu este" + nume);


// var proba = " Marti, compania care a devenit primul Unicorn românesc, a vândut acțiuni la prețul de 56 de dolari pe unitate, preț care este peste valoarea de 52-54 de dolari propusă pentru oferta publică inițială. La cea mai recentă rundă de investiții, din 1 februarie, compania era evaluată la 35 de miliarde de dolari, iar cotația actuală aste de 62,28 dolari pe acțiune, cu peste 6 dolari mai mult față de prețul cu care a vândut UiPath acțiuni."
// var Unicorn = "Unicorn";

// console.log(proba.indexOf("Unicorn"));
// console.log(proba.indexOf("Marti"));
// console.log(proba.length);
// console.log(proba.substring(39, 46));

// var proba = " Marti, compania care a devenit primul Unicorn românesc, a vândut acțiuni la prețul de 56 de dolari pe unitate, preț care este peste valoarea de 52-54 de dolari propusă pentru oferta publică inițială. La cea mai recentă rundă de investiții, din 1 februarie, compania era evaluată la 35 de miliarde de dolari, iar cotația actuală aste de 62,28 dolari pe acțiune, cu peste 6 dolari mai mult față de prețul cu care a vândut UiPath acțiuni."
// var lung = proba.length;
// var virgula = proba.indexOf(",");
// var Unicorn = proba.substring(proba.includes("Unicorn"), proba.indexOf("Unicorn") + 7)

// console.log("lungimea:" + lung);
// console.log("virgula:" + virgula);
// console.log("Unicorn");


// let hour=20;

// if (hour >=6 && hour < 12) 
// console.log('good morning');

// else if( hour >= 12 && hour < 18);
// console.log('good afternoon');

//  console.log('good day'); 
    


// function myFunction(a, b){
//     var result = 1 + 2;
//     return result;
//   }
//   console.log(myFunction)

//   var x = function(a){
//     return a * 5;
// }
//     console.log(x);
  
  

// const dog = function(name, out){
//       console.log( `am un caine ${name} si sta ${out}` );
// };
// dog('Taz', 'afara');


// const nero= function(myName='Nero', myOut='afara'){
// console.log(`am un caine ${myName} si sta ${myOut}`);
// };
// nero();


// const tool =function(band){
//   console.log(`this band is ${band}`);
// };
// tool('Tool');

// const myBand=function(myBand='Mastodon', mySong='Blood and Thunder' ){
//   console.log(`this is ${myBand} with the song ${mySong}`);
// };
// myBand();

// const dark = function(car) {
//   console.log(`this is a ${car}`);
//  }
//  car('volvo');





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




// const regEx00=/07[0-9]{2}[0-9\-\s\.]{3,5}[0-9]{3}/g;
// const str="valid numbers 078556645478, 446695445464, 545454545654";
// console.log(regEx00.test(str));
// console.log(str.match(regEx00));



// const regEx17 =/07[0-9]{2}[0-9\-\s\.]{3,5}[0-9]{3}/g;
// const str17 = "Am 3 numere de telefon: 0734654845, 0754 185 169, 0745-654-812 0745.654.785"
// console.log(regEx17.test(str17));
// console.log(str17.match(regEx17));



