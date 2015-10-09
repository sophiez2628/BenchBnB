ApiUtil = {
  fetchBenches: function(){
    //make an api call using AJAX in here
    $.ajax({
      url: '/api/bench',
      type: 'GET',
      dataType: 'json',
      success: function(benches) {
        ApiActions.receiveAll(benches);
        //ajax get request gets all of the bench objects
        //passes the data to an action object
        //thus, the source of the action is the ApiUtil
      }
    })
  }
}