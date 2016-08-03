Ext.define("MyTestApp.view.myViewportController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewport',


    onKeyPress: function() {
        console.debug("myViewportController.onKeyPress");
        var view = this.getView();
        var vm = view.getViewModel();
    }
});