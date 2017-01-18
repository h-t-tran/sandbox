// JavaScript Document
Ext.Loader.setConfig({
    enabled: true,
	//paths:{
	//	Myapp:'appcode'
	//}
});


Ext.require([
    'Ext.grid.*',
	'Ext.button.*',
	'Ext.textbox.*',
	//'Ext.ux.form.SearchField'
	//'Myapp.model.Contract',
	//'Myapp.model.Customer',
	//'Myapp.store.customers.Customers'
]);

//Ext.require('Myapp.view.MyGrid');

Ext.onReady(function(){

	Ext.application({
		// this lock up browser
		name: 'Myapp',


		requires: [
			'Myapp.view.MyGrid',
			'Myapp.view.status.StatusView',
			'Myapp.view.status.StatusController',
			'Myapp.view.status.StatusModel'
		],

		views   : [ 'fooViewport' ],

		launch: function() {

			console.debug("launch")
			Ext.create("widget.viewport");

		},

		init:function() {
			console.debug("init")
		}
	});

	//var myStore = Ext.create("Myapp.store.customers.Customers");

	//var grid = Ext.create("Myapp.MyGrid", {
	//	renderTo: Ext.getBody()
	//});


});