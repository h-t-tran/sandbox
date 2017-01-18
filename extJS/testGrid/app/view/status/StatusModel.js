Ext.define("Myapp.view.status.StatusModel", {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.status',

    data: {
        buttonText : "Submit",
        disableSubmit: false,
    },

    constructor: function(config) {
        console.debug("view model ctor ");
        var self = this;
        setTimeout(function() {
            self.set('buttonText', 'hello');
        }, 2000);
        this.callParent();
    },

    init : function() {
        console.debug("view model init()")
    }
});