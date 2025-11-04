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
var format_Colonies_2 = new ol.format.GeoJSON();
var features_Colonies_2 = format_Colonies_2.readFeatures(json_Colonies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colonies_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colonies_2.addFeatures(features_Colonies_2);
var lyr_Colonies_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colonies_2, 
                style: style_Colonies_2,
                popuplayertitle: 'Colonies',
                interactive: false,
    title: 'Colonies<br />\
    <img src="styles/legend/Colonies_2_0.png" /> Agora<br />\
    <img src="styles/legend/Colonies_2_1.png" /> Cardinal Mercier<br />\
    <img src="styles/legend/Colonies_2_2.png" /> Montesquieu<br />\
    <img src="styles/legend/Colonies_2_3.png" /> Rabelais<br />\
    <img src="styles/legend/Colonies_2_4.png" /> Pythagore<br />' });
var format_Baguage_3 = new ol.format.GeoJSON();
var features_Baguage_3 = format_Baguage_3.readFeatures(json_Baguage_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Baguage_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Baguage_3.addFeatures(features_Baguage_3);
cluster_Baguage_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Baguage_3
});
var lyr_Baguage_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Baguage_3, 
                style: style_Baguage_3,
                popuplayertitle: 'Baguage',
                interactive: false,
                title: '<img src="styles/legend/Baguage_3.png" /> Baguage'
            });
var format_Poussin_4 = new ol.format.GeoJSON();
var features_Poussin_4 = format_Poussin_4.readFeatures(json_Poussin_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poussin_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poussin_4.addFeatures(features_Poussin_4);
cluster_Poussin_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Poussin_4
});
var lyr_Poussin_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Poussin_4, 
                style: style_Poussin_4,
                popuplayertitle: 'Poussin',
                interactive: false,
                title: '<img src="styles/legend/Poussin_4.png" /> Poussin'
            });
var format_Ponte_5 = new ol.format.GeoJSON();
var features_Ponte_5 = format_Ponte_5.readFeatures(json_Ponte_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ponte_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ponte_5.addFeatures(features_Ponte_5);
cluster_Ponte_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Ponte_5
});
var lyr_Ponte_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Ponte_5, 
                style: style_Ponte_5,
                popuplayertitle: 'Ponte',
                interactive: false,
                title: '<img src="styles/legend/Ponte_5.png" /> Ponte'
            });
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_CartoWebTOPOGREY_0,lyr_OpenStreetMap_1,],
                                fold: 'close',
                                title: 'BaseMap'});

lyr_CartoWebTOPOGREY_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Colonies_2.setVisible(true);lyr_Baguage_3.setVisible(true);lyr_Poussin_4.setVisible(true);lyr_Ponte_5.setVisible(true);
var layersList = [group_BaseMap,lyr_Colonies_2,lyr_Baguage_3,lyr_Poussin_4,lyr_Ponte_5];
lyr_Colonies_2.set('fieldAliases', {'fid': 'fid', 'NomColonie': 'NomColonie', 'area': 'area', 'perimeter': 'perimeter', });
lyr_Baguage_3.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'NomColonie': 'NomColonie', 'SousGroupe': 'SousGroupe', 'wpt': 'wpt', 'NuméroNid': 'NuméroNid', 'Remarques': 'Remarques', 'Picture': 'Picture', 'NumNid': 'NumNid', 'RingNum': 'RingNum', 'Age': 'Age', 'Sex': 'Sex', 'Wing': 'Wing', 'Weigth': 'Weigth', 'NumroNid': 'NumroNid', 'RingDate': 'RingDate', 'DatePonte': 'DatePonte', 'NbrOeufs': 'NbrOeufs', 'DatePoussins': 'DatePoussins', 'NbrJeunes': 'NbrJeunes', });
lyr_Poussin_4.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'NomColonie': 'NomColonie', 'SousGroupe': 'SousGroupe', 'wpt': 'wpt', 'NuméroNid': 'NuméroNid', 'Remarques': 'Remarques', 'Picture': 'Picture', 'NumNid': 'NumNid', 'RingNum': 'RingNum', 'Age': 'Age', 'Sex': 'Sex', 'Wing': 'Wing', 'Weigth': 'Weigth', 'NumroNid': 'NumroNid', 'RingDate': 'RingDate', 'DatePonte': 'DatePonte', 'NbrOeufs': 'NbrOeufs', 'DatePoussins': 'DatePoussins', 'NbrJeunes': 'NbrJeunes', });
lyr_Ponte_5.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'NomColonie': 'NomColonie', 'SousGroupe': 'SousGroupe', 'wpt': 'wpt', 'NuméroNid': 'NuméroNid', 'Remarques': 'Remarques', 'Picture': 'Picture', 'NumNid': 'NumNid', 'RingNum': 'RingNum', 'Age': 'Age', 'Sex': 'Sex', 'Wing': 'Wing', 'Weigth': 'Weigth', 'NumroNid': 'NumroNid', 'RingDate': 'RingDate', 'DatePonte': 'DatePonte', 'NbrOeufs': 'NbrOeufs', 'DatePoussins': 'DatePoussins', 'NbrJeunes': 'NbrJeunes', });
lyr_Colonies_2.set('fieldImages', {'fid': 'TextEdit', 'NomColonie': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_Baguage_3.set('fieldImages', {'fid': 'TextEdit', 'ele': 'TextEdit', 'time': 'TextEdit', 'geoidheigh': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'NomColonie': 'TextEdit', 'SousGroupe': 'TextEdit', 'wpt': 'TextEdit', 'NuméroNid': 'TextEdit', 'Remarques': 'TextEdit', 'Picture': 'Binary', 'NumNid': 'TextEdit', 'RingNum': 'Range', 'Age': 'TextEdit', 'Sex': 'TextEdit', 'Wing': 'Range', 'Weigth': 'TextEdit', 'NumroNid': 'TextEdit', 'RingDate': 'DateTime', 'DatePonte': 'DateTime', 'NbrOeufs': 'Range', 'DatePoussins': 'DateTime', 'NbrJeunes': 'Range', });
lyr_Poussin_4.set('fieldImages', {'fid': 'TextEdit', 'ele': 'TextEdit', 'time': 'TextEdit', 'geoidheigh': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'NomColonie': 'TextEdit', 'SousGroupe': 'TextEdit', 'wpt': 'TextEdit', 'NuméroNid': 'TextEdit', 'Remarques': 'TextEdit', 'Picture': 'Binary', 'NumNid': 'TextEdit', 'RingNum': 'Range', 'Age': 'TextEdit', 'Sex': 'TextEdit', 'Wing': 'Range', 'Weigth': 'TextEdit', 'NumroNid': 'TextEdit', 'RingDate': 'DateTime', 'DatePonte': 'DateTime', 'NbrOeufs': 'Range', 'DatePoussins': 'DateTime', 'NbrJeunes': 'Range', });
lyr_Ponte_5.set('fieldImages', {'fid': 'TextEdit', 'ele': 'TextEdit', 'time': 'TextEdit', 'geoidheigh': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'NomColonie': 'TextEdit', 'SousGroupe': 'TextEdit', 'wpt': 'TextEdit', 'NuméroNid': 'TextEdit', 'Remarques': 'TextEdit', 'Picture': 'Binary', 'NumNid': 'TextEdit', 'RingNum': 'Range', 'Age': 'TextEdit', 'Sex': 'TextEdit', 'Wing': 'Range', 'Weigth': 'TextEdit', 'NumroNid': 'TextEdit', 'RingDate': 'DateTime', 'DatePonte': 'DateTime', 'NbrOeufs': 'Range', 'DatePoussins': 'DateTime', 'NbrJeunes': 'Range', });
lyr_Colonies_2.set('fieldLabels', {'fid': 'no label', 'NomColonie': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_Baguage_3.set('fieldLabels', {'fid': 'no label', 'ele': 'no label', 'time': 'no label', 'geoidheigh': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'NomColonie': 'no label', 'SousGroupe': 'no label', 'wpt': 'no label', 'NuméroNid': 'no label', 'Remarques': 'no label', 'Picture': 'no label', 'NumNid': 'no label', 'RingNum': 'no label', 'Age': 'no label', 'Sex': 'no label', 'Wing': 'no label', 'Weigth': 'no label', 'NumroNid': 'no label', 'RingDate': 'no label', 'DatePonte': 'no label', 'NbrOeufs': 'no label', 'DatePoussins': 'no label', 'NbrJeunes': 'no label', });
lyr_Poussin_4.set('fieldLabels', {'fid': 'no label', 'ele': 'no label', 'time': 'no label', 'geoidheigh': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'NomColonie': 'no label', 'SousGroupe': 'no label', 'wpt': 'no label', 'NuméroNid': 'no label', 'Remarques': 'no label', 'Picture': 'no label', 'NumNid': 'no label', 'RingNum': 'no label', 'Age': 'no label', 'Sex': 'no label', 'Wing': 'no label', 'Weigth': 'no label', 'NumroNid': 'no label', 'RingDate': 'no label', 'DatePonte': 'no label', 'NbrOeufs': 'no label', 'DatePoussins': 'no label', 'NbrJeunes': 'no label', });
lyr_Ponte_5.set('fieldLabels', {'fid': 'no label', 'ele': 'no label', 'time': 'no label', 'geoidheigh': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'NomColonie': 'no label', 'SousGroupe': 'no label', 'wpt': 'no label', 'NuméroNid': 'no label', 'Remarques': 'no label', 'Picture': 'no label', 'NumNid': 'no label', 'RingNum': 'no label', 'Age': 'no label', 'Sex': 'no label', 'Wing': 'no label', 'Weigth': 'no label', 'NumroNid': 'no label', 'RingDate': 'no label', 'DatePonte': 'no label', 'NbrOeufs': 'no label', 'DatePoussins': 'no label', 'NbrJeunes': 'no label', });
lyr_Ponte_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});