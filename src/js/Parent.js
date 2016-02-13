var Child = require('./Child');

var Parent = React.createClass({
  render: function(){
    return (
      <div>
        <div> This is the parent. </div>
        <Child name="gleff"/>
      </div>
    )
  }
});

module.exports = Parent;
