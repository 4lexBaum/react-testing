import React from 'react';
import C3Chart from 'react-c3js';

export class Chart extends React.Component {

        constructor(props) {
            super(props);
            this._data= {
              columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 50, 20, 10, 40, 15, 25]
              ]
            };
        }

        render() {
          return (
            <C3Chart data={this._data} />
          )
        }
}
