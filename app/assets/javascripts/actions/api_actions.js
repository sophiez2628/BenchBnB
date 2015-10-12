ApiActions = {
  receiveAll: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  receiveNewBench: function(bench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.NEW_BENCH,
      bench: bench
    });
  }

};
