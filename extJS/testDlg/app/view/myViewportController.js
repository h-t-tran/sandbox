Ext.define("MyTestApp.view.myViewportController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewport',


    onKeyPress: function() {
        console.debug("myViewportController.onKeyPress");
        var view = this.getView();
        var vm = view.getViewModel();
        //Ext.widget('threshold-dialog');
        var dlg = new MyTestApp.view.RuleDialog();
        dlg.display().then(function() {
            // use clicks ok
            var rule = dlg.getResult();
            console.debug("dialog close data ", rule);

            //dlg.display();

        }, function () {
            // cancel
        });
        return;
    },

    // no good-can't embed a horiz panel inside a vertical
    _testDlg1: function() {
        var loginDlg = new Ext.Window({
            height: 240,
            width: 600,
            closable: true,
            closeAction : 'hide',
            modal: true,
            title: 'Login',
            layout: {
                type: 'vbox',
                align : 'stretch',
                pack  : 'start',
            },
            items: [
                {
                    xtype: 'combo',
                    fieldLabel: 'Asset',
                    forceSelection: true,
                    store:['F15', 'F16'],
                    name: 'assetType',
                    //flex: 5,
                    height: 20,
                    value: 'F15',
                    margin: "3, 3, 3, 0", // top, right, botom, left
                },
                {
                    xtype: 'combo',
                    fieldLabel: 'Asset2',
                    forceSelection: true,
                    store:['F15', 'F16'],
                    name: 'assetType2',
                    //flex: 5,
                    height: 20,
                    value: 'F15',
                    margin: "3, 3, 3, 0", // top, right, botom, left
                },
                {
                    xtype: 'panel',
                    layout: {
                        type: 'hbox',
                        pack: 'start',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'combo',
                            fieldLabel: 'aa',
                            forceSelection: true,
                            store:['F15', 'F16'],
                            value: 'F15',
                            flex:1
                        },
                        {
                            xtype: 'combo',
                            forceSelection: true,
                            store:['F15', 'F16'],
                            value: 'F15',
                            width:150
                        },
                        {html:'panel 3', flex:2}
                    ]

                    // fieldLabel: 'FOOBAR',
                    // layout: {
                    //     type: 'hbox',
                    //     pack: 'start',
                    //     align: 'stretch'
                    // },
                    // margin: "5,0,0,0",
                    // items: [
                    //     {
                    //         xtype: 'combo',
                    //         fieldLabel: 'aa',
                    //         forceSelection: true,
                    //         store:['F15', 'F16'],
                    //         name: 'assetType10',
                    //         //flex: 5,
                    //         //width: 300,
                    //         //columnWidth: .50,
                    //         value: 'F15',
                    //         //margin: "0,0,0,0", // top, right, botom, left
                    //     },
                    //     // {
                    //     //     xtype: 'combo',
                    //     //     //fieldLabel: 'bb',
                    //     //     forceSelection: true,
                    //     //     store:['F15', 'F16'],
                    //     //     name: 'assetType12',
                    //     //     //flex: 1,
                    //     //     //width: 300,
                    //     //     value: 'F15',
                    //     //     //columnWidth: .25,
                    //     //     // /margin: "0,0,0,0",
                    //     // },
                    // ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        // {
                        //     xtype: 'translation'
                        // },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'submit',
                            formBind: true,
                            iconCls: 'fa fa-sign-in fa-lg',
                            text: 'Submit',
                            listeners: {
                                click: 'onButtonClickSubmit'
                            }
                        },
                        {
                            xtype: 'button',
                            iconCls: 'fa fa-times fa-lg',
                            text: 'Cancel',
                            listeners: {
                                click: 'onButtonClickCancel'
                            }
                        }
                    ]
                }
            ]
        });
        loginDlg.show();
    }
});