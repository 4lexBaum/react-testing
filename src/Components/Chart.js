import React from 'react';
import C3Chart from 'react-c3js';
import { Button } from 'react-bootstrap';

export class Chart extends React.Component {

        constructor(props) {
            super(props);
            this.state = {data: { columns: [
              ['data1', 30, 100]
            ]}};
            this._axis = {
              y: {
                max: 100,
                min: 0,
              }
            }
            // Range includes padding, set 0 if no padding needed
            // padding: {top:0, bottom:0}
        }


        handleClick(){
          console.log(socket);
          var that = this;
          socket.on('test', function(msg){
            var newArray = that.state.data.columns[0];
            newArray.push(msg);
            console.log(newArray);
            that.setState({data: { columns: [
              newArray
            ]}, axis: that._axis})
          });
        }

        render() {
          return (
            <div>
            <Button onClick={this.handleClick.bind(this)}>Update</Button>
            <C3Chart data={this.state.data} axis={this._axis}/>
            </div>

          )
        }
}
