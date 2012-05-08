Ext.define( 'carStore.store.CarDataJson', {
    extend: 'Ext.data.Store',
    requires: [ 'carStore.model.CarDataModel' ],

    constructor: function( cfg ) {
        var me = this;
        cfg = cfg || {};

        me.callParent([
            Ext.apply(
            {
                autoLoad: true,
                model: 'carStore.model.CarDataModel',
                proxy: {
                    type: 'ajax',
                    url: 'data/cars.json',
                    reader: {
                        type: 'json',
                        root: 'data'
                    }
                }
            },
            cfg )
        ]);
    }
});