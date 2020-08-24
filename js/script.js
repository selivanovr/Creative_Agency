//?WEBPSUPPORT
function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
   callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   
   testWebP(function (support) {
   
   if (support == true) {
   document.querySelector('body').classList.add('webp');
   }else{
   document.querySelector('body').classList.add('no-webp');
   }
   });
//?IMAGE BACKGROUND
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
//?BURGER
// Бургер меню
$('.burger').click(function(event) {
	$('.burger__button').toggleClass('active');
	$('.header__menu').toggleClass('active');
	if($(this).hasClass('active')){
		$('body').data('scroll',$(window).scrollTop());
	}
		$('body').toggleClass('lock');
	if(!$(this).hasClass('active')){
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});
// Клик вне области
$(document).on('click touchstart',function(e) {
	if (!$(e.target).is(".header__row *")) {
		$('.header__menu').removeClass('active');
		$('.burger__button').removeClass('active');
		$('body').removeClass('lock')
	};
});


//?TABS
// $('body').on('click','.tabs__btn',function(event) {
// 	var eq=$(this).index();
// if($(this).hasClass('parent')){
// 	var eq=$(this).parent().index();
// }
// if(!$(this).hasClass('active')){
// 		$(this).closest('.tabs').find('.tabs__btn').removeClass('active');
// 		$(this).addClass('active');
// 		$(this).closest('.tabs').find('.tabs__item').removeClass('active').eq(eq).addClass('active');
// 	// if($(this).closest('.tabs').find('.slider').length>0){
// 	// 	$(this).closest('.tabs').find('.slider').slick('refresh', 0);
// 	// }
// }
// });
$('body').on('click','.tabs__btn',function() {
// $('.tabs__btn').on('click' , function() {
	var tabName = $(this).data('tab'),
		tab = $('.tabs__item[data-tab="'+tabName+'"]');

	$('.tabs__btn.active').removeClass('active');
	$(this).addClass('active');


	$('.tabs__item.active').removeClass('active');

	tab.addClass('active');
})
