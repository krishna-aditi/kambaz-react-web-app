import { Col, ListGroup, Row } from "react-bootstrap";
import QuizPageControls from "./QuizPageControls";
import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import * as db from "../../Database";
import { useParams } from "react-router";
import { MdOutlineRocketLaunch } from "react-icons/md";
import GreenCheckmark from "./GreenCheckmark";

export default function Quizzes(){
    const { cid } = useParams();
    const quizzes = db.quizzes;
    return(
        <div id="wd-quizzes">
            <QuizPageControls />
            <br /><br />
            <ListGroup className="rounded-0" id="wd-quizzes">
                <ListGroup.Item className="wd-quizzes-title p-0 fs-5 border-gray">
                    <div className="wd-quizzes-heading p-3 ps-2 bg-secondary d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3"/>
                        <GoTriangleDown className="me-2" />
                        <b>Assignment Quizzes</b>
                        </div>
                    </div>

                    {quizzes
                    .filter((quiz: any) => quiz.course === cid)
                    .map((quiz: any) => (
                        <ListGroup className="wd-quiz-list rounded-0">
                            {/* A1 */}
                            <ListGroup.Item className="wd-quiz p-3 ps-1">
                                <Row>
                                    <Col xs="auto">
                                        {/* <BsGripVertical className="ms-1 me-2 fs-3" /> */}
                                        <MdOutlineRocketLaunch className="text-success ms-2 me-1 fs-3" />
                                        {/* <TbFilePencil className="me-2 fs-3 text-success" /> */}
                                    </Col>
                                    <Col xs={6}>
                                        <a className="wd-quiz-link fw-bold text-black text-decoration-none" 
                                            href={`#/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`}>
                                            {quiz.title}
                                        </a>
                                        <p className="fs-6 mb-0">
                                            {/* <span className="text-danger"> Multiple Modules </span> |  */}
                                            <b> Not available until</b> {quiz.availableFromDate.split("T")[0]} at {quiz.availableFromDate.split("T")[1]} | <b>Due</b> {quiz.dueDate.split("T")[0]} at {quiz.dueDate.split("T")[1]} | {quiz.points} pts 
                                        </p>
                                    </Col>
                                    <Col>
                                        <GreenCheckmark/>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    ))}
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}