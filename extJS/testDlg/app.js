Ext.Loader.setConfig({
    enabled: true
});

Ext.require([
    'Ext.button.*',
    'Ext.textbox.*',
    'Ext.*'
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

            // Ext.create('Ext.panel.Panel', {
            //     renderTo: Ext.getBody(),
            //     width: 800,
            //     height: 300,
            //     title: 'Container Panel',
            //     xlayout: {
            //         type: 'hbox',
            //         //pack: 'start',
            //         //align: 'stretch'
            //     },
            //
            //     items: [
            //         {
            //             xtype: 'textfield',
            //             fieldLabel: 'fld1',
            //             value: '0',
            //         },
            //         {
            //             xtype: 'textfield',
            //             fieldLabel: 'fld1',
            //             value: '100',
            //         },
            //         {
            //
            //             xtype: 'panel',
            //             layout: {
            //                 type: 'hbox',
            //                 //pack: 'start',
            //                 //align: 'stretch'
            //             },
            //             width: 600,
            //             items: [
            //                 {
            //                     xtype: 'combo',
            //                     fieldLabel: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
            //                     forceSelection: true,
            //                     store:['F15', 'F16'],
            //                     value: 'F15',
            //                 },
            //                 {
            //                     xtype: 'combo',
            //                     forceSelection: true,
            //                     store:['F15', 'F16'],
            //                     value: 'F15',
            //                 },
            //                 {
            //                     xtype: 'textfield',
            //                     value: '0',
            //                     //margins: "3,3,3,3",
            //                     //paddings: '2,2,2,2'
            //                 },
            //                 {
            //                     xtype: 'textfield',
            //                     value: '100',
            //                     //paddings: '2,2,2,2'
            //                 },
            //
            //             ],
            //         }
            //     ]
            //});
        },

        init:function() {
            //this.setDefaultToken('');
        }


    });

});