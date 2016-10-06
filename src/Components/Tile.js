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
          var bordersarray = this.props.borders.split(',');
          var colorsarray = this.props.colors.split(',');
          socket.on(this.props.streamId, function (msg) {
            if(msg <= bordersarray[0]){
              $(valueTag).css("color",colorsarray[0])
            }else if(msg <= bordersarray[1]){
              $(valueTag).css("color",colorsarray[1])
            }else if(msg <= bordersarray[2]){
              $(valueTag).css("color",colorsarray[2])
            }else if(msg <= bordersarray[3]){
              $(valueTag).css("color",colorsarray[3])
            }else{
              $(valueTag).css("color",colorsarray[4])
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
