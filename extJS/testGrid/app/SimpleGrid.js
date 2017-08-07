Ext.create('Ext.data.Store', {
    storeId: 'simpsonsStore',
    fields: ['name', 'email', 'phone', 'active'],
    data: [{
        'name': 'Lisa',
        "email": "lisa@ttt.com",
        "phone": "123-111-1224",
        "active": true
    }, {
        'name': 'Bart',
        "email": "bart@ttt.com",
        "phone": "123-222-1234",
        "active": false
    }
    ]
});

var sm = new Ext.selection.CheckboxModel({
    checkOnly: true
});

Ext.create('Ext.grid.Panel', {
    title: 'Simpsons',
    selModel: sm,
    store: Ext.data.StoreManager.lookup('simpsonsStore'),
    columns: [{
        text: 'Name',
        dataIndex: 'name'
    }, {
        text: 'Email',
        dataIndex: 'email',
        flex: 1
    }, {
        text: 'Phone',
        dataIndex: 'phone'
    }, {
        xtype: 'checkcolumn',
        text: 'Active',
        dataIndex: 'active',
        align: 'center',
        defaultType: 'boolean'
    }
    ],
    height: 400,
    width: 800,
    renderTo: document.body
});