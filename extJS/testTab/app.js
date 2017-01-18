// JavaScript Document
Ext.Loader.setConfig({
    enabled: true,

});


Ext.require([
    'Ext.grid.*',
	'Ext.button.*',
	'Ext.textbox.*',
]);

///////////////////////////
//
Ext.define('GbsUi.view.main.TestPanel1', {
	extend: 'Ext.panel.Panel',
	xtype: 'nn-gbs-app-panel1',
	items: [
		{
			fieldLabel: 'field1',
			xtype: 'textfield',
		},
		{
			fieldLabel: 'field2',
			xtype: 'textfield',
		}
	]
});

////////////////////////////
//
Ext.define('GbsUi.view.main.TestTab', {
	extend: 'Ext.tab.Panel',
	xtype: 'nn-gbs-app-tab1',
	items: [
		{
			xtype: 'nn-gbs-app-panel1',
			closable: false,
			title:  'Data Inventory',
			//layout: 'fit'
		},
		{
			xtype: 'nn-gbs-app-panel1',
			closable: false,
			title:  'GBS Directories',
			//layout: 'fit'
		}
	]
});

Ext.define('GbsUi.view.main.Main', {
	extend: 'Ext.container.Container',
	requires: [
	],

	xtype: 'nn-gbs-app-main',

	layout: {
		type: 'fit'
		//type: 'vbox'
	},

	items: [
		// {
		// 	fieldLabel: 'field1',
		// 	xtype: 'textfield',
		// },
		// {
		// 	fieldLabel: 'field2',
		// 	xtype: 'textfield',
		// },
		{
			xtype: 'nn-gbs-app-tab1'
		}
	]
});

Ext.onReady(function(){

	Ext.application({
		// this lock up browser
		name: 'Myapp',


		requires: [
			'Myapp.view.testTab'
		],

		views   : [ ],

		launch: function() {
			
			Ext.create('Ext.container.Viewport',{
				layout: 'fit',
				autoShow: 'true',
				items: [
					{
						xtype: 'nn-gbs-app-main'
					}
				]
			});

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