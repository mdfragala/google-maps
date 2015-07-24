(function(window) {
   var Markers = (function() {
      function Markers() {
         this.list = [];
      }
      Markers.prototype = {
         add: function(item) {
            this.list.push(item);
         },
         remove: function(item) {
            var index = this.list.indexOf(item);
            if (index !== -1) this.items.splice(index,1);
         },
         find: function(callback, action) {
            //var callbackReturn,

         }
      };
      return Markers;
   }());

   Markers.init = function() {
      return new Markers();
   };

   window.Markers = Markers;

}(window));
