(function(window, mapster){

   var options = mapster.OPTIONS,
   map = mapster.init(options);

   var markers = map.setMarkers(Locations);
   window.Map = map;

   $('header button').click(function(){
      Map.alterByProperty('category', 'Grocery', function(){
         this.setVisible(false);
      });
   });
}(window, window.Mapster));
