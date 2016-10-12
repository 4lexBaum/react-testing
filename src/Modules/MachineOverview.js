import React from 'react';

import { Machine } from '../Components/Machine.js';
import { Header } from '../Components/Header.js';

export class MachineOverview extends React.Component {

        constructor(props) {
            super(props);
        }

        componentDidMount(){
        }

        componentWillUnmount(){
        }

        render() {
            return (
              <div>
                <Header></Header>
                <Machine></Machine>
              </div>

            )
        }
}
