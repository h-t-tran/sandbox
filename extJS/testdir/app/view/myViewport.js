
var states = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"AL", "name":"Alabama"},
        {"abbr":"AK", "name":"Alaska"},
        {"abbr":"AZ", "name":"Arizona"}
    ]
});

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
            xtype: 'combo',
            fieldLabel: 'Choose State',
            store: states,
            queryMode: 'local',
            valueField: 'abbr',
            renderTo: Ext.getBody(),
            // Template for the dropdown menu.
            // Note the use of the "x-list-plain" and "x-boundlist-item" class,
            // this is required to make the items selectable.
            tplxx: Ext.create('Ext.XTemplate',
                '<ul class="x-list-plain"><tpl for=".">',
                '<li role="option" class="x-boundlist-item">{abbr} - {name}</li>',
                '</tpl></ul>'
            ),

            listConfig : {
                //itemTpl : '<span style="background-color:yellow;margin:1px">&nbsp;&nbsp;&nbsp;</span>{name} +  {name}'
                //, displayTplxx : '{name} +  {name}'
            },

            //this works for drop down items.
            tpl: '<tpl for=".">' +
                    '<div class="x-boundlist-item">' +
                        '<tpl if="name == \'Alabama\'"> ' +
                            '<span style="background-color:red;margin:1px">&nbsp;&nbsp;&nbsp;</span>' +
                        '<tpl elseif="name == \'Alaska\'"> ' +
                            '<span style="background-color:yellow;margin:1px">&nbsp;&nbsp;&nbsp;</span>' +
                        '<tpl elseif="name == \'Arizona\'"> ' +
                            '<span style="background-color:green;margin:1px">&nbsp;&nbsp;&nbsp;</span>' +
                        '<tpl else> ' +
                            '<span>You forgot to style this</span>' +
                        '</tpl>' +
                        '{name}' +
                    '</div>' +
                '</tpl>',

            // not rendering html in the textbox..
            displayTpl: Ext.create('Ext.XTemplate',

                    '<tpl for=".">' +
                      //'<div>'+
                        '<tpl if="name == \'Alabama\'"> ' +
                            '({name})({name})' +
                        '<tpl else> ' +
                            '({name})' +
                        '</tpl>' +
                      // '</div>' +
                    '</tpl>'

            ),

            displayTplxx: '<tpl for="." style="background-color:green;">' +
                            '<span style="background-color:green;margin:1px">&nbsp;&nbsp;&nbsp;</span>' +
                            '{name}' +
                        '</tpl>',

            // template for the content inside text field
            // displayTpl: Ext.create('Ext.XTemplate',
            //     '<tpl for=".">',
            //     '{abbr} - {name}<h3>test</h3>',
            //     '</tpl>'
            // )
        },

        {
            xtype: 'textfield',
            placeholder: 'click me',
            fieldLabel: 'field1',
            // bind: {
            //     value: '{textvalue}'
            // },
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

