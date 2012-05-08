Ext.define( 'carStore.view.CarListings', {
    extend: 'Ext.panel.Panel',
    mixins: [ 'Deft.mixin.Controllable', 'Deft.mixin.Injectable' ],
    inject: [ 'carChartJson', 'carDataJson' ],
    controller: 'carStore.controller.MyViewController',

    frame: true,
    height: 667,
    id: 'carListings',
    width: 500,
    autoScroll: true,
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: 'Car Listings',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    id: 'carGrid',
                    store: this.carDataJson,
                    flex: 1,
                    viewConfig: {

                    },
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'manufacturer',
                            text: 'Manufacturer'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'model',
                            text: 'Model'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'price',
                            text: 'Price'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'wiki',
                            text: 'Wiki',
                            flex: 1
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    id: 'carDetail',
                    tpl: [
                        '<div style="padding: 10px">' +
                        '<img src="data/{img}" style="float: right" />',
                        'Manufacturer: {manufacturer}<br />',
                        'Model: <a href="{wiki}" target="_blank">{model}</a><br />',
                        'Price: {price:usMoney}<br />' +
                        '</div>'
                    ],
                    flex: 1,
                    margins: '5, 0, 0, 0'
                },
                {
                    xtype: 'panel',
                    height: 433,
                    id: 'carChartPanel',
                    width: 398,
                    layout: {
                        type: 'fit'
                    },
                    flex: 1,
                    margins: '5, 0, 0, 0',
                    items: [
                        {
                            xtype: 'chart',
                            height: 250,
                            id: 'carChart',
                            width: 400,
                            animate: true,
                            insetPadding: 20,
                            store: this.carChartJson,
                            axes: [
                                {
                                    type: 'Category',
                                    fields: [
                                        'name'
                                    ],
                                    position: 'bottom',
                                    title: 'Quality'
                                },
                                {
                                    type: 'Numeric',
                                    fields: [
                                        'rating'
                                    ],
                                    majorTickSteps: 5,
                                    position: 'left',
                                    title: 'Score',
                                    maximum: 5,
                                    minimum: 0
                                }
                            ],
                            series: [
                                {
                                    type: 'column',
                                    label: {
                                        display: 'insideEnd',
                                        field: 'rating',
                                        color: '#333',
                                        'text-anchor': 'middle'
                                    },
                                    xField: 'name',
                                    yField: [
                                        'rating'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent( arguments );
    }

});