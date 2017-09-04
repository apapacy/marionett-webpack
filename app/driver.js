var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var	ToDoModel	=	require('./models/todo');


var ToDo = Marionette.View.extend({
  tagName: 'li',
  template: require('./templates/todoitem.html')
});

var TodoList = Marionette.CompositeView.extend({
  el: '#app',
  template: require('./templates/layout.html'),
  childView: ToDo,
  childViewContainer: 'ul',

  ui: { //	1
    assignee: '#id_assignee',
    form: 'form',
    text: '#id_text'
  },

  triggers: { //	2
    'submit	@ui.form': 'add1:todo:item0'
  },

  collectionEvents: { //	3
    add: 'itemAdded'
  },

  onAdd1TodoItem0: function() { //	4
        this.model.set({
						assignee:	this.ui.assignee.val(),
						text:	this.ui.text.val()
				});
				if	(this.model.isValid())	{
						var	items	=	this.model.pick('assignee',	'text');
						this.collection.add(items);
				}

  },

  itemAdded: function() { //	6
    this.ui.assignee.val('');
    this.ui.text.val('');
  }
});

var todo = new TodoList({
  collection: new Backbone.Collection([{
      assignee: 'Scott',
      text: 'Write	a	book	about	Marionette'
    },
    {
      assignee: 'Andrew',
      text: 'Do	some	coding'
    }
  ]),
  model:	new	ToDoModel()
});

todo.render();
