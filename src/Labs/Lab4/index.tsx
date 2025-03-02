import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";
import ReduxExamples from "./ReduxExamples";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
      }    
    return (
        <div id="wd-lab4">
            <h2>Lab 4</h2>
            {/* 4.2.1.1 */}
            <ClickEvent/>

            {/* 4.2.1.2 */}
            <PassingDataOnEvent/>

            {/* 4.2.1.3 */}
            <PassingFunctions theFunction={sayHello}/>

            {/* 4.2.1.4 */}
            <EventObject/>

            {/* 4.2.2.2 */}
            <Counter/>

            {/* 4.2.2.3 */}
            <BooleanStateVariables/>
            
            {/* 4.2.2.4 */}
            <StringStateVariables/>

            {/* 4.2.2.5 */}
            <DateStateVariable/>

            {/* 4.2.2.6 */}
            <ObjectStateVariable/>

            {/* 4.2.2.7 */}
            <ArrayStateVariable/>

            {/* 4.2.2.8 */}
            <ParentStateComponent/>

            {/* 4.3 */}
            <ReduxExamples/>

        </div>
    );
}
  