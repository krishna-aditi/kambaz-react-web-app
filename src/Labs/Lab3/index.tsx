import VariablesAndConstants from "./VariablesAndControls";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";
import { useSelector } from "react-redux";

export default function Lab3() {
    console.log('Hello World!');
    const { todos } = useSelector((state: any) => state.todosReducer);
    return (
      <div id="wd-lab3">
        <h2>Lab 3</h2>
        <ul className="list-group">
          {todos.map((todo: any) => (
            <li className="list-group-item" key={todo.id}>
              {todo.title}
            </li>
          ))}
        </ul>
        <hr />

        <h3>JavaScript</h3>

        {/* 3.1.1 */}
        <VariablesAndConstants/>

        {/* 3.1.2 */}
        <VariableTypes/>

        {/* 3.1.3 */}
        <BooleanVariables/>

        {/* 3.1.4 */}
        <IfElse/>

        {/* 3.1.5 */}
        <TernaryOperator/>

        {/* 3.1.6 */}
        <ConditionalOutputIfElse/>
        <ConditionalOutputInline/>

        {/* 3.2 */}
        <LegacyFunctions/>

        {/* 3.2.1 */}
        <ArrowFunctions/>

        {/* 3.2.2 */}
        <ImpliedReturn/>

        {/* 3.2.3 */}
        <TemplateLiterals/>

        {/* 3.3 */}
        <SimpleArrays/>

        {/* 3.3.1 */}
        <ArrayIndexAndLength/>

        {/* 3.3.2 */}
        <AddingAndRemovingToFromArrays/>

        {/* 3.3.3 */}
        <ForLoops/>

        {/* 3.3.4 */}
        <MapFunction/>

        {/* 3.3.5 */}
        <FindFunction/>

        {/* 3.3.6 */}
        <FindIndex/>

        {/* 3.3.7 */}
        <FilterFunction/>

        {/* 3.3.8 */}
        <JsonStringify/>

        {/* 3.3.9 */}
        <House/>

        {/* 3.3.10 */}
        <TodoItem/>
        <br/>
        <TodoList/>

        {/* 3.3.11 */}
        <Spreading/>

        {/* 3.3.12 */}
        <Destructing/>

        {/* 3.3.13 */}
        <FunctionDestructing/>

        {/* 3.3.14 */}
        <DestructingImports/>

        {/* 3.4.1 */}
        <Classes/>

        {/* 3.4.2 */}
        <Styles/>

        {/* 3.5 */}
        <Add a={3} b={4}/>

        {/* 3.5.1 */}
        <h4>Square of 4</h4>
        <Square>4</Square>
        <hr />

        <Highlight>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
          vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
        </Highlight>
        <hr/>

        {/* 3.5.3 */}
        <PathParameters/>



      </div>
  );}
  