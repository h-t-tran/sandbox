Ext.define("Myapp.view.todoView", {
    extend: 'Ext.container.Viewport',
    alias: 'widget.viewport',

    requires: [
        'Ext.panel.Panel',
        'Myapp.view.todoController',
        'Myapp.view.todoViewModel',
        'Myapp.store.MyStore'
    ],

    controller: 'viewport',

    items: [
        // {
        //     xtype: 'textfield',
        //     itemId: 'firstFieldId',
        //     emptyText: 'click me',
        //     fieldLabel: 'field1',
        //
        //
        //     // view model can user the reference to refer to the textbox.
        //     reference: 'somefield',
        //     bind: {
        //         value: '{textvalue}'
        //     },
        //     tooltip: 'my textbox tooltip',
        //     listeners: {
        //         render: function (c) {
        //             console.debug("Attaching tooltip to checkbox");
        //             Ext.create('Ext.tip.ToolTip', {
        //
        //                 target: c.getEl(),
        //                 html: c.tooltip
        //             });
        //         }
        //     }
        // },
        // {
        //     xtype: 'textfield',
        //     fieldLabel: 'First Name',
        //     reference: 'firstnamevalue',
        //     tooltip : "enter first name",
        //     bind: {
        //         value: '{name}',
        //         hidden: '{!enable}'
        //     }
        // },
        //
        // // {
        // //     xtype: 'checkbox',
        // //     boxLabel: 'Is Admin',
        // //     reference: 'isAdmin'
        // // },
        // {
        //     xtype: 'textfield',
        //     fieldLabel: 'Bind to checkbox directly:',
        //     bind: {
        //         disabled: '{!checkmeCb.checked}'
        //     }
        // },
        //
        // {
        //     xtype : 'button',
        //     tooltip:'Click me...!',
        //     text: 'click me'
        // },
        // {
        //     xtype: 'checkbox',
        //     boxLabel: 'check me',
        //     reference: 'checkmeCb',
        //     tooltip: 'This is a tip',
        //     listeners: {
        //         render: function (c) {
        //             console.debug("Attaching tooltip to checkbox");
        //             Ext.create('Ext.tip.ToolTip', {
        //
        //                 target: c.getEl(),
        //                 html: c.tooltip
        //             });
        //         }
        //     }
        // },
        // {
        //     xtype: 'textfield',
        //     fieldLabel: 'Bind To Grid Sel',
        //     bind: {
        //         //value: '{!checkmeCb.checked}'
        //         value: '{mygrid123a.selection.id}' + '--' + '{mygrid123b.selection.name}'
        //     }
        // },
        //
        // {
        //     xtype: 'my-grid',
        //     reference: 'mygrid123a',
        //     listeners: {
        //         selectfilm: function () {
        //             console.debug("mygrid123a selectfilm() event handler");
        //         }
        //     }
        //
        // },
        {
            xtype: 'my-grid',
            reference: 'mygrid123b',
            listeners: {
                selectfilm: function () {
                    console.debug("mygrid123b selectfilm() event handler");
                }
            }
        },
        // {
        //     xtype: 'status'
        // },
        // {
        //     xtype: 'button',
        //     text: 'click me',
        //     tooltip: 'my tooltip',
        //     listeners: {
        //         click: "onKeyPress",
        //         clickxx: function() {
        //             console.debug("clicked");
        //         }
        //     }
        // },
        // {
        //     xtype: 'combo',
        //     displayField: 'name',
        //     valueField: 'id',
        //     editable: false,
        //     //store : {
        //     //    type: 'my-store'
        //     //},
        //     bind : {
        //         value: '{combovalueSelection}',
        //         store: '{teststore}'
        //     },
        // },
        // {
        //     //xtype: 'searchfield'
        // }

    ],



    initComponent: function() {
        console.debug("fooViewport.initComponent");

        var tip = Ext.create('Ext.tip.ToolTip', {
            target: 'firstFieldId',
            html : "this is the tooltip"
        });

        // this works
        //var grid = Ext.create("Myapp.view.MyGrid");

        // for this to work, need to include this as part of Ext.application
        // requires: [ 'Myapp.view.MyGrid'  ],
        //
        //var grid = Ext.create("widget.my-grid");
        //var grid = Ext.widget("my-grid");

        //this.items = this.items.concat(grid);
        this.viewModel = Ext.create("Myapp.view.todoViewModel", { data: 1});

        this.on('addItem', function(arg1, arg2, arg3) {
            alert('addItem 2');
        });

        console.debug("fooViewport this.items ", this.items);
        this.callParent();
    }
});

