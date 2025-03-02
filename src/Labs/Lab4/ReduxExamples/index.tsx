import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";

export default function ReduxExamples() {
    return(
        <div>
            <h3>Redux Examples</h3>
            {/* 4.3.2 */}
            <HelloRedux/>

            {/* 4.3.3 */}
            <CounterRedux/>

            {/* 4.3.4 */}
            <AddRedux/>
            <hr/>

            <TodoList/>
        </div>
    );
};
  