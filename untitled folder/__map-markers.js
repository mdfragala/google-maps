(function(window){
   var MARKERS = (function(){
      function Markers () {
         this.list = [];
      }
      Markers.prototype = {
         add: function(item){
            this.list.push(item);
         },
         remove: function(item){
            var index = this.list.indexOf(item);
            if (index !== -1) this.list.splice(index,1);
         },
         find: function(item){

         }
      }
      return Markers;
   }());
   MARKERS.create = function(){
      return new Markers();
   }
   window.MARKERS = MARKERS;
}(window));
