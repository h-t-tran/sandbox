// JavaScript Document
Ext.define('Myapp.store.customers.CustomersNested',{
	extend:'Ext.data.Store',
	model: 'Myapp.model.Customer',   
	autoLoad:false,
	proxy:{
		type:'ajax',
		url: 'serverside/customersnested.json'
		,reader: {
        	type:'json', rootProperty:'output.customerRecords'
        }
	}
});
