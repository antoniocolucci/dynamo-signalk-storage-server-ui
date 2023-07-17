jQuery(function () {
    updateDateTime();
});

function updateDateTime() {
    var now = new Date();
    var dateTimeElement = document.getElementById("currentDateTime");
    dateTimeElement.textContent = now.toLocaleString();
}

// Aggiorna l'orario ogni secondo
setInterval(updateDateTime, 1000);

// The map
var map = new ol.Map ({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM() // Utilizza OpenStreetMap come layer di base
        })
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 2
    }),
});

// Create Timeline control
var tline = new ol.control.Timeline({
    className: 'ol-pointer',
    features: [{
        text: 2023,
        date: new Date('2023/01/01'),
        endDate: new Date('2023/12/31')
    }],
    graduation: 'day', // 'month'
    minDate: new Date('2023/01/01'),
    maxDate: new Date('2023/12/31'),
    getHTML: function(f){ return 2023; },
    getFeatureDate: function(f){ return f.date; },
    endFeatureDate: function(f) { return f.endDate }
});
map.addControl (tline);

// Set the date when ready
setTimeout(function(){ tline.setDate('2023'); });
tline.addButton ({
    className: "go",
    title: "GO!",
    handleClick: function() {
        go();
    }
});

// Run on the timeline
var running = false;
var start = new Date('2023');
var end = new Date('2023');
function go(next) {
    var date = tline.getDate();
    if (running) clearTimeout(running);
    if (!next) {
        // stop
        if (date>start && date<end && running) {
            running = false;
            tline.element.classList.remove('running');
            return;
        }
        if (date > end) {
            date = start;
        }
    }
    if (date > end) {
        tline.element.classList.remove('running');
        return;
    }
    if (date < start) {
        date = start;
    }
    // 1 day
    date = new Date(date.getTime() + 24*60*60*1000);
    tline.setDate(date, { anim:false });
    // next
    tline.element.classList.add('running');
    running = setTimeout(function() { go(true); }, 100);
}