// JavaScript Document
Ext.define('Myapp.model.Customer',{
	extend:'Ext.data.Model',  // step 1
	requires: ['Myapp.model.Contract'],
	idProperty:'id',   // step 2
	fields:[ // step 3
		{name: 'id'		 , type: 'int'},
		{name: 'name'    , type: 'string'},
		{name: 'phone'   , type: 'string'},
		{name: 'website' , type: 'string'},
		{name: 'status'  , type: 'string'},
		{name: 'clientSince' , type: 'date', dateFormat: 'Y-m-d H:i'}, 
		{name: 'country' , type: 'string'},
		{name: 'sendnews', type: 'boolean'},		
		{name: 'employees', type: 'int'},		
		{name: 'contractInfo' , reference: 'Contract', unique:true  }
	]
});