FilterActions = {
  updateMin: function(min){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_MIN,
      min: min
    });
  },

  updateMax: function(max) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_MAX,
      max: max
    });
  },

  updateMapBounds: function(bounds) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_BOUNDS,
      bounds: bounds
    });
  }

};
