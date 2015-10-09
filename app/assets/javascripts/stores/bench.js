(function(root){
  //when the contents of the BenchStore change, need to inform all
  //interested parties by emitting a CHANGE_EVENT
  var CHANGE_EVENT = "change";
  var _benches = [];
  var resetBenches = function(benches){
    _benches = benches;
    BenchStore.onChange();
  };

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      //return a shallow copy so consumer cannot mutate original
      return _benches.slice(0);
    },
    //functions for subscribing (and unsubscribing) to this event
    //in Bench Store
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    onChange: function() {
      this.emit(CHANGE_EVENT);
    },
    //this ensures that the store is listening to the dispatcher
    dispatcherID: AppDispatcher.register(function(action){
      if(action.actionType === BenchConstants.BENCHES_RECEIVED){
          resetBenches(action.benches);
          //should be called every time the benches are being 'reset'
      }
    })
  });

})(this);
