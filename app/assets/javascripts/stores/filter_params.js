(function(root) {
  'use strict';
  var CHANGE_EVENT = "change";

  var filterParams = {
    bounds: {},
    min: null,
    max: null,
  };

  var _filtered_benches = [];

  var resetMinParam = function(min) {
    filterParams.min = min;
    FilterParamsStore.onChange();
  };

  var resetMaxParam = function(max) {
    filterParams.max = max;
    FilterParamsStore.onChange();
  };

  var resetMapBounds = function(bounds) {
    filterParams.bounds = bounds.bounds;
  };

  root.FilterParamsStore = $.extend({}, EventEmitter.prototype, {
    filterParams: function() {
      return filterParams;
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    onChange: function() {
      this.emit(CHANGE_EVENT);
    },

    dispatcherID: AppDispatcher.register(function(action){
      if(action.actionType === FilterConstants.UPDATE_MIN){
        resetMinParam(action.min);
          //should be called every time the filters are being reset
      } else if(action.actionType === FilterConstants.UPDATE_MAX) {
        resetMaxParam(action.max);
      } else if(action.actionType === FilterConstants.UPDATE_BOUNDS) {
        resetMapBounds(action.bounds);
      }
    })

  });

}(this));
