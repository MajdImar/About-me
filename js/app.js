'use strict'
var score = 0;
var name1 = prompt("What is your name?");

alert(`Hello,Salut in all languages welcome to My webpage ${name1}`);

function q1(){


var q1 = prompt("Do you think I belive in Alien?").toLowerCase();
if (q1 === 'yes' || q1 === 'y') {
 
   score = score + 1;
   alert('oui you are correct');
} else if (q1 === 'no' || q1 === 'n') {

   alert('Non I am sorry');
}
else {
   alert('oh!try to put yes/y or no/n');
}
}

q1();

function q2(){
var q2 = prompt("Do you think that I like Mansef").toLowerCase();
if (q2 === 'yes' || q2 === 'y') {

   alert('oui you are correct'); score = score + 1;
}
else if (q2 === 'no' || q2 === 'n') {
  
   alert('Non I am sorry')
}
else {
   alert('oh!try to put yes/y or no/n');
}
}

q2();


function q3(){


var q3 = prompt("Do you think that I can speak French?").toLowerCase();
if (q3 === 'yes' || q3 === 'y') {
 
   score = score + 1;
   alert('oui you are correct');
}

else if (q3 === 'no' || q3 === 'n') {
  
   alert('Non I am sorry');
} else {
   alert('oh!try to put yes/y or no/n');
}

}

q3();

function q4(){


var q4 = prompt("Do you think that I play Piano").toLowerCase();
if (q4 === 'yes' || q4 === 'y') {
 

   alert('Non I am sorry');
} else if (q4 === 'no' || q4 === 'n') {

   alert('oui you are correct');
   score = score + 1;
}
else {
   alert('oh!try to put yes/y or no/n');
}
}

q4();

function q5(){


var q5 = prompt("Do you think that I travel a lot?").toLowerCase();

if (q5 === 'yes' || q5 === 'y') {

   alert('Non I am sorry');
}
else if (q5 === 'no' || q5 === 'n') {
 
   alert('oui you are correct');
   score = score + 1;
}
else {
   alert('oh!try to put yes/y or no/n');
}

}

q5();

function q6(){


var i = 0;
var num = 5;
var q6 = prompt("can you guess the month which I born in?");
for (i = 0; i < 4; i++) {

   if (q6 == num) {
      alert('oui you are correct');
      score = score + 1;
      break;

   }
   else if(i==3){
break;
   }
   else if (q6 > 5 && q6 < 12) {
      alert('oh no it is less than this ');

      var q6 = prompt("can you guess the month which I born in?"+"you can tyr agin for: "+(3-i));
   }
   else {
      alert('oh no it is larger than this  ');
      var q6 = prompt("can you guess the month which I born in? "+"you can tyr agin for: "+(3-i));
   }

}
}
q6();


function q7(){


var arr = ['red', 'blue', 'black', 'violet', 'pink', 'brown', 'yellow', 'green', 'white'];
var q7 = prompt("can you guess what is  my favorite color ? ")

for (var x = 0; x < 6; x++){
   for (var y = 0; y < arr.length; y++){
    if(q7==arr[y]){
     
       alert('oui you are correct');
       score =score+1 ;
       var exam ="y" ;
       break ;

    }

   }

if (exam == "y"){
   break;
}
if(x==5){
   break;
}
q7 = prompt("can you guess what is  my favorite color ? "+" It i swrong you can try agin for: "+(5-x) );
}

}
q7();
alert('Thank you for trying this gussing game' + name1 + 'your score is :' + score + 'The month I was  born in is: 5' + 'My favorite color is:red' );