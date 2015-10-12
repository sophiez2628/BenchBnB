var BenchForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var lat = e.currentTarget.lat.value;
    var lng = e.currentTarget.lng.value;
    var description = e.currentTarget.description.value;
    ApiUtil.createBench({lat: lat, lng: lng, description: description});
  },


  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Lat: <input type="text" name="lat" value={this.props.location.query.lat}/>
          Lng: <input type="text" name="lng" value={this.props.location.query.lng}/>
          Description: <input name="description" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }


});
