import { useState } from "react";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index)); // create a subset of the array by filtering for items whose index is !== i -----> so if index === 0 then array becomes [2, 3, 4, 5]
    };
    return (
        <div id="wd-array-state-variables">
            <h3>Array State Variable</h3>
            <button onClick={addElement} className="btn btn-success mb-2">Add Element</button>
            <div>
                {array.map((item, index) => (
                <div key={index} className="form-control d-flex justify-content-between align-items-center">
                    {item}
                    <button onClick={() => deleteElement(index)}
                        id="wd-delete-element-click"
                        className="btn btn-danger">
                    Delete
                    </button>
                </div>
                ))}
            </div>
            <hr/>
        </div>
    );
}

