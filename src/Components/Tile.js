import React from 'react';

var value = 250;

export class Tile extends React.Component {

        constructor(props) {
            super(props);
            this.state = {value: this.props.value, status: this.props.status};
        }

        componentDidMount(){
          var that = this;
          var valueTag = "#" + this.props.containerId;
          socket.on(this.props.streamId, function (msg) {
            if(msg <= 150){
              $(valueTag).css("color","#1e90ff")
            }else if(msg <= 200){
              $(valueTag).css("color","#00bfff")
            }else if(msg <= 250){
              $(valueTag).css("color","#60B044")
            }else if(msg <= 300){
              $(valueTag).css("color","#F6C600")
            }else{
              $(valueTag).css("color","#FF0000")
            }
            that.setState({value: msg, status: "running"});
            socket.on('disconnect', function(){
              that.setState({status: "stopped"});
            });
          });
        }

        handleClick(){
          window.location.href = '/#/test';
        }

        render() {
          return (
            <div onClick={this.handleClick}>
              <img className="icon" src={this.props.icon}></img>
              <p className="value" id={this.props.containerId}>{this.state.value}</p>
              <p className="unit">{this.props.unit}</p>
              <p className="title">{this.props.title}</p>
              <p className="status">{this.state.status}</p>
            </div>
          )
        }
}
