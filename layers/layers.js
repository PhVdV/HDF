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
cluster_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2
});
var lyr_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2, 
                style: style_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2,
                popuplayertitle: 'LocNidsArtiHDF2025 — Consolidation Clean Obs Bag HDF 2025 LlN',
                interactive: false,
    title: 'LocNidsArtiHDF2025 — Consolidation Clean Obs Bag HDF 2025 LlN<br />\
    <img src="styles/legend/LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2_0.png" /> Agoria<br />\
    <img src="styles/legend/LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2_1.png" /> Cardinal Mercier<br />\
    <img src="styles/legend/LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2_2.png" /> Montesquieu<br />\
    <img src="styles/legend/LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2_3.png" /> Pytagore<br />\
    <img src="styles/legend/LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2_4.png" /> Rabeleais<br />' });
var format_Colonies_3 = new ol.format.GeoJSON();
var features_Colonies_3 = format_Colonies_3.readFeatures(json_Colonies_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colonies_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colonies_3.addFeatures(features_Colonies_3);
var lyr_Colonies_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colonies_3, 
                style: style_Colonies_3,
                popuplayertitle: 'Colonies',
                interactive: false,
    title: 'Colonies<br />\
    <img src="styles/legend/Colonies_3_0.png" /> Agora<br />\
    <img src="styles/legend/Colonies_3_1.png" /> Cardinal Mercier<br />\
    <img src="styles/legend/Colonies_3_2.png" /> Montesquieu<br />\
    <img src="styles/legend/Colonies_3_3.png" /> Rabelais<br />\
    <img src="styles/legend/Colonies_3_4.png" /> Pythagore<br />' });
var format_Baguage_4 = new ol.format.GeoJSON();
var features_Baguage_4 = format_Baguage_4.readFeatures(json_Baguage_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Baguage_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Baguage_4.addFeatures(features_Baguage_4);
cluster_Baguage_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Baguage_4
});
var lyr_Baguage_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Baguage_4, 
                style: style_Baguage_4,
                popuplayertitle: 'Baguage',
                interactive: false,
                title: '<img src="styles/legend/Baguage_4.png" /> Baguage'
            });
var format_Poussin_5 = new ol.format.GeoJSON();
var features_Poussin_5 = format_Poussin_5.readFeatures(json_Poussin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poussin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poussin_5.addFeatures(features_Poussin_5);
cluster_Poussin_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Poussin_5
});
var lyr_Poussin_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Poussin_5, 
                style: style_Poussin_5,
                popuplayertitle: 'Poussin',
                interactive: false,
                title: '<img src="styles/legend/Poussin_5.png" /> Poussin'
            });
var format_Ponte_6 = new ol.format.GeoJSON();
var features_Ponte_6 = format_Ponte_6.readFeatures(json_Ponte_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ponte_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ponte_6.addFeatures(features_Ponte_6);
cluster_Ponte_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Ponte_6
});
var lyr_Ponte_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Ponte_6, 
                style: style_Ponte_6,
                popuplayertitle: 'Ponte',
                interactive: false,
                title: '<img src="styles/legend/Ponte_6.png" /> Ponte'
            });
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_CartoWebTOPOGREY_0,lyr_OpenStreetMap_1,],
                                fold: 'close',
                                title: 'BaseMap'});

lyr_CartoWebTOPOGREY_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2.setVisible(true);lyr_Colonies_3.setVisible(true);lyr_Baguage_4.setVisible(true);lyr_Poussin_5.setVisible(true);lyr_Ponte_6.setVisible(true);
var layersList = [group_BaseMap,lyr_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2,lyr_Colonies_3,lyr_Baguage_4,lyr_Poussin_5,lyr_Ponte_6];
lyr_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'NomColonie': 'NomColonie', 'SousGroupe': 'SousGroupe', 'wpt': 'wpt', 'NuméroNid': 'NuméroNid', 'Remarques': 'Remarques', 'Picture': 'Picture', 'NumNid': 'NumNid', 'RingNum': 'RingNum', 'Age': 'Age', 'Sex': 'Sex', 'Wing': 'Wing', 'Weigth': 'Weigth', 'NumroNid': 'NumroNid', 'RingDate': 'RingDate', 'DatePonte': 'DatePonte', 'NbrOeufs': 'NbrOeufs', 'DatePoussins': 'DatePoussins', 'NbrJeunes': 'NbrJeunes', });
lyr_Colonies_3.set('fieldAliases', {'fid': 'fid', 'NomColonie': 'NomColonie', 'area': 'area', 'perimeter': 'perimeter', });
lyr_Baguage_4.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'NomColonie': 'NomColonie', 'SousGroupe': 'SousGroupe', 'wpt': 'wpt', 'NuméroNid': 'NuméroNid', 'Remarques': 'Remarques', 'Picture': 'Picture', 'NumNid': 'NumNid', 'RingNum': 'RingNum', 'Age': 'Age', 'Sex': 'Sex', 'Wing': 'Wing', 'Weigth': 'Weigth', 'NumroNid': 'NumroNid', 'RingDate': 'RingDate', 'DatePonte': 'DatePonte', 'NbrOeufs': 'NbrOeufs', 'DatePoussins': 'DatePoussins', 'NbrJeunes': 'NbrJeunes', });
lyr_Poussin_5.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'NomColonie': 'NomColonie', 'SousGroupe': 'SousGroupe', 'wpt': 'wpt', 'NuméroNid': 'NuméroNid', 'Remarques': 'Remarques', 'Picture': 'Picture', 'NumNid': 'NumNid', 'RingNum': 'RingNum', 'Age': 'Age', 'Sex': 'Sex', 'Wing': 'Wing', 'Weigth': 'Weigth', 'NumroNid': 'NumroNid', 'RingDate': 'RingDate', 'DatePonte': 'DatePonte', 'NbrOeufs': 'NbrOeufs', 'DatePoussins': 'DatePoussins', 'NbrJeunes': 'NbrJeunes', });
lyr_Ponte_6.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'NomColonie': 'NomColonie', 'SousGroupe': 'SousGroupe', 'wpt': 'wpt', 'NuméroNid': 'NuméroNid', 'Remarques': 'Remarques', 'Picture': 'Picture', 'NumNid': 'NumNid', 'RingNum': 'RingNum', 'Age': 'Age', 'Sex': 'Sex', 'Wing': 'Wing', 'Weigth': 'Weigth', 'NumroNid': 'NumroNid', 'RingDate': 'RingDate', 'DatePonte': 'DatePonte', 'NbrOeufs': 'NbrOeufs', 'DatePoussins': 'DatePoussins', 'NbrJeunes': 'NbrJeunes', });
lyr_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2.set('fieldImages', {'fid': 'TextEdit', 'ele': 'TextEdit', 'time': 'TextEdit', 'geoidheigh': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'NomColonie': 'TextEdit', 'SousGroupe': 'TextEdit', 'wpt': 'TextEdit', 'NuméroNid': 'TextEdit', 'Remarques': 'TextEdit', 'Picture': 'Binary', 'NumNid': 'TextEdit', 'RingNum': 'Range', 'Age': 'TextEdit', 'Sex': 'TextEdit', 'Wing': 'Range', 'Weigth': 'TextEdit', 'NumroNid': 'TextEdit', 'RingDate': 'DateTime', 'DatePonte': 'DateTime', 'NbrOeufs': 'Range', 'DatePoussins': 'DateTime', 'NbrJeunes': 'Range', });
lyr_Colonies_3.set('fieldImages', {'fid': 'TextEdit', 'NomColonie': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_Baguage_4.set('fieldImages', {'fid': 'TextEdit', 'ele': 'TextEdit', 'time': 'TextEdit', 'geoidheigh': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'NomColonie': 'TextEdit', 'SousGroupe': 'TextEdit', 'wpt': 'TextEdit', 'NuméroNid': 'TextEdit', 'Remarques': 'TextEdit', 'Picture': 'Binary', 'NumNid': 'TextEdit', 'RingNum': 'Range', 'Age': 'TextEdit', 'Sex': 'TextEdit', 'Wing': 'Range', 'Weigth': 'TextEdit', 'NumroNid': 'TextEdit', 'RingDate': 'DateTime', 'DatePonte': 'DateTime', 'NbrOeufs': 'Range', 'DatePoussins': 'DateTime', 'NbrJeunes': 'Range', });
lyr_Poussin_5.set('fieldImages', {'fid': 'TextEdit', 'ele': 'TextEdit', 'time': 'TextEdit', 'geoidheigh': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'NomColonie': 'TextEdit', 'SousGroupe': 'TextEdit', 'wpt': 'TextEdit', 'NuméroNid': 'TextEdit', 'Remarques': 'TextEdit', 'Picture': 'Binary', 'NumNid': 'TextEdit', 'RingNum': 'Range', 'Age': 'TextEdit', 'Sex': 'TextEdit', 'Wing': 'Range', 'Weigth': 'TextEdit', 'NumroNid': 'TextEdit', 'RingDate': 'DateTime', 'DatePonte': 'DateTime', 'NbrOeufs': 'Range', 'DatePoussins': 'DateTime', 'NbrJeunes': 'Range', });
lyr_Ponte_6.set('fieldImages', {'fid': 'TextEdit', 'ele': 'TextEdit', 'time': 'TextEdit', 'geoidheigh': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'NomColonie': 'TextEdit', 'SousGroupe': 'TextEdit', 'wpt': 'TextEdit', 'NuméroNid': 'TextEdit', 'Remarques': 'TextEdit', 'Picture': 'Binary', 'NumNid': 'TextEdit', 'RingNum': 'Range', 'Age': 'TextEdit', 'Sex': 'TextEdit', 'Wing': 'Range', 'Weigth': 'TextEdit', 'NumroNid': 'TextEdit', 'RingDate': 'DateTime', 'DatePonte': 'DateTime', 'NbrOeufs': 'Range', 'DatePoussins': 'DateTime', 'NbrJeunes': 'Range', });
lyr_LocNidsArtiHDF2025ConsolidationCleanObsBagHDF2025LlN_2.set('fieldLabels', {'fid': 'no label', 'ele': 'no label', 'time': 'no label', 'geoidheigh': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'NomColonie': 'no label', 'SousGroupe': 'no label', 'wpt': 'no label', 'NuméroNid': 'no label', 'Remarques': 'no label', 'Picture': 'no label', 'NumNid': 'no label', 'RingNum': 'no label', 'Age': 'no label', 'Sex': 'no label', 'Wing': 'no label', 'Weigth': 'no label', 'NumroNid': 'no label', 'RingDate': 'no label', 'DatePonte': 'no label', 'NbrOeufs': 'no label', 'DatePoussins': 'no label', 'NbrJeunes': 'no label', });
lyr_Colonies_3.set('fieldLabels', {'fid': 'no label', 'NomColonie': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_Baguage_4.set('fieldLabels', {'fid': 'no label', 'ele': 'no label', 'time': 'no label', 'geoidheigh': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'NomColonie': 'no label', 'SousGroupe': 'no label', 'wpt': 'no label', 'NuméroNid': 'no label', 'Remarques': 'no label', 'Picture': 'no label', 'NumNid': 'no label', 'RingNum': 'no label', 'Age': 'no label', 'Sex': 'no label', 'Wing': 'no label', 'Weigth': 'no label', 'NumroNid': 'no label', 'RingDate': 'no label', 'DatePonte': 'no label', 'NbrOeufs': 'no label', 'DatePoussins': 'no label', 'NbrJeunes': 'no label', });
lyr_Poussin_5.set('fieldLabels', {'fid': 'no label', 'ele': 'no label', 'time': 'no label', 'geoidheigh': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'NomColonie': 'no label', 'SousGroupe': 'no label', 'wpt': 'no label', 'NuméroNid': 'no label', 'Remarques': 'no label', 'Picture': 'no label', 'NumNid': 'no label', 'RingNum': 'no label', 'Age': 'no label', 'Sex': 'no label', 'Wing': 'no label', 'Weigth': 'no label', 'NumroNid': 'no label', 'RingDate': 'no label', 'DatePonte': 'no label', 'NbrOeufs': 'no label', 'DatePoussins': 'no label', 'NbrJeunes': 'no label', });
lyr_Ponte_6.set('fieldLabels', {'fid': 'no label', 'ele': 'no label', 'time': 'no label', 'geoidheigh': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'NomColonie': 'no label', 'SousGroupe': 'no label', 'wpt': 'no label', 'NuméroNid': 'no label', 'Remarques': 'no label', 'Picture': 'no label', 'NumNid': 'no label', 'RingNum': 'no label', 'Age': 'no label', 'Sex': 'no label', 'Wing': 'no label', 'Weigth': 'no label', 'NumroNid': 'no label', 'RingDate': 'no label', 'DatePonte': 'no label', 'NbrOeufs': 'no label', 'DatePoussins': 'no label', 'NbrJeunes': 'no label', });
lyr_Ponte_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});