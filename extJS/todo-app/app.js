// // JavaScript Document
// Ext.Loader.setConfig({
//     enabled: true,
// });


Ext.require([
    'Ext.grid.*',
	'Ext.button.*',
	'Ext.textbox.*'
]);

Ext.onReady(function(){

	Ext.application({
		name: 'Myapp',

		requires: [
			'Myapp.view.MyGrid',
			'Myapp.view.status.StatusView',
			'Myapp.view.status.StatusController',
			'Myapp.view.status.StatusModel'
		],

		views   : [ 'todoView' ],

		launch: function() {
			Ext.create("widget.viewport");
		}
	});

});