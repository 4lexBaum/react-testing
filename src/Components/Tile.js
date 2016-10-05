import React from 'react';

var divStyle = {
  width: '10rem',
  height: '12rem',
  borderRadius: '1rem',
  borderColor: 'lightgrey',
  borderWidth: '0.1rem',
  borderStyle: 'solid',
  margin: '0.75rem',
  backgroundColor: 'white',
  boxShadow: '3px 3px 3px #888888'
};
var value = 250;


export class Tile extends React.Component {

        constructor(props) {
            super(props);
            this.state = {value: 250};
        }

        handleClick(){
          var random = Math.floor(Math.random() * 250) + 100;
          var container = this.props.containerId;
          alert("bin geklickt worden: " + container);
          this.setState({value: random});
          //nachrendern funktioniert noch nicht, aber der state wird geändert
          alert("state auf: " + random + " geändert");
        }

        // io.on('connection', function(socket){
        //   socket.on('tile', function(msg){
        //     console.log('message: ' + msg);
        //   });
        // });
        // socket.on('tile', function (msg) {
        //   this.state = {value: msg};
        // }

        render() {
          return (
            <div onClick={this.handleClick.bind(this)} id={this.props.containerId}>
              <img className="icon" src="https://image.freepik.com/free-icon/pneumatic-road-drill_318-34720.png"></img>
                <p className="value">{this.state.value}</p>
                <p className="unit">°C</p>
                <p className="title"> Drill Temperature </p>
                <p className="status"> running </p>
            </div>
          )
        }
}
