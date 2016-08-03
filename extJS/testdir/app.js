Ext.Loader.setConfig({
    enabled: true
});

Ext.require([
    'Ext.button.*',
    'Ext.textbox.*',
    //'MyTestApp.view.myViewport',
    //'MyTestApp.viewmodel.myViewportViewmodel'
]);

Ext.onReady(function() {
    Ext.application({
        name: 'MyTestApp',

        //controllers: [],
        //
        //viewModel : {
        //    type : 'myViewportViewmodel'
        //},

        views   : [ 'myViewport' ],

        launch: function() {
            // either will work
            Ext.create("widget.viewport");
            //Ext.create("MyTestApp.view.myViewport");
        },

        init:function() {
            //this.setDefaultToken('');
        }


    });

});