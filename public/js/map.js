// // code for map 

//       mapboxgl.accessToken = mapToken;
      
//         const map = new mapboxgl.Map({
//             accessToken: mapToken,
//             container: 'map', // container ID
//             center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
//             zoom: 10 // starting zoom
//         });

//         console.log(coordinates);
// // now our map token is present in env(enviroment variable file) so we can't directly acess it from public files 
// // so for this we are going to run an script in show.ejs file which will 

// // marker = means pinpoint location shown by some marker in map
//  // Create a default Marker and add it to the map.
// const marker = new mapboxgl.Marker({color : 'red'})
//     .setLngLat(coordinates)
//     .setPopup(new mapboxgl.Popup({offset: 25})) // seeting the pop up means when we hover from marker then we can show some text written on it
//     .setHTML("<h1>Hello World!</h1>")
//     .addTo(map);  


mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // map style (required)
    center: coordinates, // starting position [lng, lat]
    zoom: 8 // starting zoom
});

console.log(coordinates);

// add zoom/compass controls in top-right corner
map.addControl(new mapboxgl.NavigationControl(), 'top-right');

// marker = means pinpoint location shown by some marker in map
// Create a default Marker and add it to the map.
const marker = new mapboxgl.Marker({color: '#ff7e5f'}) // matched site's accent color
    .setLngLat(coordinates)
    .setPopup(
        new mapboxgl.Popup({offset: 25})
            .setHTML(`
                <p class="popup-title">${listingTitle}</p>
                <p class="popup-location">${listingLocation}, ${listingCountry}</p>
                <p class="popup-note">📍 Exact location provided after booking</p>
            `)
    )
    .addTo(map);