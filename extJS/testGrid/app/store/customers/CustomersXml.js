// JavaScript Document
Ext.define('Myapp.store.customers.CustomersXml',{
	extend:'Ext.data.Store',
	model: 'Myapp.model.Customer',   
	autoLoad:false,
	proxy:{
		type:'ajax',
		url: 'serverside/customers.xml',
		reader: {
			type: 'xml',
			rootProperty: 'data',
			record:'customer',
			totalProperty: 'total',
			successProperty: 'success'
		}
	}
});
