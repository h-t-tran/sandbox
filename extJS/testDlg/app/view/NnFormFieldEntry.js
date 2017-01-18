/**
 * This reusable container is used to ensure all the form entry fields are being position
 * consistently between different form.
 */
Ext.define('MyTestApp.view.NnFormFieldEntry', {
    extend: 'Ext.panel.Panel',

    xtype: 'nn-form-field-entry',

    requires: [
        'Ext.panel.Panel'
    ],

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },

    border: false,

    /**
     * this label text to be appear on the left hand side
     * It is to be specify the the client
     */
    nnLabelName : 'NA',

    /**
     * set to true to display the + symbol. By default is false to not display it
     */
    nnAllowMore : false,

    /**
     * if nnAllowMore is enable, then the client should specify the a callback function in nnAllowMoreFunc
     */
    nnAllowMoreFunc : null,

    initComponent:function() {
        var self = this;
        var labelFld = {
                xtype: 'label',
                text: this.nnLabelName,
                width: 70,
                padding: "5, 0, 0, 0"
            };

        var moreFld = {
            xtype: 'button',
            width: 20,
            iconCls: this.nnAllowMore === true ? 'fa fa-plus-circle fa-md' : '',
            disabled : this.nnAllowMore === false,

            // this removes the button from the dom which is not what we want,
            //hidden: this.nnAllowMore === false,

            // use visibility to keep it in the dom so it takes up the space.
            style : this.nnAllowMore === false ? 'visibility:hidden' : 'visibility:visible',
            text: '',
            margins: '3, 3, 3, 0',
            listeners: {
                click: function() {
                    if(self.nnAllowMoreFunc) {
                        self.nnAllowMoreFunc();
                    }
                }
            }
        };


        this.items = [labelFld].concat(this.items).concat(moreFld);

        // ensure each item is spaced out correctly
        Ext.each(this.items, function(item) {
           item.margin = '3, 3, 3, 0';  // top, right, bottom, left
        });
        this.callParent();
    }
});