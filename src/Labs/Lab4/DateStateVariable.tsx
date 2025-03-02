import { useState } from "react";
export default function DateStateVariable() {
    const [startDate, setStartDate] = useState(new Date());
    // date.getMonth() --> (January gives 0), so we need to add 1 to get the month we want 
    const dateObjectToHtmlDateString = (date: Date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${date.getMonth() + 1}-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
    };
    return (
        <div id="wd-date-state-variables">
            <h3>Date State Variables</h3>
            <h4>{JSON.stringify(startDate)}</h4>
            <h4>{dateObjectToHtmlDateString(startDate)}</h4>
            <input
                className="form-control"
                type="date"
                defaultValue={dateObjectToHtmlDateString(startDate)}
                onChange={(e) => setStartDate(new Date(e.target.value))}
            />
            <hr/>
        </div>
    );
}