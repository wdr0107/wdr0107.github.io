function change(){
document.getElementById('one').innerHTML = 'I am invincible';
}
function picture(){
 document.getElementById('two').src ='https://i.pinimg.com/originals/23/98/97/239897f8cc8897f25261083d797dd9e5.png';
}
function para(){
 var css = document.getElementById('three').style;
 css.backgroundColor ='blue';
 css.fontFamily ='arial';
 css.textAlign ='center'
}
alert(Date())

function sum(){
 var a = prompt('first name:');
 var b = prompt('second name:');
 var c = ('Nice to meet you ')
 document.getElementById('five').innerHTML=c+a+b;
}

function sum1(){
 var a = parseFloat(prompt('first number:'));
 var b = parseFloat(prompt('second number:'));
 document.getElementById('six').innerHTML=a+b;
}

function c(){
 alert('hello')
}
function q6more(f){
 return (5/9) * (f-32);
}
function q6(){
 document.getElementById('q6').innerHTML = q6more(20);
}