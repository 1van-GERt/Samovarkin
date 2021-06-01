const footerSwitch = document.querySelectorAll('.footer__switch');
const footerList = document.querySelectorAll('.footer__list');


footerSwitch.forEach(item=>{
	item.addEventListener('click', event=>{
		let $this = event.currentTarget;	
		let childs = $this.parentNode.children;
		let div;
		for(const el of childs) { 
    		if (el.classList.contains('footer__list')) {
    			div = el 
    		};
    	};

	creatClass(div, $this)
	})
})

function creatClass(div,$this){

	if(div.classList.contains('footer__list--swow')) {				
			clearClass();
	}	else{
			clearClass()
			$this.classList.add('btm-nav')
			div.classList.add('footer__list--swow');
	}
}

function clearClass(){
	footerList.forEach(item=>{
		item.classList.remove('footer__list--swow');
	})
	footerSwitch.forEach(item=>{
		item.classList.remove('btm-nav');
	})
}
