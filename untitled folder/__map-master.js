(function(window, google, markers) {
   var MAPSTER = (function(){
      function MAPSTER (canvas, options) {
         this.map = new google.maps.Map(canvas, options);
         this.markers = markers.create();
      }
      MAPSTER.prototype = {
         setMarker: function(marker){
         }
      }
      return MAPSTER;
   }());
   MAPSTER.init = function(options, element) {
      var canvas = element || document.getElementById('map-canvas');
      return new Mapster(canvas, options);
   }
   window.MAPSTER = MAPSTER;
}(window, window.google, window.MARKERS));
