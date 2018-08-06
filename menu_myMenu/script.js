const menuHarm = document.getElementsByClassName('menu-harm')[0],
			menu = document.getElementsByClassName('menu')[0],
			menuItems = document.getElementsByClassName('menu-item');

// меняем стили списку

menu.style.listStyle = 'none';
menu.style.width = '200px';
menu.style.marginTop = '200px';
menu.style.color = '#fff';
menu.style.position = 'relative';
menu.style.padding = '0';

// задаем стиль кнопке
menuHarm.style.position = 'absolute';
menuHarm.style.display = 'none';
menuHarm.style.left = '0';
menuHarm.style.top = '0';
menuHarm.style.zIndex = '1000';
menuHarm.style.fontWeight = '800';
menuHarm.style.fontSize = '20px;'

// задаем стиль элементам
for(let i=0;i<menuItems.length;i++){
	menuItems[i].style.marginTop = '1px';
	menuItems[i].style.backgroundColor = '#444';
	menuItems[i].style.textAlign = 'center';
}
let menuWidth = menu.offsetWidth;
console.log(menuWidth);
let turn = false;

if(window.innerWidth < 700){
	menuHarm.style.display = 'block';
	menuHarm.addEventListener('click', function(){
		toggle();
	});
}
 else{
	 menuHarm.style.display = 'none';
	
 }

function listStyleActive(){
	menu.style.left = '-'+ menuWidth + 'px';
	menu.style.position = 'absolute';
	menu.style.transition = 'ease-in-out .2s';
}

function listStyleDisable(){
	menu.style.left = '0';
	menu.style.position = 'absolute';
	menu.style.transition = 'ease-in-out .2s';
}

function toggle(){
	turn = !turn;
	if(turn){
		listStyleActive();
	}
	else{
		listStyleDisable();
	}
}

