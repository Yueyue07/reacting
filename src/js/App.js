//var Parent = require('./Parent');

// React.render(<Parent />, document.getElementById('app'));

      var UserGist = React.createClass({
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
          <div>
            {this.state.username}s last gist is
            <a href={this.state.lastGistUrl}>here</a>.
          </div>
        );
      }
    });

    React.render(
      <UserGist source="https://api.github.com/users/octocat/gists" />,
      document.getElementById('app')
    );