var Search = React.createClass({
  handleMapClick: function(coords) {
    //passing the coordinates object as a third argument to pushState
    //turns the object into a query string and appends it to the url 
    this.props.history.pushState(null,'benches/new',coords);
  },

  render: function() {
    return (
      <div>
        <Map handleMapClick={this.handleMapClick}/>
        <BenchIndex />
      </div>
    )
  }
});
