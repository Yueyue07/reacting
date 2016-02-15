/**
 * @jsx React.DOM
 */
 /**
  * @jsx React.DOM
  */
 var BasicInputBox = React.createClass ({
   render: function (){
     return (
      <div>
        <input type="text" onChange={this.props.valChange} value= {this.props.val} />
      </div>
     );
   }
  });

  var Update = React.createClass({
     getInitialState: function(){
       return {}
     },

     submit: function (e){
       var self

       e.preventDefault()
       self = this

       // console.log(this.state.name);

       var data = {
         name: this.state.name,
         fishPreference: this.state.fishPreference
       }

       console.log(JSON.stringify(data));

       // Submit form via jQuery/AJAX
       $.ajax({
         type: 'POST',
         url: 'http://localhost:3000/api/bears',
         data: data,
         dataType: "json"
       })
       .done(function(data) {
         self.clearForm()
       })
       .fail(function(jqXhr) {
         console.log('failed to register');
       });

     },

     clearForm: function() {
       this.setState({
         name: "",
         fishPreference: ""
       });
     },

     nameChange: function(e){
       this.setState({name: e.target.value})
     },

     fishChange: function(e){
      this.setState({fishPreference: e.target.value})
     },

     render: function(){
        return (
         <form onSubmit={this.submit} >
           <BasicInputBox label="Name:" valChange={this.nameChange} val={this.state.name}/>
           <BasicInputBox label="Fish Preference:" valChange={this.fishChange} val={this.state.fishPreference}/>
           <button type="submit">Submit</button>
         </form>
       );
     }
 });

var BearApp = React.createClass({

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

bearDelete: function(bear) {
  console.log(bear._id);
  $.ajax({
    url: this.props.source + '/' + bear._id,
    type: 'DELETE',
    success: function (data) {
     var bearsList = this.state.bears;
     bearsList = bearsList.filter((item) => item !== bear);
     this.setState({bears:bearsList})
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(this.props.source, status, err.toString());
    }.bind(this)
  });
},

bearUpdate: function(bear) {
  console.log(bear);
},

render: function() {
  var bearNodes = this.state.bears.map(function(bear){
    return(
      <section key={bear._id} >

        <p> name: {bear.name}</p>
        <p>fishPreference: {bear.fishPreference} </p>
        <button onClick = {this.bearDelete.bind(this,bear)}>Delete</button>
        <button onClick = {this.bearUpdate.bind(this,bear)}>Update</button>
        <Update onClick = {this.bearUpdate.bind(this,bear)}></Update>
        <hr/>
      </section>
    )
  }, this);
  return (
    <div className='bearList'>
      {
        bearNodes
      }
    </div>

  );
}
});

ReactDOM.render(
<BearApp source="http://localhost:3000/api/bears" />,
document.getElementById('get')
);
