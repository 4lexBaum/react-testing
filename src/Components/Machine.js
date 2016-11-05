import React from 'react';

export class Machine extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <div id="machineBox">
          <div id="areasBox">
            <div id="area1" className="area">
              <div className="areaNumber">1</div>
            </div>
            <div id="area2" className="area">
              <div className="areaNumber">2</div>
            </div>
            <div id="area3" className="area">
              <div className="areaNumber">3</div>
              <div className="iconContainer">
                <img className="iconArea" src="http://www.freeiconspng.com/uploads/mill-icon-16.png"></img>
              </div>
            </div>
            <div id="area4" className="area">
              <div className="areaNumber">4</div>
              <div className="iconContainer">
                <img className="iconArea" src="https://d30y9cdsu7xlg0.cloudfront.net/png/170362-200.png"></img>
              </div>
            </div>
            <div id="area5" className="area">
              <div className="areaNumber">5</div>
            </div>
          </div>

          <div>
            <div id="conveyor"></div>
              <div id="pillarBox">
                <div className="pillarLeft pillar"></div>
                <div className="pillar"></div>
                <div className="pillar"></div>
                <div className="pillar"></div>
                <div className="pillar"></div>
          	  <div className="pillarRight pillar"></div>
            </div>
          </div>
        </div>
      )
  }
}
