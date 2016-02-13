(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jimvermillion/Documents/codeFellows/six_week/reacting/src/js/App.js":[function(require,module,exports){
//var Parent = require('./Parent');

// React.render(<Parent />, document.getElementById('app'));

      var UserGist = React.createClass({displayName: "UserGist",
      getInitialState: function() {
        return {
          username: '',
          lastGistUrl: ''
        };
      },

      componentDidMount: function() {
        this.serverRequest = $.get(this.props.source, function (result) {
          var lastGist = result[0];
          this.setState({
            username: lastGist.owner.login,
            lastGistUrl: lastGist.html_url
          });
        }.bind(this));
      },

      componentWillUnmount: function() {
        this.serverRequest.abort();
      },

      render: function() {
        return (
          React.createElement("div", null, 
            this.state.username, "s last gist is", 
            React.createElement("a", {href: this.state.lastGistUrl}, "here"), "."
          )
        );
      }
    });

    React.render(
      React.createElement(UserGist, {source: "https://api.github.com/users/octocat/gists"}),
      document.getElementById('app')
    );

},{}]},{},["/Users/jimvermillion/Documents/codeFellows/six_week/reacting/src/js/App.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamltdmVybWlsbGlvbi9Eb2N1bWVudHMvY29kZUZlbGxvd3Mvc2l4X3dlZWsvcmVhY3Rpbmcvc3JjL2pzL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLG1DQUFtQzs7QUFFbkMsNERBQTREOztNQUV0RCxJQUFJLDhCQUE4Qix3QkFBQTtNQUNsQyxlQUFlLEVBQUUsV0FBVztRQUMxQixPQUFPO1VBQ0wsUUFBUSxFQUFFLEVBQUU7VUFDWixXQUFXLEVBQUUsRUFBRTtTQUNoQixDQUFDO0FBQ1YsT0FBTzs7TUFFRCxpQkFBaUIsRUFBRSxXQUFXO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFVLE1BQU0sRUFBRTtVQUM5RCxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDOUIsV0FBVyxFQUFFLFFBQVEsQ0FBQyxRQUFRO1dBQy9CLENBQUMsQ0FBQztTQUNKLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdEIsT0FBTzs7TUFFRCxvQkFBb0IsRUFBRSxXQUFXO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbkMsT0FBTzs7TUFFRCxNQUFNLEVBQUUsV0FBVztRQUNqQjtVQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7WUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBQyxnQkFBQSxFQUFBO0FBQUEsWUFDckIsb0JBQUEsR0FBRSxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQWEsQ0FBQSxFQUFBLE1BQVEsQ0FBQSxFQUFBLEdBQUE7QUFBQSxVQUNyQyxDQUFBO1VBQ047T0FDSDtBQUNQLEtBQUssQ0FBQyxDQUFDOztJQUVILEtBQUssQ0FBQyxNQUFNO01BQ1Ysb0JBQUMsUUFBUSxFQUFBLENBQUEsQ0FBQyxNQUFBLEVBQU0sQ0FBQyw0Q0FBNEMsQ0FBQSxDQUFHLENBQUE7TUFDaEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7S0FDL0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy92YXIgUGFyZW50ID0gcmVxdWlyZSgnLi9QYXJlbnQnKTtcblxuLy8gUmVhY3QucmVuZGVyKDxQYXJlbnQgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cbiAgICAgIHZhciBVc2VyR2lzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgIGxhc3RHaXN0VXJsOiAnJ1xuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlcnZlclJlcXVlc3QgPSAkLmdldCh0aGlzLnByb3BzLnNvdXJjZSwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIHZhciBsYXN0R2lzdCA9IHJlc3VsdFswXTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBsYXN0R2lzdC5vd25lci5sb2dpbixcbiAgICAgICAgICAgIGxhc3RHaXN0VXJsOiBsYXN0R2lzdC5odG1sX3VybFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfSxcblxuICAgICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlcnZlclJlcXVlc3QuYWJvcnQoKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnVzZXJuYW1lfXMgbGFzdCBnaXN0IGlzXG4gICAgICAgICAgICA8YSBocmVmPXt0aGlzLnN0YXRlLmxhc3RHaXN0VXJsfT5oZXJlPC9hPi5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIFJlYWN0LnJlbmRlcihcbiAgICAgIDxVc2VyR2lzdCBzb3VyY2U9XCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL29jdG9jYXQvZ2lzdHNcIiAvPixcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuICAgICk7Il19
