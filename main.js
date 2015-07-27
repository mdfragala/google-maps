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

(function(window, google, markers){

   var MAPSTER = (function(){
      function Mapster(element, options){
         this.map = new google.maps.Map(element, options);
         this.markers = markers.init();
      }
      Mapster.prototype = {
         alterByProperty: function(property, value, action) {
            var alter = action;
            this.markers.find(property, value, function(matches){
               matches.forEach(function(match){
                  alter.call(match);
               });
            });
         },
         setMarkers: function(Markers){
            var markers, i = 0;
            if (Markers.constructor === Array) {
               for (i; i < Markers.length; i++) {
                  this._registerMarker(Markers[i]);
               }
            }
         },
         setMarker: function(options) {
            this._registerMarker(options)
         },
         _registerMarker: function(options) {
            var newMarker;
            if (!options.hasOwnProperty('map')) options.map = this.map;
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
            this.markers.add(new google.maps.Marker(options));
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

var ___ = '0,0';
var Locations = [
   /* Bars & Restaurants */
   {
      title: 'Barking Dog Ale House',
      position: [42.7726522,-71.0859531],
      address: '77 Wahsington St.',
      category: 'Bars & Restaurants'
   },
   {
      title: 'Blue Finn Grille',
      position: [42.7725244,-71.0857956],
      address: '128 Washington St.',
      category: 'Bars & Restaurants'
   },
   {
      title: 'Butch’s Uptown',
      position: [42.7739467,-71.0859905],
      address: '63 Locke St.',
      category: 'Bars & Restaurants'
   },
   {
      title: 'Casa Blanca Mexican Restaurant',
      position: [42.7733034,-71.083327],
      address: '2 Essex St.',
      category: 'Bars & Restaurants'
   },
   {
      title: 'Essex Street Grille',
      position: [42.7743011,-71.0834698],
      address: '25 Essex St',
      category: 'Bars & Restaurants'
   },
   {
      title: 'The Grill Next Door',
      position: [42.7849449,-71.127618],
      address: '653 Broadway',
      category: 'Bars & Restaurants'
   },
   {
      title: 'Hans Garden',
      position: [42.7726522,-71.0859531],
      address: '114 Washington St',
      category: 'Bars & Restaurants'
   },
   {
      title: 'Keon’s',
      position: [42.7726522,-71.0859531],
      address: '105 Washington St.',
      category: 'Bars & Restaurants'
   },
   {
      title: 'Krueger Flatbread',
      position: [42.773881,-71.0869151],
      address: '142 Essex St',
      category: 'Bars & Restaurants'
   },
   {
      title: 'Maria’s Family Restaurant',
      position: [42.7746329,-71.0848048],
      address: '81 Essex St',
      category: 'Bars & Restaurants'
   },
   {
      title: 'The Peddler’s Daughter',
      position: [42.7726522,-71.0859531],
      address: ' 45 Wingate St',
      category: 'Bars & Restaurants'
   },
   {
      title: 'Phoenician Restaurant',
      position: [42.7751764,-71.1298442],
      address: '12 Alpha St',
      category: 'Bars & Restaurants'
   },
   {
      title: 'The Tap Brewing Company',
      position: [42.7726522,-71.0859531],
      address: '100 Washington St',
      category: 'Bars & Restaurants'
   },
   {
      title: 'Wang’s Table',
      position: [42.7728024,-71.0849125],
      address: ' 46 Washington St',
      category: 'Bars & Restaurants'
   },
   {
      title: 'Wicked Big Café',
      position: [42.7737957,-71.0832759],
      address: '19 Essex St',
      category: 'Bars & Restaurants'
   },
   /* Grocery */
   {
      title: 'Haverhill Beef Co.',
      position: [42.7745897,-71.0796493],
      address: '117 Merrimack St',
      category: 'Grocery'
   },
   {
      title: 'Market Basket',
      position: [42.7759328,-71.0748312],
      address: '2 Water St',
      category: 'Grocery'
   },
   {
      title: 'Market Basket ',
      position: [42.7630428,-71.037669],
      address: '285 Lincoln Ave',
      category: 'Grocery'
   },
   {
      title: 'Market Basket ',
      position: [42.7736837,-71.1154427],
      address: '400 Lowell Ave',
      category: 'Grocery'
   },
   {
      title: 'Shaw’s',
      position: [42.8163226,-71.1042237],
      address: '4 Plaistow Rd. Plaistow, NH',
      category: 'Grocery'
   },
   /* Shopping */
   {
      title: 'Cedar Brook Plaza',
      position: [42.8158927,-71.1048929],
      address: ' 4 Plaistow Rd, Plaistow NH',
      category: 'Shopping'
   },
   {
      title: 'Westgate Plaza',
      position: [42.7747494,-71.1158048],
      address: '400 Lowell Ave',
      category: 'Shopping'
   },
   {
      title: 'River’s Edge Plaza',
      position: [42.7638109,-71.0394869],
      address: '237 Lincoln Ave',
      category: 'Shopping'
   },
   {
      title: 'Central Plaza',
      position: [42.7759935,-71.0751479],
      address: '2 Water Street',
      category: 'Shopping'
   },
   {
      title: 'Target',
      position: [42.7863764,-71.1191918],
      address: '35 Computer Dr',
      category: 'Shopping'
   },
   {
      title: 'BJ’s Wholesale Club',
      position: [42.7624824,-71.1671394],
      address: '25 Shelley Rd',
      category: 'Shopping'
   },
   {
      title: 'Riverside Cycle',
      position: [42.7767057,-71.0683298],
      address: '1 Ginty Blvd',
      category: 'Shopping'
   },
   {
      title: 'Angles & Art',
      position: [42.7733756,-71.0852567],
      address: '80 Wingate Street',
      category: 'Shopping'
   },
   {
      title: 'The Color Mint',
      position: [42.7730481,-71.084196],
      address: '25 Railroad Square',
      category: 'Shopping'
   },
   {
      title: 'Kimball Tavern Antiques',
      position: [42.7677347,-71.083365],
      address: '2 Salem St',
      category: 'Shopping'
   },
   {
      title: 'Positive Images',
      position: [42.7735292,-71.0851378],
      address: '61 Wingate St',
      category: 'Shopping'
   },
   {
      title: 'Vintage View Inc',
      position: [42.7662953,-71.0963555],
      address: '371 River St',
      category: 'Shopping'
   },
   /* Services */
   // {
   //    title: '___',
   //    position: [___],
   //    address: '___'
   // },
   // {
   //    title: '___',
   //    position: [___],
   //    address: '___'
   // },
   // {
   //    title: '___',
   //    position: [___],
   //    address: '___'
   // },
   // {
   //    title: '___',
   //    position: [___],
   //    address: '___'
   // },
   // {
   //    title: '___',
   //    position: [___],
   //    address: '___'
   // },
   // {
   //    title: '___',
   //    position: [___],
   //    address: '___'
   // },
   // {
   //    title: '___',
   //    position: [___],
   //    address: '___'
   // },
   // {
   //    title: '___',
   //    position: [___],
   //    address: '___'
   // },
   // {
   //    title: '___',
   //    position: [___],
   //    address: '___'
   // },
   // {
   //    title: '___',
   //    position: [___],
   //    address: '___'
   // },
   // {
   //    title: '___',
   //    position: [___],
   //    address: '___'
   // },
   // {
   //    title: '___',
   //    position: [___],
   //    address: '___'
   // },
   // {
   //    title: '___',
   //    position: [___],
   //    address: '___'
   // },
];

(function(window, mapster){
   mapster.OPTIONS = {
      center: {
         lat: 42.773241,
         lng: -71.084222
      },
      zoom: 15
   };
}(window, Mapster || (Mapster = {})));

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
