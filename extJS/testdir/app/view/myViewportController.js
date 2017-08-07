Ext.define("MyTestApp.view.myViewportController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewport',


    onKeyPress: function() {
        console.debug("myViewportController.onKeyPress");
        var view = this.getView();
        var vm = view.getViewModel();

    },

    _isHidden : false,
    _anim : null,

    onHideHandler : function() {
        var txt = this.lookupReference("textfield1");
        if(! this._anim ) {
            // Ext.create('Ext.fx.Anim', {
            //     target: txt,
            //     duration: 3000,
            //     from: {
            //         //width: 0, //starting width 400
            //         opacity: 0,       // Transparent
            //         color: '#ffffff', // White
            //         left: 0
            //     },
            //     to: {
            //         //width: 400, //end width 300
            //         opacity: 0.9,
            //         color: '#ff0000',
            //         //backgroundColor: '#ffee22'
            //     }
            // });
        }

        if(this._isHidden === true) {
            Ext.get("textfield1Id").fadeIn({
                opacity: 1,
                easing: 'easeOut',
                duration: 2000
            });

        }
        else {
            Ext.get("textfield1Id").fadeOut({
                opacity: 0,
                easing: 'easeOut',
                duration: 2000,
                remove: false,
                useDisplay: false
            });
        }

        var self = this;
        setTimeout(function() {
            //txt.setVisible(self._isHidden);
            self._isHidden =  ! self._isHidden;
        }, 2000);


    }
});