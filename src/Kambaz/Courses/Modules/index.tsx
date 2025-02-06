import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    return (
      <div>
        <ModulesControls/>
        <br /><br /><br /><br />

        <ListGroup className="rounded-0" id="wd-modules">
            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    Week 1
                    <ModuleControlButtons />
                </div>
                <ListGroup className="wd-lessons rounded-0">
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        LEARNING OBJECTIVES
                        <LessonControlButtons />
                    </ListGroup.Item >
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        Introduction to the course
                        <LessonControlButtons />
                    </ListGroup.Item>
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        Learn what is Web Development
                        <LessonControlButtons />
                    </ListGroup.Item>
                </ListGroup>                        
                
                <ListGroup className="wd-lessons rounded-0">
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        READING
                        <LessonControlButtons />
                    </ListGroup.Item>
                    <ListGroup.Item className="wd-lesson p-3 ps-1">                        
                        <BsGripVertical className="me-2 fs-3" />
                        Full Stack Developer - Chapter 1 - Introduction
                        <LessonControlButtons />
                    </ListGroup.Item>
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        Full Stack Developer - Chapter 2 - Creating User Interfaces with HTML
                        <LessonControlButtons />
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup className="wd-lessons rounded-0">
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        SLIDES
                        <LessonControlButtons />
                    </ListGroup.Item>
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        Introduction to Web Development
                        <LessonControlButtons />
                    </ListGroup.Item>
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        Creating an HTTP server with Node.js
                        <LessonControlButtons />
                    </ListGroup.Item>
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        Creating a React Application
                        <LessonControlButtons />
                    </ListGroup.Item>
                </ListGroup>
            </ListGroup.Item>
            
            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    Week 2
                    <ModuleControlButtons/>
                </div>
                <ListGroup className="wd-lessons rounded-0">
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        LEARNING OBJECTIVES
                        <LessonControlButtons />
                    </ListGroup.Item>
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        Introduction to CSS
                        <LessonControlButtons />
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup className="wd-lessons rounded-0">
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        READING
                        <LessonControlButtons />
                    </ListGroup.Item>
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        Full Stack Developer - Chapter 3
                        <LessonControlButtons />
                    </ListGroup.Item>
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        Full Stack Developer - Chapter 4
                        <LessonControlButtons />
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup className="wd-lessons rounded-0">
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        SLIDES
                        <LessonControlButtons />
                    </ListGroup.Item>
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        Introduction to CSS
                        <LessonControlButtons />
                    </ListGroup.Item>
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        React Icons
                        <LessonControlButtons />
                    </ListGroup.Item>
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        Bootstrap
                        <LessonControlButtons />
                    </ListGroup.Item>
                </ListGroup>
            </ListGroup.Item>

            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    Week 3
                    <ModuleControlButtons />
                </div>
            </ListGroup.Item>

        </ListGroup>
    </div>
  );}
  