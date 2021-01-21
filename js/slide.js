$(window).on('load',function(){
	var index = $('div.img-content').length;
	var cont = 0;
	var icons_slide = $('div.icons-slide');
	var delay = 3000;
	var tempo;
	iniciarSlide();
	function iniciarSlide(){
		for (var i = 0; i< index; i++){
			icons_slide.append('<div class="bottons-slide"></div>');
		}
		time(delay,false);			
	}
	function time(time,reset){
		if(reset){
			clearInterval(tempo);
		}
		tempo = setInterval(function(){
			passarSlide();				
		},time)
	}
	$('div.bottons-slide').on('click',function(){
		$('div.img-content').eq(cont).stop().fadeOut();
		$('div.img-content').eq($(this).index()).stop().fadeIn();
		$('div.bottons-slide').eq(cont).css('background-color','#23447a');
		$(this).css('background-color','#2692d1');
		cont=$(this).index();
		time(delay,true);

	})
	function passarSlide(){		
		$('div.img-content').eq(cont).stop().fadeOut();
		$('div.bottons-slide').eq(cont).css('background-color','#23447a');		
		cont++;
		if(cont==index){
			cont=0;
		}
		$('div.img-content').eq(cont).stop().fadeIn();
		$('div.bottons-slide').eq(cont).css('background-color','#2692d1');
	}
})	