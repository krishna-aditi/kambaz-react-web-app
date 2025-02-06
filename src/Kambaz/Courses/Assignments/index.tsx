import { ListGroup } from "react-bootstrap";
import { Link } from "react-router";
import AssignmentControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import LessonControlButtons from "./LessonControlButtons";
import { PiNotePencilDuotone } from "react-icons/pi";

export default function Assignments() {
    return (
        <div id="wd-assignments">

            <AssignmentControls />
            <br /><br /><br /><br />

            <ListGroup className="rounded-0" id="wd-assignment-list">
                {/* <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        < className="me-2" />
                        <GoTriangleDown className="me-2 fs-3" />
                        ASSIGNMENTS
                        
                    </div>
                </ListGroup.Item> */}
                <ListGroup.Item className="wd-assignment p-0 fs-5 border-gray">
                    <div className="d-flex justify-content-between align-items-center p-2" 
                        style={{ backgroundColor: "#f0f0f0" }}>
                        <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3"/>
                        <GoTriangleDown className="me-2" />
                        ASSIGNMENTS
                        </div>
                        <div className="d-flex align-items-center">
                        <span className="bg-gray rounded-pill">40% of Total</span>
                        <AssignmentControlButtons />
                        </div>
                    </div>
                </ListGroup.Item>

                <ListGroup.Item className="wd-assignment p-3 ps-1">
                {/* Complete On Your Own */}
                    <Link to="#/Kambaz/Courses/1234/Assignments/124"
                        className="wd-assignment-link text-black text-decoration-none">
                        <BsGripVertical className="me-2 fs-3" />
                        <span className="wd-fg-color-green">
                            <PiNotePencilDuotone className="me-2 fs-3" />
                        </span>
                        <b>A1 - HTML</b>
                        <br/>
                        <span className="wd-fg-color-red"> Multiple Modules </span> | <b> Not available until</b> May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
                        <LessonControlButtons/>
                    </Link>
                </ListGroup.Item>

                <ListGroup.Item className="wd-assignment p-3 ps-1">
                {/* Complete On Your Own */}
                    <Link to="#/Kambaz/Courses/1234/Assignments/124"
                        className="wd-assignment-link text-black text-decoration-none">
                        <BsGripVertical className="me-2 fs-3" />
                        <span className="wd-fg-color-green">
                            <PiNotePencilDuotone className="me-2 fs-3" />
                        </span>
                        <b>A2 - CSS + BOOTSTRAP</b>
                        <br/>
                        <span className="wd-fg-color-red">Multiple Modules </span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts
                        <LessonControlButtons/>
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item className="wd-assignment p-3 ps-1">
                    <Link to="#/Kambaz/Courses/1234/Assignments/125"
                    className="wd-assignment-link text-black text-decoration-none">
                    <BsGripVertical className="me-2 fs-3" />
                    <PiNotePencilDuotone className="wd-fg-color-green me-2 fs-3" />
                    <b>A3 - JAVASCRIPT + REACT</b>
                    <br/>
                    <span className="wd-fg-color-red">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts
                    <LessonControlButtons/>
                </Link>
            </ListGroup.Item>
            </ListGroup>
      </div>
  );}
  