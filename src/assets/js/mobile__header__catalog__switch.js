const burger = document.getElementById('navToggle');
const navList = document.getElementById('mobile__header__catalog');
const body = document.body;
console.log(navList)
/*const subnav = document.querySelectorAll('.subnav');
const nestedSubnav = document.querySelectorAll('.nested__subnav');

const subnavSwitch = document.querySelectorAll('.subnav__switch');
const navSwitch = document.querySelectorAll('.nav__switch');*/


burger.addEventListener('click', event =>{

	if( navList.classList.contains('show-navList')){
		closeSidebar();
			closeNav(subnav, 'show-subnav');
	closeNav(nestedSubnav, 'show-nesed__subnav');

	closeNav(navSwitch, 'btm-nav');
	closeNav(subnavSwitch, 'btm-nav');
	}	else{
		showSidebar();
	}	
});

function showSidebar(){
	
	let mask = document.createElement('div');
	mask.classList.add('page__mask');
	mask.addEventListener('click', closeSidebar);
	body.appendChild(mask);
	navList.classList.add('show-navList');
	body.classList.add('no-scroll');
}

function closeSidebar(){
	navList.classList.remove('show-navList');
	document.querySelector('.page__mask').remove();
	body.classList.remove('no-scroll');


}



function closeNav(itemListS, delClass){
	itemListS.forEach(item=>{
		if (item.classList.contains(delClass)) {
			item.classList.remove(delClass)
		}
    		
	})
}


