//var Parent = require('./Parent');

// React.render(<Parent />, document.getElementById('app'));

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

          <div>
            {
              this.state.bears.map(function(bear) {
                return <section key={bear._id}> <p> name: {bear.name}</p>  <p>fishPreference: {bear.fishPreference} </p> </section>
              })
            }
          </div>
          
          // <div className="commentBox">
          //   <h1>Comments</h1>
          //   <CommentList data={this.state.data} />
          //   <CommentForm onCommentSubmit={this.handleCommentSubmit} />
          // </div>

          );
        }
      });

      ReactDOM.render(
        <BearApp source="http://localhost:3000/api/bears" />,
        document.getElementById('app')
      );