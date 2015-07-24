(function(window, google, markers){

   var MAPSTER = (function(){
      function Mapster(element, options){
         this.map = new google.maps.Map(element, options);
         this.markers = markers.init();
      }
      Mapster.prototype = {
         setMarkers: function(Markers){
            var markers, i = 0;
            if (Markers.constructor === Array) {
               for (i; i < Markers.length; i++) {
                  this.setMarker(Markers[i]);
               }
            }
         },
         setMarker: function(options) {
            if (!options.position) {
               options.position = {
                  lat: options.lat,
                  lng: options.lng
               };
            } else if (options.position.constructor === Array) {
               options.position = {
                  lat: options.position[0],
                  lng: options.position[1]
               };
            }
            this._registerMarker(options)
         },
         _registerMarker: function(options) {
            this.markers.add(options);
            if (!options.hasOwnProperty('map')) options.map = this.map;
            return new google.maps.Marker(options);
         }
      };
      return Mapster;
   }());
   MAPSTER.options = {
      center: {
         lat: 0,
         lng: 0
      },
      zoom: 15
   };
   MAPSTER.init = function(options, element) {
      var canvas = element || document.getElementById('map-canvas');
      return new Mapster(canvas, options);
   };

   window.Mapster = MAPSTER;

}(window, window.google, window.Markers));
