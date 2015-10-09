var Map = React.createClass({
  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.mymap = new google.maps.Map(map, mapOptions);
    BenchStore.addChangeListener(this.onChange);
    this.listenForMove();
  },

  listenForMove: function() {
    ApiUtil.fetchBenches();
  },

  onChange: function() {
    //create markers for every bench in array
    var benches = BenchStore.all();
    benches.forEach(function(bench) {
      var marker = new google.maps.Marker({
        position: {lat: bench.lat, lng: bench.lng },
        title: bench.description
      });
      marker.setMap(this.mymap);
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <div className="map" ref="map"></div>
      </div>
    );
  }

});
