var Map = React.createClass({
  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.mymap = new google.maps.Map(map, mapOptions);
    BenchStore.addChangeListener(this.onChange);
    //the idle event is fired when the map becomes idle after panning or zooming
    google.maps.event.addListener(this.mymap, 'idle', this._idleCallBack);
    //adds an event listener onto the map
    google.maps.event.addListener(this.mymap, 'click', this.onClickMapHandler)
  },

  _idleCallBack: function() {
    var latLngBounds = this.mymap.getBounds();
    var northEast = latLngBounds.getNorthEast();
    var southWest = latLngBounds.getSouthWest();
    var bounds = { "bounds": {
                  "northEast": {"lat": northEast.J.toString(), "lng": northEast.M.toString()},
                  "southWest": {"lat": southWest.J.toString(), "lng": southWest.M.toString()} }
                };
    FilterActions.updateMapBounds(bounds);
    ApiUtil.fetchBenches(bounds);
  },

  onChange: function() {
    //create markers for every bench in array
    this.markers = this.markers || [];
    while (this.markers.length) {
      var popped = this.markers.pop().setMap(null);
      popped = null;
    }
    this.markers = [];
    var benches = BenchStore.all();
    benches.forEach(function(bench) {
      var marker = new google.maps.Marker({
        position: {lat: bench.lat, lng: bench.lng },
        title: bench.description
      });
      this.markers.push(marker);
      marker.setMap(this.mymap);
    }.bind(this));
  },

  onClickMapHandler: function(e) {
    var lat = e.latLng.J;
    var lng = e.latLng.M;
    var coords = {lat: lat, lng: lng};
    this.props.handleMapClick(coords);
  },

  render: function() {
    return (
      <div>
        <div className="map" ref="map"></div>
      </div>
    );
  }

});
