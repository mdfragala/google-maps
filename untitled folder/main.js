(function(window, google, mapster){

   var options = mapster.options,
      canvas = document.getElementById('map-canvas');
   var Map = mapster.init({
      center: {
          lat: 42.7726873,
          lng: -71.0843355
      },
      zoom: 15
   }, canvas);

}(window, window.google, window.MAPSTER));
