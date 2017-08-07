// JavaScript Document.
Ext.define('Myapp.model.Contract',{
	extend:'Ext.data.Model',  
	idProperty:'id',   
	fields:[
		{name: 'id', type: 'int' },
		{name: 'contractId', type: 'string'},
		{name: 'documentType', type: 'string'}	
	]
});