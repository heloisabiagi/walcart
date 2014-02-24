/**
 * @method Walcart.userView 
 * @description implementação da Backbone view para controlar a aparencia da aplicação Walcart e suas três telas: Dados Pessoais, Endereco e Carrinho
 */
 
(function(){

Walcart.user = new Walcart.GetUser();

Walcart.UserView = Backbone.View.extend({
	dadosPessoais: {	
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
	},
	endereco: {	
	  init: function(){
        this.render();
		this.events();
		},
	  render: function(){
		user = Walcart.user;  
		user.fetch({
			success: function(user){ 	
			  $('#user-data').makeTemplate({user: user, template: 'template-endereco.ejs', param: 'data_enderecos'}); 
			  }			  
					  });
		},
	  events: function(){
		 $('#nav-user li[data-page="enderecos"]').addClass('active').siblings().removeClass('active'); 
		  }
	},
	carrinho: {	
	  init: function(){
        this.render();
		this.events();
		},
	  render: function(){
		user = Walcart.user;
		user.fetch({
			success: function(user){ 
			  $('#user-data').makeTemplate({user: user, template: 'template-carrinho.ejs', param: 'data_carrinho'});
			  
			  _subtotal = 0;
			  $('.td-preco').each(function(){
					_valor = Number($(this).html().replace('.','').replace(',','.'));
					_subtotal = _subtotal + _valor;
				});
			  _subtotal = _subtotal.toFixed(2).toString();
			  $('.td-subtotal').html(_subtotal.replace('.',','));
			 
			}			  
					  });
		},
	   events: function(){
		 $('#nav-user li[data-page="carrinho"]').addClass('active').siblings().removeClass('active'); 
		  }
	}
});

})($);