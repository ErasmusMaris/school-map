var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ERASMUSMARIS_1 = new ol.format.GeoJSON();
var features_ERASMUSMARIS_1 = format_ERASMUSMARIS_1.readFeatures(json_ERASMUSMARIS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ERASMUSMARIS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ERASMUSMARIS_1.addFeatures(features_ERASMUSMARIS_1);
var lyr_ERASMUSMARIS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ERASMUSMARIS_1, 
                style: style_ERASMUSMARIS_1,
                popuplayertitle: "ERASMUS MARIS",
                interactive: true,
                title: '<img src="styles/legend/ERASMUSMARIS_1.png" /> ERASMUS MARIS'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ERASMUSMARIS_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ERASMUSMARIS_1];
lyr_ERASMUSMARIS_1.set('fieldAliases', {'fid': 'fid', 'School Name': 'School Name', 'Location': 'Location', 'Image_url': 'Image_url', });
lyr_ERASMUSMARIS_1.set('fieldImages', {'fid': 'TextEdit', 'School Name': 'TextEdit', 'Location': 'TextEdit', 'Image_url': 'TextEdit', });
lyr_ERASMUSMARIS_1.set('fieldLabels', {'fid': 'no label', 'School Name': 'no label', 'Location': 'no label', 'Image_url': 'no label', });
lyr_ERASMUSMARIS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});