var mobileMenuBotton = document.querySelector('#mobile-nav-button');
var body = document.querySelector('body');
var navLinks = document.querySelectorAll('nav a')

mobileMenuBotton.addEventListener('click',function(){
	body.classList.toggle('showMenu')
});

Array.from(navLinks).forEach( function( link ) {

	link.addEventListener('click', function(){
		body.classList.remove('showMenu')
	});
});

// popup after registering successfully
var popupButton = document.querySelector('.popup .btn')
popupButton.addEventListener('click',function(event){
	event.target.parentNode.classList.add('hide')
});

if(/\?success=true$/.test(window.location.href)){
	popupButton.parentNode.classList.remove('hide')
}

var individualSwitch = document.querySelector('#submission_type_individual');
var groupSwitch = document.querySelector('#submission_type_group');
var groupInfo = document.querySelector('#group-info');


individualSwitch.addEventListener('click', function(event){
  groupInfo.style.height = '0';
});

groupSwitch.addEventListener('click', function(event){
  groupInfo.style.height = 'auto';
});