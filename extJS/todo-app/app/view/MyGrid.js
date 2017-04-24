Ext.define("Myapp.view.MyGrid", {

    extend: 'Ext.ux.LiveSearchGridPanel',

    //
    // both of these does the same thing.
    // if you use xtype, then no need to include "widget." prefix.
    // Both ways allow this code to work
    //      var grid = Ext.create("widget.my-grid");
    //      var grid = Ext.widget("my-grid");
    //      items : {
    //              xtype: 'my-grid'
    //      },
    //
    //xtype: "my-grid",
    alias: 'widget.my-grid',

    selType : 'rowmodel',
    reference: 'mygrid123',

    height: 250,
    width:  800,
    title: 'My customers',
    columns: [{
        width: 70,
        dataIndex: 'id',
        text: 'Id',
        locked: false
    },{
        locked: false,
        width: 160,
        dataIndex: 'name',
        text: 'Customer name',
        tdCls : 'group0-left-demarcation-column'
    },{
        width: 110,
        dataIndex: 'phone',
        text: 'Phone',
        tdCls: 'group0-right-demarcation-column'
    },{
        width: 160,
        dataIndex: 'website',
        text: 'Website',
        tdCls: 'group1-left-demarcation-column'
    },{
        width: 80,
        dataIndex: 'status',
        text: 'Status',
        tdCls: 'group1-right-demarcation-column'
    },{
        width: 460,
        dataIndex: 'clientSince',
        text: 'Client Since',
        tdCls: 'left-demarcation-column'
    }],

    initComponent: function() {
        console.debug("MyGrid.initComponent");
        var self = this;
        var myStore = Ext.create("Myapp.store.customers.Customers");
        this.store = myStore;

        // add custom events
        //this.addEvents('myevent1', 'myevent2');

        this.callParent();
    },

    listeners: {

        // selectfilm: function() {
        //     console.debug("mark selectfilm()");
        // },

        rowselect: function(sm, index, record) {
            console.debug('rowselect');
        },
        cellclick: function(view, td, cellIndex, record, tr, rowIndex, e, eOpts) {
            console.debug('cellclick');
            var selModel = this.getSelectionModel();
            var sels = selModel.getSelection();

            var selData = this.selection;
            console.debug("selData ", selData);

            this.fireEvent('selectfilm', 555);
            // var arg1 = 'blah';
            // var arg2 = 123;
            // this.fireEvent('addItem', arg1, arg2);
            //this.fireEvent('myevent1', this, 111, 222);
        },
        afterrender: function (comp) {
            console.debug('afterrender');
        }

    }
});
