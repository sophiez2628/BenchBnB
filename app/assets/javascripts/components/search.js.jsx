var Search = React.createClass({
  //why is the Search component holding the params as part of its state?
  getInitialState: function() {
    return { params: window.FilterParamsStore.filterParams() };
  },

  componentDidMount: function() {
    window.FilterParamsStore.addChangeListener(this.onChange);
  },

  onChange: function() {
    //what should happen when filter params are applied?
    //benches should be re-rendered to reflect the filter
    this.setState({ params: window.FilterParamsStore.filterParams() });
    ApiUtil.fetchBenches(this.state.params);
  },

  handleMapClick: function(coords) {
    //passing the coordinates object as a third argument to pushState
    //turns the object into a query string and appends it to the url
    this.props.history.pushState(null,'benches/new',coords);
  },

  render: function() {
    return (
      <div>
        <Filter />
        <Map handleMapClick={this.handleMapClick}/>
        <BenchIndex />
      </div>
    );
  }
});
