// JavaScript Document
Ext.define('Myapp.model.CustomerWidgets',{
	extend:'Ext.data.Model',  // step 1
	idProperty:'id',   // step 2
	fields:[ // step 3
		{name: 'id'		 	, type: 'int'},
		{name: 'name'    	, type: 'string'},
		{name: 'progress'   , type: 'float'},				
		{name: 'piesequence' }		
	]
});