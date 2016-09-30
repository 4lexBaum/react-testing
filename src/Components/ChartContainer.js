import React from 'react';

export class ChartContainer extends React.Component {

        constructor(props) {
            super(props);
        }

        render() {
          return (
            <div id={this.props.containerId}></div>
          )
        }
}
