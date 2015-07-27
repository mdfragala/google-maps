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
         find: function(property, value, action) {
            var matches = [], i = 0;
            for (i; i < this.list.length; i++) {
               if (this.list[i][property] === value) {
                  matches.push(this.list[i]);
               }
            }
            if (action) action.call(this, matches);
            return matches;
         }
      };
      return Markers;
   }());

   Markers.init = function() {
      return new Markers();
   };

   window.Markers = Markers;

}(window));
