
$(window).on('load',function(){
	$('input[name=telefone]').mask('(99)99999-9999');
	$('form').submit(function(){
		var email = $('form input[name=email]').val();
		var telefone = $('form input[name=telefone]').val();
		console.log(telefone)
		var nome = $('form input[name=nome]').val();
		var textarea = $('form textarea').val();		
		
		if(((validarNome(nome)) && validarEmail(email)) && (validarTelefone(telefone)) 
			&&  (validarMenssagem(textarea))){
			alert('Enviado com sucesso!');
			return true;
		} else return false;			
	})
		
	function validarEmail(email){
		var verifica = email.match(/^(.*?)(@)(.*?)$/);
		if(email == '' ){
			alert('Por favor digite seu E-mail');			
			return false;			
		} if (verifica == null){
			alert('E-mail inválido!!! Tente Novamente');
			return false;
		}
		else if((verifica[1] != '') && (verifica[2]== '@') && (verifica[3] != '')){ 
			return true;
		}else{
			alert('E-mail inválido!!! Tente Novamente');
			return false;
		}
		return false;
	}
	 function validarTelefone(telefone){
	 	if(telefone == ''){
	 		alert('Digite seu Telefone!');
	 		return false;
	 	}else return true;
	 }
	 function validarNome(nome){
	 	if(nome == ''){
	 		alert('Digite seu nome!');
	 		return false;
	 	}else return true;
	 }
	 function validarMenssagem(textarea){
			if(textarea == ''){
	 		alert('Digite uma mensagem!');
	 		return false;
	 	}else return true;
	 }
});
