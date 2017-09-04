var	Backbone	=	require('backbone');
var	Marionette	=	require('backbone.marionette');

var	ToDo	=	Marionette.View.extend({
		tagName:	'li',
		template:	require('./templates/todoitem.html')
});

var	TodoList	=	Marionette.CompositeView.extend({
		el:	'#app',
		template:	require('./templates/layout.html'),
		childView:	ToDo,
		childViewContainer:	'ul'
});
var	todo	=	new	TodoList({
		collection:	new	Backbone.Collection([
				{assignee:	'Scott',	text:	'Write	a	book	about	Marionette'},
				{assignee:	'Andrew',	text:	'Do	some	coding'}
		])
});
todo.render();
