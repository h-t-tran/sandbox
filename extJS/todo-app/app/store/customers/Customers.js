// JavaScript Document
Ext.define('Myapp.store.customers.Customers',{
	extend:'Ext.data.Store',
	model: 'Myapp.model.Customer',   
	autoLoad:true,
	proxy:{
		type:'ajax',
		url: 'serverside/customers.json'
		,reader: {
        	type:'json', rootProperty:'records'
        }
	}
});
