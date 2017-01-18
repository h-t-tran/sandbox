Ext.define("Myapp.view.status.StatusController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.status',
    xtype : "status2",

    submit : function() {
        console.debug("StatusController submit");
    },


});