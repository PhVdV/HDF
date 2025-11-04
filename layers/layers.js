var wms_layers = [];

var lyr_CartoWebTOPOGREY_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://cartoweb.wms.ngi.be/service",
                              attributions: ' ',
                              params: {
                                "LAYERS": "topo_grey",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'CartoWeb-TOPO-GREY',
                            popuplayertitle: 'CartoWeb-TOPO-GREY',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CartoWebTOPOGREY_0, 0]);
var lyr_OpenStreetMap_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://osm-demo.wheregroup.com/service",
                              attributions: ' ',
                              params: {
                                "LAYERS": "osm",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'OpenStreetMap',
                            popuplayertitle: 'OpenStreetMap',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OpenStreetMap_1, 0]);
var format_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2 = new ol.format.GeoJSON();
var features_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2 = format_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2.readFeatures(json_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2.addFeatures(features_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2);
var lyr_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2, 
                style: style_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2,
                popuplayertitle: 'LocNidsArtiHDF2025 — Consolidation Clean Obs Bag HDF 2025 LlN',
                interactive: true,
    title: 'LocNidsArtiHDF2025 — Consolidation Clean Obs Bag HDF 2025 LlN<br />\
    <img src="styles/legend/LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2_0.png" /> Agoria<br />\
    <img src="styles/legend/LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2_1.png" /> Cardinal Mercier<br />\
    <img src="styles/legend/LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2_2.png" /> Montesquieu<br />\
    <img src="styles/legend/LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2_3.png" /> Pytagore<br />\
    <img src="styles/legend/LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2_4.png" /> Rabeleais<br />' });
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_CartoWebTOPOGREY_0,lyr_OpenStreetMap_1,],
                                fold: 'close',
                                title: 'BaseMap'});

lyr_CartoWebTOPOGREY_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2.setVisible(true);
var layersList = [group_BaseMap,lyr_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2];
lyr_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'NomColonie': 'NomColonie', 'SousGroupe': 'SousGroupe', 'wpt': 'wpt', 'NuméroNid': 'NuméroNid', 'Remarques': 'Remarques', 'Picture': 'Picture', 'NumNid': 'NumNid', 'RingNum': 'RingNum', 'Age': 'Age', 'Sex': 'Sex', 'Wing': 'Wing', 'Weigth': 'Weigth', 'NumroNid': 'NumroNid', 'RingDate': 'RingDate', 'DatePonte': 'DatePonte', 'NbrOeufs': 'NbrOeufs', 'DatePoussins': 'DatePoussins', 'NbrJeunes': 'NbrJeunes', });
lyr_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2.set('fieldImages', {'fid': 'TextEdit', 'ele': 'TextEdit', 'time': 'TextEdit', 'geoidheigh': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'NomColonie': 'TextEdit', 'SousGroupe': 'TextEdit', 'wpt': 'TextEdit', 'NuméroNid': 'TextEdit', 'Remarques': 'TextEdit', 'Picture': 'Binary', 'NumNid': 'TextEdit', 'RingNum': 'Range', 'Age': 'TextEdit', 'Sex': 'TextEdit', 'Wing': 'Range', 'Weigth': 'TextEdit', 'NumroNid': 'TextEdit', 'RingDate': 'DateTime', 'DatePonte': 'DateTime', 'NbrOeufs': 'Range', 'DatePoussins': 'DateTime', 'NbrJeunes': 'Range', });
lyr_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2.set('fieldLabels', {'fid': 'no label', 'ele': 'no label', 'time': 'no label', 'geoidheigh': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'NomColonie': 'no label', 'SousGroupe': 'no label', 'wpt': 'no label', 'NuméroNid': 'no label', 'Remarques': 'no label', 'Picture': 'no label', 'NumNid': 'no label', 'RingNum': 'no label', 'Age': 'no label', 'Sex': 'no label', 'Wing': 'no label', 'Weigth': 'no label', 'NumroNid': 'no label', 'RingDate': 'no label', 'DatePonte': 'no label', 'NbrOeufs': 'no label', 'DatePoussins': 'no label', 'NbrJeunes': 'no label', });
lyr_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});