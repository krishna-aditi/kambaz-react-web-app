import { useState } from "react";
export default function ObjectStateVariable() {
    const [person, setPerson] = useState({ name: "Peter", age: 24 });
    return (
        <div>
            <h3>Object State Variables</h3>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            <input className="form-control"
                defaultValue={person.name}
                onChange={(e) => setPerson({ ...person, name: e.target.value })}
            />
            <br/>
            <input className="form-control"
                defaultValue={person.age}
                onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) })}
            />
            <hr/>
        </div>
    );
}
