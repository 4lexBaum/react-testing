import React from 'react';

import { Machine } from '../Components/Machine.js';
import { MachineData } from '../Components/MachineData.js';
import { Header } from '../Components/Header.js';
import { ERPData } from '../Components/ERPData.js';

export class MachineOverview extends React.Component {

        constructor(props) {
            super(props);
        }

        componentDidMount(){
          $('#millingIcon').jrumble();
          $('#drillingIcon').jrumble();
          socket.on("machine", function(msg){
            switch (msg.itemName) {
              case "L1":
                if(msg.value){
                  $("#area1").removeClass("GOOD BAD");
                } else{
                  $("#area1").addClass(msg.status);
                }
                break;
              case "L2":
                if(msg.value){
                  $("#area2").removeClass("GOOD BAD");
                } else{
                  $("#area2").addClass(msg.status);
                }
                break;
              case "L3":
                $(".heatTitle").text("Milling Heat");
                $(".speedTitle").text("Milling Speed");
                if(msg.value){
                  $("#area3").removeClass("GOOD BAD");
                } else{
                  $("#area3").addClass(msg.status);
                }
                break;
              case "L4":
                $(".heatTitle").text("Drilling Heat");
                $(".speedTitle").text("Drilling Speed");
                if(msg.value){
                  $("#area4").removeClass("GOOD BAD");
                } else{
                  $("#area4").addClass(msg.status);
                }
                break;
              case "L5":
                if(msg.value){
                  $("#area5").removeClass("GOOD BAD");
                } else{
                  $("#area5").addClass(msg.status);
                }
                break;
              case "MILLING":
                if(msg.value){
                  $('#millingIcon').trigger('startRumble');
                } else{
                  $('#millingIcon').trigger('stopRumble');
                }
                break;
              case "DRILLING":
                if(msg.value){
                  $('#drillingIcon').trigger('startRumble');
                } else{
                  $('#drillingIcon').trigger('stopRumble');
                }
                break;
              default:
            }
          })
        }

        componentWillUnmount(){
        }

        render() {
            return (
              <div>
                <Header></Header>
                <ERPData></ERPData>
                <MachineData></MachineData>
                <Machine></Machine>
              </div>

            )
        }
}
