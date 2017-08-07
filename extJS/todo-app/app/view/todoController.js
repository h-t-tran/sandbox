Ext.define("Myapp.view.todoController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewport',


    onKeyPress: function() {
        var view = this.getView();
        var vm = view.getViewModel();
    }
});