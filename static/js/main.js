//import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

/*const map = new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ],
    view: new View({
        center: [0, 0],
        zoom: 2
    })
});*/


// Inizializza la mappa
const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM() // Utilizza OpenStreetMap come layer di base
        })
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 2
    })
});