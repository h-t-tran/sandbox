Ext.define("MyTestApp.view.myViewport", {
    extend: 'Ext.container.Viewport',
    alias: 'widget.viewport',

    requires: [
        'Ext.panel.Panel',
        'MyTestApp.view.myViewportController'
    ],

    controller: 'viewport',

    //viewModel : {
    //    //type : 'myViewportViewmodel'
    //},


    //layout : 'border',
    items: [

        {
            xtype: 'textfield',
            placeholder: 'click me',
            fieldLabel: 'field1',
            value: "123",
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

