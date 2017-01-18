
Ext.define('Myapp.store.MyStore', {
    extend: 'Ext.data.Store',
    alias : 'store.my-store',
    //data : [
    //    {id:1 ,name:'Zone A'},
    //    {id:2 ,name:'Zone B'},
    //    {id:3 ,name:'Zone C'},
    //    {id:4 ,name:'Zone D'},
    //    {id:5 ,name:'Zone E'}
    //],

    constructor : function(cfg) {
        console.debug("MyStore ctor");
        this.callParent(cfg);
    },

    _MAX : 80,

    model: 'Myapp.model.MyModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url : 'http://localhost:63342/webapp/testGrid/data/mydata.json',
        reader: {
            type: 'json',
            rootProperty:'data',
        }
    },
    listeners:{
        load:function(store, recs, success){
            console.debug("Proxy is loaded  this ", this);
            console.debug("this._MAX ", this._MAX);
        }
    }
});