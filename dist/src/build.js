(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Q_X/Desktop/code401/reacting/src/js/crud_get.js":[function(require,module,exports){
var BearApp = React.createClass({displayName: "BearApp",
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

    React.createElement("div", null, 
      
        this.state.bears.map(function(bear) {
          return React.createElement("section", {key: bear._id}, " ", React.createElement("p", null, " name: ", bear.name), "  ", React.createElement("p", null, "fishPreference: ", bear.fishPreference, " "), " ")
        })
      
    )

  );
}
});

ReactDOM.render(
React.createElement(BearApp, {source: "http://localhost:3000/api/bears"}),
document.getElementById('app')
);

},{}]},{},["/Users/Q_X/Desktop/code401/reacting/src/js/crud_get.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvUV9YL0Rlc2t0b3AvY29kZTQwMS9yZWFjdGluZy9zcmMvanMvY3J1ZF9nZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLDZCQUE2Qix1QkFBQTtBQUNqQyxlQUFlLEVBQUUsV0FBVztFQUMxQixPQUFPO0lBQ0wsS0FBSyxFQUFFLEVBQUU7R0FDVixDQUFDO0FBQ0osQ0FBQzs7QUFFRCxpQkFBaUIsRUFBRSxXQUFXO0VBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFVLE1BQU0sRUFBRTtJQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUM7TUFDWixLQUFLLEVBQUUsS0FBSztLQUNiLENBQUMsQ0FBQztHQUNKLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDaEIsQ0FBQzs7QUFFRCxvQkFBb0IsRUFBRSxXQUFXO0VBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDN0IsQ0FBQzs7QUFFRCxNQUFNLEVBQUUsV0FBVztBQUNuQixFQUFFOztJQUVFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7TUFDRjtRQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksRUFBRTtVQUNsQyxPQUFPLG9CQUFBLFNBQVEsRUFBQSxDQUFBLENBQUMsR0FBQSxFQUFHLENBQUUsSUFBSSxDQUFDLEdBQUssQ0FBQSxFQUFBLEdBQUEsRUFBQyxvQkFBQSxHQUFFLEVBQUEsSUFBQyxFQUFBLFNBQUEsRUFBUSxJQUFJLENBQUMsSUFBUyxDQUFBLEVBQUEsSUFBQSxFQUFFLG9CQUFBLEdBQUUsRUFBQSxJQUFDLEVBQUEsa0JBQUEsRUFBaUIsSUFBSSxDQUFDLGNBQWMsRUFBQyxHQUFLLENBQUEsRUFBQSxHQUFXLENBQUE7U0FDcEg7TUFDRjtBQUNQLElBQVUsQ0FBQTs7SUFFTjtDQUNIO0FBQ0QsQ0FBQyxDQUFDLENBQUM7O0FBRUgsUUFBUSxDQUFDLE1BQU07QUFDZixvQkFBQyxPQUFPLEVBQUEsQ0FBQSxDQUFDLE1BQUEsRUFBTSxDQUFDLGlDQUFpQyxDQUFBLENBQUcsQ0FBQTtBQUNwRCxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztDQUM3QixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBCZWFyQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBiZWFyczogW11cbiAgfTtcbn0sXG5cbmNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZXJ2ZXJSZXF1ZXN0ID0gJC5nZXQodGhpcy5wcm9wcy5zb3VyY2UsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHRbMF0pO1xuICAgIHZhciBiZWFycyA9IHJlc3VsdDtcbiAgICBjb25zb2xlLmxvZyhiZWFycyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBiZWFyczogYmVhcnNcbiAgICB9KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn0sXG5cbmNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZXJ2ZXJSZXF1ZXN0LmFib3J0KCk7XG59LFxuXG5yZW5kZXI6IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5iZWFycy5tYXAoZnVuY3Rpb24oYmVhcikge1xuICAgICAgICAgIHJldHVybiA8c2VjdGlvbiBrZXk9e2JlYXIuX2lkfT4gPHA+IG5hbWU6IHtiZWFyLm5hbWV9PC9wPiAgPHA+ZmlzaFByZWZlcmVuY2U6IHtiZWFyLmZpc2hQcmVmZXJlbmNlfSA8L3A+IDwvc2VjdGlvbj5cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cblxuICApO1xufVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihcbjxCZWFyQXBwIHNvdXJjZT1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYmVhcnNcIiAvPixcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcbiJdfQ==
