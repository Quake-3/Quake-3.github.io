
	//CHECKBOX

document.getElementById('check1').onchange = function changer(){
var checkBox = document.getElementById('check1');
if(checkBox.checked){
	console.log("The button was checked!");
}else{console.log("The button was not checked");};
};

	//RADIO-BUTTONS

document.getElementById('checker').onclick = function changerRadio(){
	var radioBut = document.getElementsByClassName('radio');
	for (var i = 0; i < radioBut.length; i++) {
		if(radioBut[i].checked){
			console.log('The ' + (i+1) + ' radio was checked!');
		}
	}
}

	//SELECT

document.getElementById('mySelect').onchange = function List(){
var select = document.getElementById('mySelect').selectedIndex;
var options = document.getElementById('mySelect').options;
console.log('Выбран элемент: ' + options[select].text);
}

	//RANGE

document.getElementById('ran').oninput = function rangeChanger(){
	var rng = document.getElementById('ran');
	var p = document.getElementById('out');
	p.innerHTML=rng.value;
}

	//DROP-DOWN-MENU

document.getElementById('nav').onclick = function openMenu(event) {
	var target = event.target;
	if(target.className == 'menu-item'){
		var s = target.getElementsByClassName('submenu');
		closeMenu();
		s[0].style.display = 'flex';
	};
}

document.onclick = function (event){
	var target = event.target;
	if (target.className != 'menu-item' && target.className != 'submenuli') {closeMenu();}
}

function closeMenu() {
	var menu = document.getElementById('nav');
	var subm = document.getElementsByClassName('submenu');
	for (var i = 0; i < subm.length; i++) {
		subm[i].style.display = "none";
	}
}

// var list = document.getElementById('nav');
// var box = list.getBoundingClientRect();

// var avatarTop = list.offsetHeight + box.top;

// document.onscroll = function() {
// 	var scrolled = window.pageYOffset;

// 	if (scrolled > avatarTop) {
// 	list.style.position = 'fixed';
// 	list.style.top = '15px';;
// 	} else {
// 	list.style.position = 'static';
// 	}
// }

	//СЧЕТЧИК ИЗ 2 ЧИСЕЛ, КОТОРЫЙ ВЫВОДИТ ИХ СУММУ И ПРОИЗВЕДЕНИЕ

	// var calculator = {
	// 	read: function (){
	// 		this.a = +prompt('a');this.b = +prompt('b');
	// 	},
	// 	sum: function(){
	// 		return this.a + this.b;
	// 	},
	// 	mul: function(){
	// 		return this.a * this.b;
	// 	}
	// }
	//
	// calculator.read();
	// alert(calculator.sum());
	// alert(calculator.mul());

	//СЧЕТЧИК ЧЕТНЫХ ЧИСЕЛ

// for (var i = 2; i < 100; i += 2) {
// 	console.log(i);
// }
	//счетчик среднего арифметического
// var a = [1, 2, 3, 7, 6, 9];
// var sum = 0;
// for (var i = 0; i < a.length; i++) {
// 	sum += arr[i];
// }
// var res = sum / a.length;
// console.log(res);

	//СЧЕТЧИК ПО НАЖАТИЮ НА КНОПКИ

var outNum = document.getElementById('num');

var add = function (event){
	return outNum.value++;
};

var del = function (event){
	 if(outNum.value>0){return outNum.value--};
};
