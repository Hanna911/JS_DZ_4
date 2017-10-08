// Задача 10. Пользователь вводит числа. Если число больше 10, 
// то функция возвращает квадрат числа, если меньше 7 – пишет, что число меньше 7. 
// Если 8, 9 – то возвращает соответственно 7 или 8. 
// Реализуйте решение с несколькими return.


function getValue(){

	var a = document.getElementById('input_form').value;
	

	if (a > 10) {
		console.log(a*a);
	    return a*a;
	 }
	else if(a == undefined) {
	   console.log('try again');}
	else if(a<7) {
	   return console.log('число меньше 7');}
		  
	else if(a == 8) {
		console.log(7);
		return 7;}

	else if(a == 9) {
		console.log(8);
	    return 8;}

}


var b = getValue();
console.log('it is ' + b);



