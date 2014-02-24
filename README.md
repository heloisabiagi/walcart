Walcart
=======

O Walcart é uma app que simula a visualização dos dados de conta de um usuário de um e-commerce. A aplicação faz uso de 4 tecnologias front-end para sua estruturação e desenvolvimento: **Backbone.js**, **Less.js**, **Grunt.js** e templates **EJS**. A seguir, as formas como essas tecnologias foram empregadas:

Backbone.js
-----------

O Backbone.js é um framework de desenvolvimento web utilizado para melhorar a estrutura das aplicações. Nessa aplicação, as features do Backbone.js foram utilizadas da seguinte forma:

+ **Collections**: para exibir e armazenar os dados do usuário em questão, foi criada uma collection que pega os dados do usuário de um arquivo JSON.
+ **Routes**: routes foram utilizadas para determinar as URLs da aplicação
+ **Views**: as views foram utilizadas para determinar a renderização de página a ser empregada de acordo com a URL

LESS.js
-------

O LESS.js é um preprocessador de CSS que lhe permite adotar comportamento dinâmico. Nesse projeto, o LESS foi utilizado para manter a uniformidade do layout com o uso de variables, além do uso de nesting para facilitar o agrupamento de elementos descendentes.

Grunt.js
--------

O Grunt.js é um gerenciador de tarefas front-end que permite a automação de tarefas constantes. Nesse projeto, ele foi utilizado para a criação da versão concatenada dos arquivos css e js (com a tarefa **Concat**), minificação dos arquivos javascript (com o **Uglify**) e para a remoção de arquivos desnecessários do diretório após sua minificação (com o **Clean**).

Templates EJS
-------------

A biblioteca EJS (também integrada ao Node.js assim como o Grunt.js) permite o uso de templates javascript. Esses templates aceitam variáveis dinâmicas e as renderizam. No projeto, os templates EJS foram utilizados em conjunto com as Views do Backbone.js para a renderização das páginas da aplicação.

Outras tecnologias
------------------

Além das tecnologias, citadas, foi empregado nesse projeto o uso da biblioteca IcoMoon, que transforma ícones em fontes, melhorando sua performance e evitando o carregamento desnecessário de imagens.




