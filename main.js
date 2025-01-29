var map = L.map('map').setView([15.5595391, -88.0061586], 16); //direccion

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([15.5595391, -88.0061586], 16).addTo(map); //efecto de donde es y el mensaje
marker.bindPopup("<b>Hello, I'm Infonet.!</b><br>I am the best company.").openPopup();

