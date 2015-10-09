var BenchIndex = React.createClass({
  getInitialState: function() {
    return { benches: window.BenchStore.all() };
  },

  componentDidMount: function() {
    BenchStore.addChangeListener(this.onChange);
  },

  onChange: function() {
    this.setState({benches: window.BenchStore.all()});
  },

  render: function() {
    return (
      <div>
        {
          this.state.benches.map(function(bench) {
            return (<li key={bench.id}>{bench}</li>);
          })
        }
      </div>
    );
  }
});
