Ext.define("Myapp.view.status.StatusView", {
    extend : 'Ext.Panel',

    alias: 'widget.status',
    //xtype : 'status',

    controller: 'status',

    viewModel : {
       type : 'status'
    },

    //html :  "this is a panel",
    left: 0,
    padding: 10,


    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Name',
            //disabled: true,
            bind: {
                disabled: '{disableSubmit}'

                //disabled: '{!isAdmin.checked}'
            }
        },
        {
            xtype: 'checkbox',
            boxLabel: 'Is Admin',
            reference: 'isAdmin'
        },
        {
            xtype: 'button',

            //
            // bind to VM
            //
            //bind : '{buttonText}',

            //disabled: '{disableSubmit}',

            bind: {
                text: '{buttonText}',
                disabled: '{disableSubmit}',
            },

            listeners: {
                click: "submit"
            }
        }
    ]

});