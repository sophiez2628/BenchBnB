var Filter = React.createClass({
  _onChange: function(e) {
    switch (e.currentTarget.name) {
      case "minSeats":
        var min = e.currentTarget.value;
        FilterActions.updateMin(min);
        break;
      case "maxSeats":
        var max = e.currentTarget.value;
        FilterActions.updateMax(max);
        break;
    }
   },

  render: function() {
    return (
      <div>
        MinSeats: <input type="text" name="minSeats" onChange={this._onChange} />
        MaxSeats: <input type="text" name="maxSeats" onChange={this._onChange}/>
      </div>
    );
  }
});
