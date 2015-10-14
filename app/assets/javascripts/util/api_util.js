ApiUtil = {
  fetchBenches: function(params){
    //make an api call using AJAX in here
    $.ajax({
      url: '/api/bench',
      type: 'GET',
      data: params,
      dataType: 'json',
      success: function(benches) {
        ApiActions.receiveAll(benches);
        //ajax get request gets all of the bench objects
        //passes the data to an action object
        //thus, the source of the action is the ApiUtil
      }
    });
  },

    createBench: function(bench){
      $.ajax({
        url: '/api/bench',
        type: 'POST',
        data: bench,
        dataType: 'json',
        success: function(bench) {
          ApiActions.receiveNewBench(bench);
        }
    });
  }

};
