mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

// Initalise your map
const map = new mapboxgl.Map({
    container: 'map', // id of the container you are placing the map into
    style: 'mapbox://styles/mapbox/streets-v11', //style url - set up in the dashboard (Streets version)
    center: [174.7801001609995, -41.27896646247162], // starting position of the map [lng,lat] rememer to filp from google!!!
    zoom: 17// starting zoom level
});

// Set map container dimensions to match its parent
map.on('load', function() {
    map.resize();
})

// Get the marker element from the html:
const customMarker1 = document.getElementById('custom-marker1');
const customMarker2 = document.getElementById('custom-marker2');

// Add Markers to your Map:
new mapboxgl.Marker(customMarker1)
    .setLngLat([174.7801001609995, -41.27896646247162])
    //add properties details to the marker
    .setPopup(new mapboxgl.Popup({offset: 25}).setHTML("<h3>Yoobee Colleges</h3><p>2 Bunny Street, Wellington</p>"))
    .addTo(map);

new mapboxgl.Marker(customMarker2)
    .setLngLat([174.776668454253, -41.291128378095955])
    //add properties details to the marker
    .setPopup(new mapboxgl.Popup({offset: 25}).setHTML("<h3>EB Games</h3><p>Cuba St, Wellington</p>"))
    .addTo(map);

// Fly To
function flyToLocation(location, zoom) {
    map.flyTo({
        center: location,
        zoom: zoom,
        essential: true // ignore prefers-reduced-motion
    });
}

const ebFlyTo = document.getElementById('fly-to-eb');

ebFlyTo.addEventListener('click', function() {
    flyToLocation([174.776668454253, -41.291128378095955], 20);
})


// Create an array of locations - 5
// Each location needs name, address, long, lat
const locations = [
    {
        name: "Yoobee",
        address: "2 Bunny St, Wellington",
        long: 174.7801001609995,
        lat: -41.291128378095955
    },
    {
        name: "LUCKY",
        address: "105 Courtenay Place, Te Aro, Wellington 6011",
        long: 174.77900854143718,
        lat: -41.292499965774255, 
    },
    {
        name: "Duck Island Ice Cream",
        address: "168 Cuba Street, Te Aro, Wellington 6011",
        long: 174.77497141207434,
        lat: -41.29427109437726, 
    },
    {
        name: "New World Supermarket Wellington City",
        address: "279 Wakefield Street, Te Aro, Wellington 6011",
        long: 174.7845317360098,
        lat: -41.29214519699563, 
    },
    {
        name: "Pizza Express Wellington",
        address: "12/148 Willis Street, Te Aro, Wellington 6011",
        long: 174.77408129468643,
        lat: -41.289797442146714, 
    }
];

locations.forEach(location => {
    // Create a HTML element for each marker
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(https://placekitten.com/g/30/30)'; // Example marker image
    el.style.width = '30px';
    el.style.height = '30px';
    el.style.backgroundSize = 'cover';

    // Create a marker for each location
    new mapboxgl.Marker(el)
        .setLngLat([location.long, location.lat])
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(`<h3>${location.name}</h3><p>${location.address}</p>`))
        .addTo(map);

    // Add click event to fly to the location
    el.addEventListener('click', () => {
        map.flyTo({
            center: [location.long, location.lat],
            zoom: 15,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    });
});