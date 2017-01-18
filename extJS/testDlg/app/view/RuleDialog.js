
Ext.define('MyTestApp.view.RuleDialog', {
    extend: 'MyTestApp.view.NnDialogBase',

    xtype: 'rule-dialog',

    requires: [
        'MyTestApp.view.RuleDialogController',
        'MyTestApp.view.RuleDialogModel',
        'MyTestApp.view.NnFormFieldEntry'
    ],

    controller  : 'ruledialog',
    viewModel : {
        type : 'ruledialog'
    },

    title       : 'Threshold',
    height      : 400,

    _rule       : null,

    constructor : function(rule) {

        // if rule is null, that means it's a new operation, else it is edit
        this._rule = rule;

        // call parent ctor
        MyTestApp.view.NnDialogBase.superclass.constructor.call(this, null);

        // this.on(MyTestApp.view.NnDialogBase.ON_OK_EVENT, function(data){
        //     console.debug('onOk');
        // });
        // this.on(MyTestApp.view.NnDialogBase.ON_CANCEL_EVENT, function(data){
        //     console.debug('onCancel');
        // });
    },

    listeners : {
        // bind to controller functions
        //onOk            : 'onButtonClickOk',
        //onCancel        : 'onButtonClickCancel',
        sendRuleRequest : 'onSendRuleRequest'
    },

    /**
     * This is to be called only when user select OK and everthing submited.
     * @returns {object} the rule we created or edited.
     */
    getResult : function () {
        return this._rule;
    },

    _onValidate : function() {
        return {
            isValid : true,
            errMsg : 'Parameter is not valid'
        };
    },

    _onOk : function(doneCb) {
        var deferred = new Ext.Deferred();
        // fire an event so that it will trigger a function in the controller
        this.fireEvent("sendRuleRequest", {
            //callback : doneCb,
            deferred : deferred,
            rule : { prop1: 1, prop2: 2 }

        });

        deferred.promise.then(function() {
            console.debug("sendRuleRequest event completes.")
            doneCb();
        })

    },

    _onGetInputEntryItems : function() {
        return [
            {
                xtype: 'nn-form-field-entry',
                nnLabelName: 'Asset',
                nnAllowMore: true,
                items: [
                    {
                        xtype: 'combo',
                        forceSelection: true,
                        //queryMode: 'local',
                        //anyMatch: false,
                        store:['F15', 'F16'],
                        name: 'assetType',
                        //width: 200,
                        flex: 5,
                        value: 'F15',
                        margin: "3, 3, 3, 0" // top, right, botom, left
                    }

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
                        //anyMatch: true,
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
                        name: 'opValue',
                        flex: 2,
                        value: '0',
                    }
                ]
            },
            {
                xtype: 'nn-form-field-entry',
                nnAllowMore: true,
                nnAllowMoreFunc : function() {
                    alert('Level allow more callback');
                },
                nnLabelName: 'Level',
                items: [
                    {
                        xtype: 'combo',
                        store:['HEIGH', 'DEPTH'],
                        name: 'leveltype',
                        flex: 3,
                        value: 'HT'
                    },
                    {
                        xtype: 'textfield',
                        name: 'levelmin',
                        flex: 3,
                        //value: '20'
                        bind: {
                            value: '{min}'
                        }
                    },
                    {
                        xtype: 'textfield',
                        name: 'levelmax',
                        flex: 3,
                        bind: {
                            value: '{max}'
                        }
                    }
                ]
            }
        ];
    }

});