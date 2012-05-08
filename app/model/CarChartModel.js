Ext.define( 'carStore.model.CarChartModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'rating',
            type: 'auto'
        }
    ]
});