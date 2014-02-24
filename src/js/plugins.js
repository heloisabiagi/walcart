/**
 * @method Plugin makeTemplate 
 * @description chama um template .ejs e renderiza seus dados no elemento desejado
 * @params 'user': a Collection do usuario em questão, 'template': a URL do template e 'param': o parâmetro do JSON a ser inicializado
 * @return this (o objeto ao qual o plugin é aplicado)
 */
$.fn.makeTemplate = function(options) {
	
	 params = jQuery.extend({ user : '', template : 'dados.ejs', param: 'dados' }, options);
	 
     return this.each(function(){
		user = params.user;
		dados = user.models[0].attributes[params.param];
	    html = new EJS({url: 'templates/' + params.template}).render(dados);
	    $(this).html(html);					   
	});
};