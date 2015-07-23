var map;

function initialize() {

  var mapCanvas = document.getElementById('map-canvas'),
    haverhill = new google.maps.LatLng(42.776201, -71.077280),
    mapOptions = {
      zoom: 15,
      center: haverhill
    },


  map = new google.maps.Map(mapCanvas, mapOptions);

  function addMarkers(Markers, map) {
    var marker, i = 0;
    if (Markers.constructor === Object) {
      for (marker in Markers) {
        if (Markers.hasOwnProperty(marker)) {
          var m = Markers[marker],
            coords = new google.maps.LatLng(m.coords[0], m.coords[1]),
            marker = new google.maps.Marker({
              map: map,
              position: coords,
              title: m.title
            });
        }
      }
    } else if (Markers.constructor === Array) {
      for (i; i < Markers.length; i++) {
        var m = Markers[i],
          coords = new google.maps.LatLng(m.coords[0], m.coords[1]),
          marker = new google.maps.Marker({
            map: map,
            position: coords,
            title: m.title
          });
      }
    }
  }

}
google.maps.event.addDomListener(window, 'load', initialize);

locations = [{
  title: '57 Wingate St.',
  coords: [42.773683, -71.085064]
  },{
    title: 'Kreugers Flatbread',
    coords: [42.774752,-71.086122]
  }
];
initialize().addMarkers(locations, initialize().map);
