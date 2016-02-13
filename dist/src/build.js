(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jimvermillion/Documents/codeFellows/six_week/reacting/src/js/crud_get.js":[function(require,module,exports){
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

},{}]},{},["/Users/jimvermillion/Documents/codeFellows/six_week/reacting/src/js/crud_get.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamltdmVybWlsbGlvbi9Eb2N1bWVudHMvY29kZUZlbGxvd3Mvc2l4X3dlZWsvcmVhY3Rpbmcvc3JjL2pzL2NydWRfZ2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBSSw2QkFBNkIsdUJBQUE7QUFDakMsZUFBZSxFQUFFLFdBQVc7RUFDMUIsT0FBTztJQUNMLEtBQUssRUFBRSxFQUFFO0dBQ1YsQ0FBQztBQUNKLENBQUM7O0FBRUQsaUJBQWlCLEVBQUUsV0FBVztFQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsVUFBVSxNQUFNLEVBQUU7SUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUM7SUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDO01BQ1osS0FBSyxFQUFFLEtBQUs7S0FDYixDQUFDLENBQUM7R0FDSixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLENBQUM7O0FBRUQsb0JBQW9CLEVBQUUsV0FBVztFQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzdCLENBQUM7O0FBRUQsTUFBTSxFQUFFLFdBQVc7QUFDbkIsRUFBRTs7SUFFRSxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBO01BQ0Y7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLEVBQUU7VUFDbEMsT0FBTyxvQkFBQSxTQUFRLEVBQUEsQ0FBQSxDQUFDLEdBQUEsRUFBRyxDQUFFLElBQUksQ0FBQyxHQUFLLENBQUEsRUFBQSxHQUFBLEVBQUMsb0JBQUEsR0FBRSxFQUFBLElBQUMsRUFBQSxTQUFBLEVBQVEsSUFBSSxDQUFDLElBQVMsQ0FBQSxFQUFBLElBQUEsRUFBRSxvQkFBQSxHQUFFLEVBQUEsSUFBQyxFQUFBLGtCQUFBLEVBQWlCLElBQUksQ0FBQyxjQUFjLEVBQUMsR0FBSyxDQUFBLEVBQUEsR0FBVyxDQUFBO1NBQ3BIO01BQ0Y7QUFDUCxJQUFVLENBQUE7O0lBRU47Q0FDSDtBQUNELENBQUMsQ0FBQyxDQUFDOztBQUVILFFBQVEsQ0FBQyxNQUFNO0FBQ2Ysb0JBQUMsT0FBTyxFQUFBLENBQUEsQ0FBQyxNQUFBLEVBQU0sQ0FBQyxpQ0FBaUMsQ0FBQSxDQUFHLENBQUE7QUFDcEQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7Q0FDN0IsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgQmVhckFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbmdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgYmVhcnM6IFtdXG4gIH07XG59LFxuXG5jb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2VydmVyUmVxdWVzdCA9ICQuZ2V0KHRoaXMucHJvcHMuc291cmNlLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2cocmVzdWx0WzBdKTtcbiAgICB2YXIgYmVhcnMgPSByZXN1bHQ7XG4gICAgY29uc29sZS5sb2coYmVhcnMpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYmVhcnM6IGJlYXJzXG4gICAgfSk7XG4gIH0uYmluZCh0aGlzKSk7XG59LFxuXG5jb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2VydmVyUmVxdWVzdC5hYm9ydCgpO1xufSxcblxucmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICB7XG4gICAgICAgIHRoaXMuc3RhdGUuYmVhcnMubWFwKGZ1bmN0aW9uKGJlYXIpIHtcbiAgICAgICAgICByZXR1cm4gPHNlY3Rpb24ga2V5PXtiZWFyLl9pZH0+IDxwPiBuYW1lOiB7YmVhci5uYW1lfTwvcD4gIDxwPmZpc2hQcmVmZXJlbmNlOiB7YmVhci5maXNoUHJlZmVyZW5jZX0gPC9wPiA8L3NlY3Rpb24+XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9kaXY+XG5cbiAgKTtcbn1cbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoXG48QmVhckFwcCBzb3VyY2U9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2JlYXJzXCIgLz4sXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7XG4iXX0=
