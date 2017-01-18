Ext.define("MyTestApp.MyGrid", {
    extend:  'Ext.grid.Panel',
    height: 250,
    width:  800,
    title: 'My customers2',
    columns: [{
        width: 70,
        dataIndex: 'id',
        text: 'Id'
    },{
        width: 160,
        dataIndex: 'name',
        text: 'Customer name'
    },{
        width: 110,
        dataIndex: 'phone',
        text: 'Phone'
    },{
        width: 160,
        dataIndex: 'website',
        text: 'Website'
    },{
        width: 80,
        dataIndex: 'status',
        text: 'Status'
    },{
        width: 160,
        dataIndex: 'clientSince',
        text: 'Client Since'
    }],
    store: userStore
});
