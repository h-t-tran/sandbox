Ext.define("MyTestApp.view.myViewport", {
    extend: 'Ext.container.Viewport',
    alias: 'widget.viewport',

    requires: [
        'Ext.panel.Panel',
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
        }
    ]
});

