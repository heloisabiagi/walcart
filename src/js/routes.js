(function(){

/**
 * @method Walcart.userRoutes 
 * @description define as URLS do projeto e seus callbacks
 */

Walcart.UserRoutes = Backbone.Router.extend({
	routes: {
		"": "carrinho",
		"dados": "dadosUsuario",
		"enderecos": "enderecos",
		"carrinho": "carrinho",
		}
});

/**
 * @method Walcart.userRouter 
 * @description define as views que serão exibidas em cada URL
 */

Walcart.userRouter = new Walcart.UserRoutes();
Walcart.view = new Walcart.UserView();

Walcart.userRouter.on({
	'route:dadosUsuario': function() {
		Walcart.view.dadosPessoais.init();
	  },
	'route:enderecos': function() {
		Walcart.view.endereco.init();
	  },
	'route:carrinho': function() {
		Walcart.view.carrinho.init();
	  },   
	  
  });
})($);

/**
 * @method Backbone.history 
 * @description ativa o histórico do navegador para as URLs do projeto
 */

Backbone.history.start();
