// Задание номер 1
//продемонстрировать несколько способов создания объектов и несколько способов доступа к ним.

//--- Создание при помощи Литералов объекта----
callname = {
	simple_property: 'Full name of my friend from university is ',

	object_property: {
	fullname: 'Vova Yakimovich'
	},

	function_calls_name: function(name) {
		alert(this.simple_property + this.object_property[name]);// Используется Скобочная нотация для вызова имени
	}
}
callname.function_calls_name('fullname');//вызов метода объекта. Доступ к данным через вызов метода. Используется точечная нотация


//--- Создание при помощи контсруктора ---
function2 = function(Name){
	this.name= Name;
	this.method= function(){ alert(this.name);}
}
variable = new function2('Vova');//вызов метода. Запись через ключевое слово NEW

variable.method();//вызов метода объекта. Доступ к данным через вызов метода



//--- Задание 2. Создать конструктор для своего объекта и добавить пару методов и свойств. Продемонстрировать работу. ---
function_calls_info = function(){
	this.name= 'Vovan';
	this.stat= 4.0;
	this.grade= 'middle';

	this.first = function functionOne(){
		alert('his name - '+this.name +', his grade - '+ this.grade);
	}
	this.second = function functionTwo(){
		console.log(`His grades in uni rarely  ${this.stat}`);
	}
}
variabeleee =new function_calls_info();

variabeleee.first();
variabeleee.second();

//--- задание 3. Расширить встроенный тип функцией, которая манипулирует результатами. Получить время со дня рождения или вывести среднее арифметическое---
Date.prototype.calculateTimeSinceBirth = function(birthDate) {
	const currentDate = this;
	const diff = currentDate - birthDate;

	const milliseconds = diff;
	const seconds = Math.floor(milliseconds / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);

	return {days,hours: hours % 24,minutes: minutes % 60,seconds: seconds % 60,milliseconds: milliseconds % 1000};
};

const birthDate = new Date('1999-12-16'); 
const currentDate = new Date();

const timeDuration = currentDate.calculateTimeSinceBirth(birthDate);
console.log(`Time since my birth: ${timeDuration.days} days, ${timeDuration.hours} hours, ${timeDuration.minutes} minutes, ${timeDuration.seconds} seconds`);
