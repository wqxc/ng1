(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name zhaimiRestDemo.Demos
   * @description
   * # Demos
   * Factory in the zhaimiRestDemo.
   */
  angular
    .module('zhaimiRestDemo')
    .factory('Demos', DemosFactory);

  function DemosFactory(zhaimiRest) {

    // Extend your model and collection with object or function
    var Demos = zhaimiRest.all('demos')
       // Don't add properties for model, that's too dangerous
       // !!!!!.extendModel({isModel: true})
       // Use below instead
       .extendModel({isModel: function() {return true;}})
       // equals to
       .extendModel(function(element) {
         element.isModel = function() {return true;};
         return element;
       })
       .extendCollection({isCollection: function() {return true;}})
       // equals to
       .extendCollection(function(collection) {
         collection.isCollection = function() {return true;};
         return collection;
       });

    // Legacy api, getList but with format data:{data:[]}
    // Our getList methods require formats data:[] or data:{items:[], pagination:{}}
    Demos.addRestangularMethod('getListDeprecated', 'get', 'deprecated');

    // Add special process before sending any request to server here;
    zhaimiRest.addRequestInterceptor(function(element, operation, what) {
      if (what !== 'demos') return element;
      // Please write special handling of legacy API endpoints here.
      switch (operation) {
        case 'post':
        case 'patch':
        case 'delete': {
          delete element.isModel;
        }
      }
      return element;
    });

    return Demos;
  }
})();
