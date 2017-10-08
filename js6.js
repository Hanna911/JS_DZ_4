// Задача 11. Напишите игру «Угадай число». 
// При загрузке страницы генерируется случайное число от 0 до 10. 
// Пользователю дается три попытки угадать число (число вводиться в input). 
// При каждой проверке выдается подсказка: больше или меньше. 
// При угадывании, завершении числа попыток выдается оповещение. 
// Количество попыток выводиться на экран.


var chisloComp;
chisloComp = Math.floor((Math.random() * 10) + 1);

console.log(chisloComp);


function game(){
	var chislo, out;

	chislo = document.getElementById('chislo_p').value;
	out = document.getElementById('out');

	if (chislo == chisloComp) {
		out.innerHTML = 'Вы угадали';
	}
	else if (chislo > chisloComp){
		out.innerHTML = 'Вы ввели число больше чем нужно';
	}
	else {
		out.innerHTML = 'Вы ввели число меньше чем нужно';
	}

}