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
            this.state = {value: this.props.value, status: this.props.status};
        }

        handleClick(){
          var that = this;
          var container = this.props.containerId;
          alert("streaming started for " + container);
          socket.on('tile', function (msg) {
            that.setState({value: msg, status: "running"});
            // that.setState({status: "stopped"});
          });
        }

        render() {
          return (
            <div onClick={this.handleClick.bind(this)} id={this.props.containerId}>
              <img className="icon" src={this.props.icon}></img>
                <p className="value">{this.state.value}</p>
                <p className="unit">{this.props.unit}</p>
                <p className="title">{this.props.title}</p>
                <p className="status">{this.state.status}</p>
            </div>
          )
        }
}
