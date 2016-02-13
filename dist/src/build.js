(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jimvermillion/Documents/codeFellows/six_week/reacting/src/js/App.js":[function(require,module,exports){
//var Parent = require('./Parent');

// React.render(<Parent />, document.getElementById('app'));

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
      
      // handleCommentSubmit: function(comment) {
      //   $.ajax({
      //     url: this.props.source,
      //     dataType: 'json',
      //     type: 'POST',
      //     data: comment,
      //     success: function(data) {
      //       this.setState({data: data});
      //     }.bind(this),
      //     error: function(xhr, status, err) {
      //       console.error(this.props.url, status, err.toString());
      //     }.bind(this)
      //   });
      // },

      //  componentDidMount: function() {
      //     this.loadCommentsFromServer();
      //     setInterval(this.loadCommentsFromServer, this.props.pollInterval);
      //   },

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
          
          // <div className="commentBox">
          //   <h1>Comments</h1>
          //   <CommentList data={this.state.data} />
          //   <CommentForm onCommentSubmit={this.handleCommentSubmit} />
          // </div>

          );
        }
      });

      ReactDOM.render(
        React.createElement(BearApp, {source: "http://localhost:3000/api/bears"}),
        document.getElementById('app')
      );

},{}]},{},["/Users/jimvermillion/Documents/codeFellows/six_week/reacting/src/js/App.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamltdmVybWlsbGlvbi9Eb2N1bWVudHMvY29kZUZlbGxvd3Mvc2l4X3dlZWsvcmVhY3Rpbmcvc3JjL2pzL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLG1DQUFtQzs7QUFFbkMsNERBQTREOztBQUU1RCxJQUFJLDZCQUE2Qix1QkFBQTtNQUMzQixlQUFlLEVBQUUsV0FBVztRQUMxQixPQUFPO1VBQ0wsS0FBSyxFQUFFLEVBQUU7U0FDVixDQUFDO0FBQ1YsT0FBTzs7TUFFRCxpQkFBaUIsRUFBRSxXQUFXO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFVLE1BQU0sRUFBRTtVQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3ZCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQztVQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1VBQ25CLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDWixLQUFLLEVBQUUsS0FBSztXQUNiLENBQUMsQ0FBQztTQUNKLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BRU0sb0JBQW9CLEVBQUUsV0FBVztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ25DLE9BQU87O01BRUQsTUFBTSxFQUFFLFdBQVc7QUFDekIsUUFBUTs7VUFFRSxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBO1lBQ0Y7Y0FDQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLEVBQUU7Z0JBQ2xDLE9BQU8sb0JBQUEsU0FBUSxFQUFBLENBQUEsQ0FBQyxHQUFBLEVBQUcsQ0FBRSxJQUFJLENBQUMsR0FBSyxDQUFBLEVBQUEsR0FBQSxFQUFDLG9CQUFBLEdBQUUsRUFBQSxJQUFDLEVBQUEsU0FBQSxFQUFRLElBQUksQ0FBQyxJQUFTLENBQUEsRUFBQSxJQUFBLEVBQUUsb0JBQUEsR0FBRSxFQUFBLElBQUMsRUFBQSxrQkFBQSxFQUFpQixJQUFJLENBQUMsY0FBYyxFQUFDLEdBQUssQ0FBQSxFQUFBLEdBQVcsQ0FBQTtlQUNwSDtZQUNGO0FBQ2IsVUFBZ0IsQ0FBQTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1lBRVk7U0FDSDtBQUNULE9BQU8sQ0FBQyxDQUFDOztNQUVILFFBQVEsQ0FBQyxNQUFNO1FBQ2Isb0JBQUMsT0FBTyxFQUFBLENBQUEsQ0FBQyxNQUFBLEVBQU0sQ0FBQyxpQ0FBaUMsQ0FBQSxDQUFHLENBQUE7UUFDcEQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7T0FDL0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy92YXIgUGFyZW50ID0gcmVxdWlyZSgnLi9QYXJlbnQnKTtcblxuLy8gUmVhY3QucmVuZGVyKDxQYXJlbnQgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cbnZhciBCZWFyQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBiZWFyczogW11cbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXJ2ZXJSZXF1ZXN0ID0gJC5nZXQodGhpcy5wcm9wcy5zb3VyY2UsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRbMF0pO1xuICAgICAgICAgIHZhciBiZWFycyA9IHJlc3VsdDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhiZWFycyk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBiZWFyczogYmVhcnNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIC8vIGhhbmRsZUNvbW1lbnRTdWJtaXQ6IGZ1bmN0aW9uKGNvbW1lbnQpIHtcbiAgICAgIC8vICAgJC5hamF4KHtcbiAgICAgIC8vICAgICB1cmw6IHRoaXMucHJvcHMuc291cmNlLFxuICAgICAgLy8gICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAvLyAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgLy8gICAgIGRhdGE6IGNvbW1lbnQsXG4gICAgICAvLyAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogZGF0YX0pO1xuICAgICAgLy8gICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIC8vICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycikge1xuICAgICAgLy8gICAgICAgY29uc29sZS5lcnJvcih0aGlzLnByb3BzLnVybCwgc3RhdHVzLCBlcnIudG9TdHJpbmcoKSk7XG4gICAgICAvLyAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gfSxcblxuICAgICAgLy8gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgIC8vICAgICB0aGlzLmxvYWRDb21tZW50c0Zyb21TZXJ2ZXIoKTtcbiAgICAgIC8vICAgICBzZXRJbnRlcnZhbCh0aGlzLmxvYWRDb21tZW50c0Zyb21TZXJ2ZXIsIHRoaXMucHJvcHMucG9sbEludGVydmFsKTtcbiAgICAgIC8vICAgfSxcblxuICAgICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlcnZlclJlcXVlc3QuYWJvcnQoKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJlYXJzLm1hcChmdW5jdGlvbihiZWFyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzZWN0aW9uIGtleT17YmVhci5faWR9PiA8cD4gbmFtZToge2JlYXIubmFtZX08L3A+ICA8cD5maXNoUHJlZmVyZW5jZToge2JlYXIuZmlzaFByZWZlcmVuY2V9IDwvcD4gPC9zZWN0aW9uPlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudEJveFwiPlxuICAgICAgICAgIC8vICAgPGgxPkNvbW1lbnRzPC9oMT5cbiAgICAgICAgICAvLyAgIDxDb21tZW50TGlzdCBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IC8+XG4gICAgICAgICAgLy8gICA8Q29tbWVudEZvcm0gb25Db21tZW50U3VibWl0PXt0aGlzLmhhbmRsZUNvbW1lbnRTdWJtaXR9IC8+XG4gICAgICAgICAgLy8gPC9kaXY+XG5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICA8QmVhckFwcCBzb3VyY2U9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2JlYXJzXCIgLz4sXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuICAgICAgKTsiXX0=
