/**
 * this common dialog base module is to be used in all NN project where you need to create a modal dialog
 * containing data entry fields
 * Exposed Events:
 *  "onOk" fired when user selects OK the data submittion is successful.
 *  "onCancel" fired when user cancel the dialog
 *
 * Usage:
 * 1. define a module and extend this module
 *          Ext.define('MyTestApp.view.ThresholdDlg', {
                extend: 'MyTestApp.view.NnDialogBase',
                }
   2. if your module has a ctor, define it like this and call the parent ctor
        constructor : function(rule) {
            MyTestApp.view.NnDialogBase.superclass.constructor.call(this, null);
            }
   3. override _onGetInputEntryItems() to return an array of items to be displayed in the dialog
      Most likely, you will be using the nn-form-field-entry as it ensure proper layout formatting
             return [
             {
                 xtype: 'nn-form-field-entry',
                 nnLabelName: 'Asset',
                 nnAllowMore: true,
                 items: [
                     {
                         xtype: 'combo',
                         forceSelection: true,
                         store:['F15', 'F16'],
                         name: 'assetType',
                         flex: 5,
                         value: 'F15',
                         margin: "3, 3, 3, 0", // top, right, botom, left
                     },

                 ]
             },
             {
                 xtype: 'nn-form-field-entry',
                 nnAllowMore : false,
                 nnLabelName: 'Parameter',
                 items : [
                     {
                         xtype: 'combo',
                         forceSelection: true,
                         queryMode: 'local',
                         store:['Air', 'air polute', 'Water'],
                         name: 'paramType',
                         flex: 5,
                         value: ''
                     },
                     {
                         xtype: 'combo',
                         forceSelection: true,
                         store:['=', '<'],
                         name: 'operator',
                         flex: 2,
                         value: '='
                     },
                     {
                         xtype: 'textfield',
                         name: 'opValuue',
                         flex: 2,
                         value: '0',
                     },
                 ]
             },
    4. override _onValidate() if there is any validation your dialog needs to perform.
            _onValidate : function() {
                return {
                    isValid : true,
                    errMsg : 'Parameter is not valid'
                };
        },
    5. Override the _onOk( callbackFunc ) to send the data to the server or do whatever custom logic you need.
       In the _onOk, you must ensure the callbackFunc is invoke once you're done with your custom logic.

 */
Ext.define('MyTestApp.view.NnDialogBase', {
    extend: 'Ext.window.Window',

    requires: [
       'MyTestApp.view.NnFormFieldEntry'
    ],

    mixins :
    {
        observable : 'Ext.mixin.Observable'
    },

    statics : {
        ON_OK_EVENT         : "onOk",
        ON_CANCEL_EVENT     : "onCancel"
    },

    modal: true,
    autoShow: true,
    height: 170,
    width: 560,
    layout: {
        type: 'fit'
    },
    //iconCls: 'fa fa-key fa-lg',
    closeAction: 'destroy', //'hide',
    closable: true,
    draggable: true,
    resizable: true,

    /**
     * future object to let client know when it is the dialog is close.
     */
    _deferred  : null,

    initComponent:function() {
        var self = this;
        this.items = [
            {
                xtype: 'form',
                bodyPadding: 15,
                items: [ ],  // the items will be specified by derived module
                dockedItems: [
                    {
                        xtype: 'toolbar',
                        dock: 'bottom',
                        items: [
                            {
                                xtype: 'tbfill'
                            },
                            {
                                xtype: 'button',
                                itemId: 'ok',
                                formBind: true,
                                iconCls: 'fa fa-check fa-lg',
                                text: 'Ok',
                                listeners: {
                                    click: function() {
                                        self._doOk();
                                    }
                                }
                            },
                            {
                                xtype: 'button',
                                iconCls: 'fa fa-times fa-lg',
                                text: 'Cancel',
                                listeners: {
                                    click: function() {
                                        self._doCancel();
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        ];

        var form = this.items[0];
        form.items = this._onGetInputEntryItems();
        this.callParent();
    },

    display : function() {
        this._deferred = new Ext.Deferred();
        this.show();
        return this._deferred.promise;
    },

    /**
     * Make use of the template method pattern to perform any internal validation, then delegate it to submodule
     * @return true if all the fields pass validation, else return false.
     */
    _validate : function() {
        // perform any internal validation is needed

        return this._onValidate();
    },


    /**
     * handler when user clicks OK. It perform some validation and execute submodule's hooks.
     * @private
     */
    _doOk : function() {
        var valid = this._onValidate();
        var self = this;
        if(valid.isValid === true) {

            // once we pass validation, let the submodule perform the onok action.
            if(this._onOk(function() {
                    // submodule wants to close the dialog
                    self.close();

                    // let client know when are done.
                    self._deferred.resolve();

                    self.fireEvent(MyTestApp.view.NnDialogBase.ON_OK_EVENT, null);
                }));

        }
        else {
            // display popup of the error.

            // TODO: use extjs msgbox
            alert(valid.errMsg);
        }
    },

    /**
     * Cancel handler
     * @private
     */
    _doCancel : function() {
        var self = this;
        self.close();

        // let client know when are done.
        self._deferred.reject();

        this.fireEvent(MyTestApp.view.NnDialogBase.ON_CANCEL_EVENT, null);
    },

    ////////////////////////////////////////////////////////////
    //
    // The following _on* are hooks for submodule to overrides
    //
    ////////////////////////////////////////////////////////////
    /**
     * Submodule override this to perform any custom validation,
     * @returns {object} the return object must have 2 properties isValid and errMsg
     * isValid is a boolean indicate if the custom validation pass valid or not
     * errMsg is a string containing the error msg describing the error if it does not pass validation.
     * @private
     */
    _onValidate : function() {
        return {
            isValid : true,
            errMsg : ''
        };
    },

    /**
     * submodule should override this to detect when the user select OK and all the fields are valid.
     * The submodule return true to close the dialog or return false to keep it open.
     * @param doneCb {Function} callback function when the onOk custom operation is completed
     * @private
     */
    _onOk : function(doneCb) {
        doneCb();
    },

    /**
     * submodule must override this and return a arrays of items to display on data entry
     * @returns {Array} empty array as default
     * @private
     */
    _onGetInputEntryItems : function() {
        return [];
    }
});
