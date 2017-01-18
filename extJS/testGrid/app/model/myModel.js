Ext.define('Myapp.model.MyModel', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        { name: 'id', type: 'int'},
        { name: 'name', type: 'string'}
    ]
});
