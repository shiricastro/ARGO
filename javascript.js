
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
		}

	});	
}

