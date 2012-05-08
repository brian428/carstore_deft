Ext.define( 'carStore.store.CarChartJson', {
    extend: 'Ext.data.Store',
    requires: [ 'carStore.model.CarChartModel' ],

    constructor: function( cfg ) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'carStore.model.CarChartModel',
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});