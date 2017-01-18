// JavaScript Document.
Ext.define('Myapp.model.clients',{
	extend:'Ext.data.Model',  
	idProperty:'id',   
	fields:[
		{name: 'id', type: 'int' },
		{name: 'name', type: 'string'},
		{name: 'lastname', type: 'string'}	
	]
});