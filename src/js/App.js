var BearApp = React.createClass({
getInitialState: function() {
  return {
    bears: []
  };
},

componentDidMount: function() {
  this.serverRequest = $.get(this.props.source, function (result) {
    console.log(result[0]);
    var bears = result;
    console.log(bears);
    this.setState({
      bears: bears
    });
  }.bind(this));
},

componentWillUnmount: function() {
  this.serverRequest.abort();
},

render: function() {
  return (
    <div>
      {
        this.state.bears.map(function(bear) {
          return <section key={bear._id}> 
              <p> name: {bear.name}</p>  
              <p>fishPreference: {bear.fishPreference} </p> 
              <p>{this.key}</p>
            </section>
        })
      }
    </div>

  );
}
});

ReactDOM.render(
<BearApp source="http://localhost:3000/api/bears" />,
document.getElementById('app')
);
