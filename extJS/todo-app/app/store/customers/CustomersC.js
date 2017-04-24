// JavaScript Document
Ext.define('Myapp.store.customers.CustomersC',{
	extend:'Ext.data.Store',
	model: 'Myapp.model.Customer', 
	//groupField : 'country',	  
	pageSize:3, 
	autoLoad:true,
	proxy:{
		type:'ajax',
		url: 'serverside/customersc.php',
		reader: {
        	type:'json', 
			rootProperty:'records', 
			totalProperty:'total'
			//,
			//useSimpleAccessors : true
        },
		actionMethods :{read:'POST'}
	}
});
