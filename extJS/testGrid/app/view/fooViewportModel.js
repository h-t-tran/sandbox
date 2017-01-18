Ext.define('Myapp.view.fooViewportModel', {
   extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.viewport',
    data: {
        textvalue : "foobar",
        combovalueSelection: 2,

        id: 10,
        firstName: 'John',
        lastName: 'Doe',

        // works
        teststore : null,

        // works.
        teststorexx : {
                type: 'my-store'
            },
    },

    formulas: {
        name: function (get) {

            //var fn = get('firstName'), ln = get('lastName');
            //return (fn && ln) ? (fn + ' ' + ln) : (fn || ln || '');
            return "jane";
        },
        enable: function() {
           return true;
        }
    },

    constructor: function(config) {
        console.debug("viewport view model ctor arg ", arguments);

        var self = this;
        setTimeout(function() {
            var testStore = Ext.create('Myapp.store.MyStore');
            //debugger;

            //
            //self.set('combovalueSelection', 1);

            // good
            self.set("teststore", testStore);

        }, 1000);

        setTimeout(function() {
            self.set('combovalueSelection', 1);
        }, 2000);

        this.callParent();
    },

    init : function() {
        console.debug("view model init()");

    },

    load: function() {
        console.debug("view model loaded()");
    }


});