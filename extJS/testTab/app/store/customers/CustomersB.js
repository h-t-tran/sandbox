// JavaScript Document
Ext.define('Myapp.store.customers.CustomersB',{
	extend:'Ext.data.Store',
	model: 'Myapp.model.Customer', 
	groupField : 'country',	  
	autoLoad:true,
	proxy:{
		type:'ajax',
		url: 'serverside/customers.json'
		,reader: {
        	type:'json', rootProperty:'records'
        }
	}
});
