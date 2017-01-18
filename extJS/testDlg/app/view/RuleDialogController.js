Ext.define('MyTestApp.view.RuleDialogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ruledialog',
    //
    // requires: [
    //     // 'Packt.view.login.CapsLockTooltip',
    //     // 'Packt.util.Util',
    //     // 'Packt.util.SessionMonitor'
    // ],

    // onTextFieldSpecialKey: function(field, e, options){
    //     if (e.getKey() === e.ENTER) {
    //         this.doLogin();
    //     }
    // },
    //
    // onTextFieldKeyPress: function(field, e, options){
    //
    //     var charCode = e.getCharCode(),
    //         me = this;
    //
    //     if((e.shiftKey && charCode >= 97 && charCode <= 122) ||
    //         (!e.shiftKey && charCode >= 65 && charCode <= 90)){
    //
    //         if(me.capslockTooltip === undefined){
    //             me.capslockTooltip = Ext.widget('capslocktooltip');
    //         }
    //
    //         me.capslockTooltip.show();
    //
    //     } else {
    //
    //         if(me.capslockTooltip !== undefined){
    //             me.capslockTooltip.hide();
    //         }
    //     }
    // },

    onSendRuleRequest :  function(param, e, options){
        //var cb = param.callback;
        var rule = param.rule;
        var defer = param.deferred;
        setTimeout(function() {
            //cb();
            defer.resolve();
        }, 3000);
        console.debug("onSendRuleRequest arg ", arguments)

        var view = this.getView();
        var vm = view.getViewModel();
        console.debug("min = ", vm.get("min"));
        console.debug("max = ", vm.get("max"));
    },

    onButtonClickOk: function(button, e, options){
        console.debug("onButtonClickOk arg ", arguments)

        //this.lookupReference('form').reset();
    },

    onButtonClickCancel: function(button, e, options){
        alert('cancel');

        //this.lookupReference('form').reset();
    },

    // onButtonClickSubmit: function(button, e, options){
    //     //alert("submit");
    //     var me = this;
    //
    //     if (me.lookupReference('form').isValid()){
    //        me.doLogin();
    //     }
    // },
    //
    // doLogin: function() {
    //
    //     var me = this,
    //         form = me.lookupReference('form');
    //
    //     me.getView().mask('Authenticating... Please wait...');
    //
    //     form.submit({
    //         clientValidation: true,
    //         url: 'php/security/loginxx.php',
    //         scope: me,
    //         success: 'onLoginSuccess',
    //         failure: 'onLoginFailure'
    //     });
    // },
    //
    // onLoginFailure: function(form, action) {
    //
    //     this.getView().unmask();
    //
    //     /*var result = Packt.util.Util.decodeJSON(action.response.responseText);
    //
    //     switch (action.failureType) {
    //         case Ext.form.action.Action.CLIENT_INVALID:
    //             Packt.util.Util.showErrorMsg('Form fields may not be submitted with invalid values');
    //             break;
    //         case Ext.form.action.Action.CONNECT_FAILURE:
    //             Packt.util.Util.showErrorMsg(action.response.responseText);
    //             break;
    //         case Ext.form.action.Action.SERVER_INVALID:
    //             Packt.util.Util.showErrorMsg(result.msg);
    //     }*/
    //
    //     //alternative to code above - reuse code
    //     //Packt.util.Util.handleFormFailure(action);
    // },
    //
    // onLoginSuccess: function(form, action) {
    //     var view = this.getView();
    //     view.unmask();
    //     view.close();
    //     Ext.create('Packt.view.main.Main');
    //     Packt.util.SessionMonitor.start();
    // }
});