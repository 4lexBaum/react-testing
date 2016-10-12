import React from 'react';

export class Machine extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <div id="machineBox">
          <div id="areasBox">
            <div className="area">
              <div className="areaNumber">1</div>
            </div>
            <div className="area">
              <div className="areaNumber">2</div>
            </div>
            <div className="area">
              <div className="areaNumber">3</div>
            </div>
            <div className="active area">
              <div className="areaNumber">4</div>
            </div>
            <div className="area">
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
