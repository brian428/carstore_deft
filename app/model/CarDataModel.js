Ext.define( 'carStore.model.CarDataModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'manufacturer',
            type: 'string'
        },
        {
            name: 'model',
            type: 'string'
        },
        {
            name: 'price',
            type: 'int'
        },
        {
            name: 'wiki',
            type: 'string'
        },
        {
            name: 'img',
            type: 'string'
        },
        {
            name: 'quality'
        }
    ]
});