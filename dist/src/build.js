(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Q_X/Desktop/code401/reacting/src/js/crud_get.js":[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var BearApp = React.createClass({displayName: "BearApp",

getInitialState: function() {
  return {
    bears: []
  };
},

loadBearsFromServer: function() {
  $.ajax({
    url: this.props.source,
    type: 'GET',
    success: function (data) {
      this.setState({
        bears:data
      })
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(this.props.source, status, err.toString());
    }.bind(this)
  });
},

componentDidMount: function() {
  this.loadBearsFromServer();
  setInterval(this.loadBearsFromServer,1000);
},

componentWillUnmount: function() {
  this.serverRequest.abort();
},

render: function() {
  return (
    React.createElement("div", {className: "bearList"}, 
      
        this.state.bears.map(function(bear) {
          return
            React.createElement("section", {key: bear._id}, 
              React.createElement("p", null, " name: ", bear.name), 
              React.createElement("p", null, "fishPreference: ", bear.fishPreference, " "), 
              React.createElement("p", null, "Delete")
            )
        })
      
    )

  );
}
});

ReactDOM.render(
React.createElement(BearApp, {source: "http://localhost:3000/api/bears"}),
document.getElementById('get')
);

},{}]},{},["/Users/Q_X/Desktop/code401/reacting/src/js/crud_get.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvUV9YL0Rlc2t0b3AvY29kZTQwMS9yZWFjdGluZy9zcmMvanMvY3J1ZF9nZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7R0FFRztBQUNILElBQUksNkJBQTZCLHVCQUFBOztBQUVqQyxlQUFlLEVBQUUsV0FBVztFQUMxQixPQUFPO0lBQ0wsS0FBSyxFQUFFLEVBQUU7R0FDVixDQUFDO0FBQ0osQ0FBQzs7QUFFRCxtQkFBbUIsRUFBRSxXQUFXO0VBQzlCLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDTCxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO0lBQ3RCLElBQUksRUFBRSxLQUFLO0lBQ1gsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFO01BQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDWixLQUFLLENBQUMsSUFBSTtPQUNYLENBQUM7S0FDSCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDWixLQUFLLEVBQUUsU0FBUyxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtNQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUMxRCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7R0FDYixDQUFDLENBQUM7QUFDTCxDQUFDOztBQUVELGlCQUFpQixFQUFFLFdBQVc7RUFDNUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7RUFDM0IsV0FBVyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QyxDQUFDOztBQUVELG9CQUFvQixFQUFFLFdBQVc7RUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM3QixDQUFDOztBQUVELE1BQU0sRUFBRSxXQUFXO0VBQ2pCO0lBQ0Usb0JBQUEsS0FBSSxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxVQUFXLENBQUEsRUFBQTtNQUN2QjtRQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksRUFBRTtVQUNsQyxNQUFNO1lBQ0osb0JBQUEsU0FBUSxFQUFBLENBQUEsQ0FBQyxHQUFBLEVBQUcsQ0FBRSxJQUFJLENBQUMsR0FBSyxDQUFBLEVBQUE7Y0FDdEIsb0JBQUEsR0FBRSxFQUFBLElBQUMsRUFBQSxTQUFBLEVBQVEsSUFBSSxDQUFDLElBQVMsQ0FBQSxFQUFBO2NBQ3pCLG9CQUFBLEdBQUUsRUFBQSxJQUFDLEVBQUEsa0JBQUEsRUFBaUIsSUFBSSxDQUFDLGNBQWMsRUFBQyxHQUFLLENBQUEsRUFBQTtjQUM3QyxvQkFBQSxHQUFFLEVBQUEsSUFBQyxFQUFBLFFBQVUsQ0FBQTtZQUNMLENBQUE7U0FDYjtNQUNGO0FBQ1AsSUFBVSxDQUFBOztJQUVOO0NBQ0g7QUFDRCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxRQUFRLENBQUMsTUFBTTtBQUNmLG9CQUFDLE9BQU8sRUFBQSxDQUFBLENBQUMsTUFBQSxFQUFNLENBQUMsaUNBQWlDLENBQUEsQ0FBRyxDQUFBO0FBQ3BELFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0NBQzdCLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG52YXIgQmVhckFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBiZWFyczogW11cbiAgfTtcbn0sXG5cbmxvYWRCZWFyc0Zyb21TZXJ2ZXI6IGZ1bmN0aW9uKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogdGhpcy5wcm9wcy5zb3VyY2UsXG4gICAgdHlwZTogJ0dFVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBiZWFyczpkYXRhXG4gICAgICB9KVxuICAgIH0uYmluZCh0aGlzKSxcbiAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycikge1xuICAgICAgY29uc29sZS5lcnJvcih0aGlzLnByb3BzLnNvdXJjZSwgc3RhdHVzLCBlcnIudG9TdHJpbmcoKSk7XG4gICAgfS5iaW5kKHRoaXMpXG4gIH0pO1xufSxcblxuY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICB0aGlzLmxvYWRCZWFyc0Zyb21TZXJ2ZXIoKTtcbiAgc2V0SW50ZXJ2YWwodGhpcy5sb2FkQmVhcnNGcm9tU2VydmVyLDEwMDApO1xufSxcblxuY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNlcnZlclJlcXVlc3QuYWJvcnQoKTtcbn0sXG5cbnJlbmRlcjogZnVuY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JlYXJMaXN0Jz5cbiAgICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5iZWFycy5tYXAoZnVuY3Rpb24oYmVhcikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgPHNlY3Rpb24ga2V5PXtiZWFyLl9pZH0+XG4gICAgICAgICAgICAgIDxwPiBuYW1lOiB7YmVhci5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgPHA+ZmlzaFByZWZlcmVuY2U6IHtiZWFyLmZpc2hQcmVmZXJlbmNlfSA8L3A+XG4gICAgICAgICAgICAgIDxwPkRlbGV0ZTwvcD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cblxuICApO1xufVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihcbjxCZWFyQXBwIHNvdXJjZT1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYmVhcnNcIiAvPixcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQnKVxuKTtcbiJdfQ==
