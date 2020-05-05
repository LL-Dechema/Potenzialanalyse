/* Create variable to hold map element, give initial settings to map */

    var map = L.map('map',{ center: [51.65892, 6.41601], zoom: 3});

    /* Add OpenStreetMap tile layer to map element */

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map);
