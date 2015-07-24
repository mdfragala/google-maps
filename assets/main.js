(function(window, mapster){

   var options = mapster.OPTIONS,
   map = mapster.init(options);
   var marker = map.setMarker({
      lat: 42.773241,
      lng: -71.084222,
      title: 'Somewhere',
      visible: true
   });
   var locations = [
      {
         title: 'Barking Dog Ale House',
         lat: 42.7726522,
         lng: -71.0859531,
      },
      {
         title: 'Blue Finn Grille',
         lat: 42.7725244,
         lng: -71.0857956
      }
   ];
   var markers = map.setMarkers(Locations);
   window.Map = map;
}(window, window.Mapster));
