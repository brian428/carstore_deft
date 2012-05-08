Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    autoCreateViewport: true,
    name: 'carStore'
});

Ext.onReady( function () {
    Deft.Injector.configure({
        carChartJson: 'carStore.store.CarChartJson',
        carDataJson: 'carStore.store.CarDataJson'
    });
});
