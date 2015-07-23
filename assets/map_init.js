(function(window, google, mapster){

   var canvas, options, markers, map;
   canvas = document.getElementById('#map-canvas'),
   options = mapster.OPTIONS;
   markers = mapster.MARKERS;
   map = google.maps.Map(canvas, options);

   function setMarkers(Markers, map) {
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
  }(markers, map);

}(window, window.google, window.Mapster));
