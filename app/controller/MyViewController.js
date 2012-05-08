Ext.define( 'carStore.controller.MyViewController', {
    extend: 'Deft.mvc.ViewController',
    mixins: [ 'Deft.mixin.Injectable' ],
    inject: [ 'carChartJson', 'carDataJson' ],

    control: {
        carGrid: {
            selectionchange: 'onCarGridSelectionChange'
        },
        carDetail: true,
        carChartPanel: true
    },

    config: {
        carChartJson: null,
        carDataJson: null
    },

    init: function() {},

    onCarGridSelectionChange: function( selectionModel, selections ) {
        var carDataModel = selections[0];
        this.getCarDetail().update( carDataModel.getData() );
        this.getCarChartJson().loadData( carDataModel.getData().quality );
    }

});