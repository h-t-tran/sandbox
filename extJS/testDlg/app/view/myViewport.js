Ext.define("MyTestApp.view.myViewport", {
    extend: 'Ext.container.Viewport',
    alias: 'widget.viewport',

    requires: [
        'Ext.panel.Panel',
        'MyTestApp.view.RuleDialog',
        'MyTestApp.view.myViewportController',
        'MyTestApp.view.myViewportModel'
    ],

    controller: 'viewport',

    viewModel : {
        type : 'viewport'
    },


    //layout : 'border',
    items: [

        {
            xtype: 'textfield',
            placeholder: 'click me',
            fieldLabel: 'field1',
            bind: {
                value: '{textvalue}'
            },
            tooltip: 'my textbox'
        },
        {
            xtype: 'button',
            text: 'click me',
            tooltip: 'my tooltip',
            listeners: {
                click: "onKeyPress",
                clickxx: function() {
                    console.debug("clicked");
                }
            }
        },
        ///////////////////////////
        {
            xtype: 'panel',
            border: false,
            defaults: {
                border: false
            },
            //bodyCls: 'red',
            // layout: {
            //     type: 'hbox',
            //     //pack: 'start',
            //     //align: 'stretch'
            // },
            width: 600,
            items: [
                {
                    xtype: 'combo',
                    fieldLabel: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
                    forceSelection: true,
                    store:['F15', 'F16'],
                    value: 'F15',
                },
                {
                    xtype: 'combo',
                    forceSelection: true,
                    store:['F15', 'F16'],
                    value: 'F15',
                },
                {
                    xtype: 'textfield',
                    value: '0',
                    //margins: "3,3,3,3",
                    //paddings: '2,2,2,2'
                },
                {
                    xtype: 'textfield',
                    value: '100',
                    //paddings: '2,2,2,2'
                },

            ],


        }
    ]
});

