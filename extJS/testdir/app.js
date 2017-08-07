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

            // test animation
            // Ext.widget('button', {
            //     renderTo: Ext.getBody()
            //     , text: 'Open Window'
            //     , handler: function (btn) {
            //         var win = Ext.create('Ext.window.Window', {
            //             title: 'Hello',
            //             height: 200,
            //             width: 400,
            //         });
            //         win.animateTarget = btn.id;
            //         win.show();
            //     }
            // });
            // either will work
            Ext.create("widget.viewport");
            //Ext.create("MyTestApp.view.myViewport");
        },

        init:function() {
            //this.setDefaultToken('');
        }


    });

});