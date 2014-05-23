/**
 * @method Walcart.userView 
 * @description implementação da Backbone view para controlar a aparencia da aplicação Walcart e suas três telas: Dados Pessoais, Endereco e Carrinho
 */

Walcart.user = new Walcart.GetUser();

Walcart.DadosPessoais = Backbone.View.extend({
	  init: function(){
        this.render();
		this.events();
		},
	  render: function(){
		user = Walcart.user;
		user.fetch({		  
			success: function(user){
			  $('#user-data').makeTemplate({user: user, template: 'template-dados.ejs', param: 'dados'});
			}	  
				});
		},
		events: function(){
			$('#nav-user li[data-page="dados"]').addClass('active').siblings().removeClass('active');
			}

});