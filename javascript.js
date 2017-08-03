
/***Suits Nav***/
$('.selectGallery').on('click',function(e){
	$('.suitsSelect').toggleClass('activSelect');
});
$('.suitsSelect').on('click',function(e){
	$('.suitsSelect').toggleClass('activSelect');
	var data = $(e.target).attr('data-name');
	showContant(data);
});
/***Home page***/
showContant("home");
/*** Navs ***/
$("nav li button:not('.selectGallery')").on('click',function(e){
	var data = $(e.target).attr('data-name');
	showContant(data);	
});

/***home page buttons***/

function homeGallery(){
	$('.aboutButtonImg').on('click',function(e){
		var data = $(e.currentTarget).attr('data-name');
		showContant(data);	
			
	});	
}

/***ajax***/
function showContant(name){
	$('.container').css({"display":"none"});
	$('.container').html();	
	$('.container').fadeIn(1000);
	$.get(''+ name+ ".html"+'',function(data){
		$('.container').html(data);				
		if (name === 'home'){
			homeGallery();
		}else if(name === 'newCollection' || name === 'argoSuits' || name === 'shoes'){
			slideImg();
		}

	});	
}
/***add slide***/
var slideIndex = 1;
function slideImg(){
	var imgArray = $('.item img');
	imgArray.on('click',function(e){
		gallerySlide(e.target,imgArray);
	});
	var imgShoes = $('.shoesContainer img');
	imgShoes.on('click',function(e){
		gallerySlide(e.target,imgShoes);
	});
}

/***slide popup ***/
function gallerySlide(img,imgArray){
	var slideContiner = $('<div>',{
		id:"popSlide",
		click:function(e){
			if(e.target.id === "popSlide"){
				this.remove();
			}
		}
	}).appendTo('body');
	var content = $('<div>',{
		id:"popContainer"
	}).appendTo(slideContiner);
	var imgCont = $('<div>',{
		id:"imgCont"
	}).appendTo(content);

	imgArray.each(function(i,el){
		if ($(el).attr('src') === $(img).attr('src')){
			slideIndex = i + 1;
		}
		$('<img>',{
			class:"imgs",
			src:$(el).attr('src')
		}).appendTo(imgCont);
	});

	$('<button>',{
		id:"leftButton",
		text:"<",
		click:function(e){
			 e.preventDefault();
			plusDivs(-1); 
		}
	}).appendTo(content);
	$('<button>',{
		id:"rightButton",
		text:">",
		click:function(e){
			 e.preventDefault();
			plusDivs(1); 
		}
	}).appendTo(content);
	$('<button>',{
	id:"deletButton",
	text:"X",
	click:function(e){
		 e.preventDefault();
		$('#popSlide').remove(); 
	}
	}).appendTo(content);


	showDivs(slideIndex);	
	function plusDivs(n) {
		slideIndex = slideIndex + n;
	  	showDivs(slideIndex);
	}

	function showDivs(n) {
	  var imgs = $('.imgs');
	  if (n > imgs.length) {slideIndex = 1}    
	  if (n < 1) {slideIndex = imgs.length}
	  	imgs.each(function(i,el){
	  		$(el).css({display:"none"});
	  	});

	  $(imgs[slideIndex-1]).css({display:"block"});  
	}	

}
$('body').keydown(function (e) {
    if (e.keyCode === 27) {
        $('#popSlide').remove();
    }
});


