$(window).on('load',function(){
	var iconMenu = $('div.icon-menu i');
	var liD = $('nav.desktop ul').parent('li');
	var liM = $('nav.mobile li')
	var body = $('body');
	var iconPesquisa = $('div.icon-pesquisa i');
	var formP = $('div.pesquisa form');
	//ativar menu mobile
	$(iconMenu).on('click',function(e){	
		e.stopPropagation();
		fechar(iconMenu);
		$('nav.mobile').parent().find('ul:not(.sub)').toggleClass('offset');		
	});	
	//ativar sub menu desktop
	$(liD).on('click',function(){
		$(this).find('ul').slideToggle();
		$(this).toggleClass('active');
		fechar(liD,this);		
		return false;
	})	
	//ativar sub menu mobile
	$(liM).on('click',function(){
		$(this).find('ul').slideToggle();
		fechar(liM);		
		return false;
	})
	//desativar propagação do submenu
	$('ul.sub li').on('click',function(e){
		e.stopPropagation();
		return false;
	})
	//Abrir pesquisa
	$(iconPesquisa).on('click',function(e){
		e.stopPropagation();
		fechar(iconPesquisa);
		$('div.pesquisa').find('form').slideToggle();
	})
	$(formP).on('click',function(e){
		e.stopPropagation();
	})
	//tirar fechar menu ao da scroll no menu mobile
	$('nav.mobile ul').click(function(e){
		e.stopPropagation();		
	}) 
	//fechar menu clicando no body
	$(body).on('click',function(){
		fechar(body);		
	})
	//função para fechar os demais elementos
	function fechar(chamada,elemento){
		if(chamada == iconMenu){
			$('nav li').parent().find('ul').fadeOut();
			$(liD).removeClass('active');			
			$('div.pesquisa').find('form').fadeOut();
		}
		if(chamada == liD){
			$(elemento).siblings().find('ul').fadeOut();
			$('div.pesquisa').find('form').fadeOut();
			$(elemento).siblings('.active').removeClass('active');
			//$('.desktop ul li ul').find('li').removeClass('active');
		}	
		if(chamada == liM){
			$('div.pesquisa').find('form').fadeOut();
			$(liD).removeClass('active');
		}		
		if(chamada == iconPesquisa){
			$('nav.mobile ul').removeClass('offset');
			$('nav li').parent().find('ul').fadeOut();
			$(liD).removeClass('active');
		}
		if(chamada == body){
				$('nav.mobile ul').removeClass('offset');
				$('nav li').parent().find('ul').fadeOut();
				$('div.pesquisa').find('form').fadeOut();
				$(liD).removeClass('active');
		}		
	}	
})	