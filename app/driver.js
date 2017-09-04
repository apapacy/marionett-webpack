var jQuery = require('jquery');
var	Marionette	=	require('backbone.marionette');		//	1
var	HelloWorld	=	Marionette.View.extend({		//	2
		el:	'#app',		//	3
		template:	require('./templates/layout.html')		//	4
});
var	hello	=	new	HelloWorld();		//	5
hello.render();		//	6
