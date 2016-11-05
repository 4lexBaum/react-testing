import React from 'react';

import { Machine } from '../Components/Machine.js';
import { MachineData } from '../Components/MachineData.js';
import { Header } from '../Components/Header.js';

export class MachineOverview extends React.Component {

        constructor(props) {
            super(props);
        }

        componentDidMount(){
          socket.on("machine", function(msg){
            switch (msg.itemName) {
              case "L1":
                if(msg.value){
                  $("#area1").removeClass("GOOD BAD");
                } else{
                  $("#area1").addClass(msg.status);
                }
                console.log("L1 " + msg.itemName);
                break;
              case "L2":
                if(msg.value){
                  $("#area2").removeClass("GOOD BAD");
                } else{
                  $("#area2").addClass(msg.status);
                }
                console.log("L2 " + msg.itemName);
                break;
              case "L3":
                $(".heatTitle").text("Milling Heat");
                $(".speedTitle").text("Milling Speed");
                if(msg.value){
                  $("#area3").removeClass("GOOD BAD");
                } else{
                  $("#area3").addClass(msg.status);
                }
                console.log("L3 " + msg.itemName);
                break;
              case "L4":
                $(".heatTitle").text("Drilling Heat");
                $(".speedTitle").text("Drilling Speed");
                if(msg.value){
                  $("#area4").removeClass("GOOD BAD");
                } else{
                  $("#area4").addClass(msg.status);
                }
                console.log("L4 " + msg.itemName);
                break;
              case "L5":
                if(msg.value){
                  $("#area5").removeClass("GOOD BAD");
                } else{
                  $("#area5").addClass(msg.status);
                }
                console.log("L5 " + msg.itemName);
                break;
              default:
                console.log("no light barrier " + msg.itemName);
            }
          })
        }

        componentWillUnmount(){
        }

        render() {
            return (
              <div>
                <Header></Header>
                <MachineData></MachineData>
                <Machine></Machine>
              </div>

            )
        }
}
