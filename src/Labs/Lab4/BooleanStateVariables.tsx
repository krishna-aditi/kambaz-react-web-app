import { useState } from "react";
export default function BooleanStateVariables() {
    const [done, setDone] = useState(true);
    return (
        <div id="wd-boolean-state-variables">
            <h3>Boolean State Variables</h3>
            <p>{done ? "Done" : "Not done"}</p>
            <label className="form-control">
                <input type="checkbox" className="mb-1"
                    checked={done}
                    onChange={() => setDone(!done)} /> 
                Done
            </label>
            {done && <div className="alert alert-success mt-2"> Yay! you are done </div>}
            <hr/>
        </div>
    );
}