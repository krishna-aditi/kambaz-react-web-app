import { Col, ListGroup, Row } from "react-bootstrap";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import LessonControlButtons from "./AssignmentControls";
import { TbFilePencil } from "react-icons/tb";
import AssignmentPageControls from "./AssignmentPageControls";

export default function Assignments() {
    return (
        <div id="wd-assignments">

            <AssignmentPageControls />
            <br /><br /><br /><br />

            <ListGroup className="rounded-0" id="wd-assignments">
                <ListGroup.Item className="wd-assignment-title p-0 fs-5 border-gray">
                    <div className="wd-assignments-heading p-3 ps-2 bg-secondary d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3"/>
                        <GoTriangleDown className="me-2" />
                        <b>ASSIGNMENTS</b>
                        </div>
                        <AssignmentControlButtons />
                    </div>

                    <ListGroup className="wd-assignment-list rounded-0">
                        {/* A1 */}
                        <ListGroup.Item className="wd-assignment p-3 ps-1">
                            <Row>
                                <Col xs="auto">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <TbFilePencil className="me-2 fs-3 text-success" />
                                </Col>
                                <Col xs={6}>
                                    <a className="wd-assignment-link fw-bold text-black text-decoration-none" 
                                        href="#/Kambaz/Courses/1234/Assignments/124">
                                        A1 - HTML
                                    </a>
                                    <p className="fs-6"><span className="text-danger"> Multiple Modules </span> | <b> Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</p>
                                </Col>
                                <Col>
                                    <LessonControlButtons/>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        {/* A2 */}
                        <ListGroup.Item className="wd-assignment p-3 ps-1">
                            <Row>
                            <Col xs="auto">
                                <BsGripVertical className="me-2 fs-3" />
                                <TbFilePencil className="me-2 fs-3 text-success" />
                            </Col>
                            <Col xs={6}>
                                <a className="wd-assignment-link fw-bold text-black text-decoration-none" 
                                    href="#/Kambaz/Courses/1234/Assignments/124">
                                    A2 - CSS + BOOTSTRAP
                                </a>
                                <p className="fs-6"><span className="text-danger"> Multiple Modules </span> | <b> Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts</p>
                            </Col>
                            <Col>
                                <LessonControlButtons/>
                            </Col>
                            </Row>
                        </ListGroup.Item>

                        {/* A3 */}
                        <ListGroup.Item className="wd-assignment p-3 ps-1">
                            <Row>
                                <Col xs="auto">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <TbFilePencil className="me-2 fs-3 text-success" />
                                </Col>
                                <Col xs={6}>
                                        <a className="wd-assignment-link fw-bold text-black text-decoration-none" 
                                            href="#/Kambaz/Courses/1234/Assignments/124">
                                            A3 - JAVASCRIPT + REACT
                                        </a>
                                        <p className="fs-6 mb-0"><span className="text-danger">
                                            Multiple Modules </span> | <b> Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts
                                        </p>
                                </Col>
                                <Col>
                                    <LessonControlButtons/>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
      </div>
  );}
  