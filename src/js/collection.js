/**
 * @method Walcart.getUser 
 * @description Collection do Backbone que recupera os dados do usuario a serem exibidos. Esses dados estão armazenados num arquivo JSON.
 */
(function(){

  Walcart.GetUser = Backbone.Collection.extend({
	url: 'request/usuario.json'
  });

})($);