
//Задача 4. Используя глобальную переменную напишите функцию, 
//которая будет подсчитывать количество нажатий на кнопки. Кнопок – две, реализуйте их в HTML.

//код рабочий, все должно работать при разкомментировании

// var globalNum = 0;

// document.getElementById('button1').onclick = out;
// document.getElementById('button2').onclick = out; 



// function out() {
// 	globalNum++;
// 	console.log (globalNum);
// 	var result = document.getElementById('getOut');
// 	result.innerHTML = globalNum;
// }



//Задача 5. Создайте функцию, которая получает два параметра – число и степень числа. 
//Используя Math.Pow внутри функции, возведите число в степень и выведите с помощью alert.


// спасибо, теперь работает :)


document.getElementById('res').onclick = Result;


function Result(){

var chislo = parseInt(document.getElementById('p_chislo').value);
var stepen = parseInt(document.getElementById('p_stepen').value); 
 	
	var a = Math.pow(chislo, stepen); 
 	console.log(a);
 	var result2 = document.getElementById('getOut2');
 	result2.innerHTML = a;

}