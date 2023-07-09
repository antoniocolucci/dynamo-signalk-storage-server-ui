jQuery(function () {
    initMap();
    updateDateTime();
});


// Inizializza la mappa
function initMap() {
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
}

function updateDateTime() {
    var now = new Date();
    var dateTimeElement = document.getElementById("currentDateTime");
    dateTimeElement.textContent = now.toLocaleString();
}

// Aggiorna l'orario ogni secondo
setInterval(updateDateTime, 1000);
