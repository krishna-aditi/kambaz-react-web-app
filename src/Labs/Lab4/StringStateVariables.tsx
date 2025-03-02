import { useState } from "react";
export default function StringStateVariables() {
    const [firstName, setFirstName] = useState("John");
    return (
        <div>
            <h3>String State Variables</h3>
            <p>{firstName}</p>
            <input
                className="form-control"
                defaultValue={firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
            <hr/>
        </div>
    );
}