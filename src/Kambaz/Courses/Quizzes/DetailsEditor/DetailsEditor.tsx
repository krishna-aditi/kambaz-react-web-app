import { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";

export default function QuizDetailsEditor() {
    const { cid, qid } = useParams();
    const dispatch = useDispatch();

    // Quiz elements
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const existingQuiz = quizzes.find((quiz: any) => quiz._id === qid);
    const isNewQuiz = !existingQuiz;

    const [quiz, setQuiz] = useState(existingQuiz || { // if assignment is not found, create a new assignment
            _id: uuidv4(),
            title: "New Quiz",
            course: cid,
            instruction: "Assignment Description",
            dueDate: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split(".")[0], 
            availableFromDate: new Date().toISOString().split(".")[0], 
            availableUntilDate: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split(".")[0],
            shuffleAnswers: true, 
            timeLimit: 20, 
            multipleAttempts: true, 
            attempts: 1, 
            showCorrectAnswers: true, 
            oneQuestionAtATime: true, 
            webcamRequired: false, 
            published: false
        });
        // SAMPLE -->
        // "_id": "Q101", 
        // "title": "Propulsion Quiz", 
        // "course": "RS101", 
        // "dueDate": "2025-05-07", 
        // "availableFromDate": "2025-05-01", 
        // "availableUntilDate": "2025-05-07",
        // "quizType": "Graded Quiz", 
        // "assignmentGroup": "Quizzes", 
        // "shuffleAnswers": true, 
        // "timeLimit": 20, 
        // "multipleAttempts": true, 
        // "attempts": 2, 
        // "showCorrectAnswers": true, 
        // "oneQuestionAtATime": true, 
        // "webcamRequired": false, 
        // "published": false

    return (
        <div id="wd-quizzes-editor">
            <hr />
            {/* Quiz title */}
            <label htmlFor="wd-name">Title</label>
            <div className="input-group mb-4">
                <input className="form-control" 
                    defaultValue={quiz ? quiz.title : "New Quiz Title"}
                    onChange={(e) => { setQuiz({...quiz, title: e.target.value });}} />
            </div>

            {/* Quiz instruction  */}
            <label htmlFor="wd-name">Quiz Instructions: </label>
            <textarea id="wd-description mb-3" className="form-control" defaultValue={quiz ? quiz.instruction : "New Quiz Instruction"}
                onChange={(e) => { setQuiz({...quiz, instruction: e.target.value });}} />
                      
            <Form>
                {/* Quiz Type */}
                <Form.Group className="row mb-3">
                    <Form.Label column sm ={4} className="text-end">
                        Quiz Type
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Select>
                            {/* onChange={(e) => setquizType(e.target.value)}> */}
                            <option selected value="Graded Quiz">Graded Quiz</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                {/* Assignment Group */}
                <Form.Group className="row mb-3">
                    <Form.Label column sm ={4} className="text-end">
                        Assignment Group
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Select defaultValue={quiz? quiz.assignmentGroup: "Quiz"}>
                            <option value="Quiz">Quiz </option>
                            <option value="Assingment">Assignment</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                {/* Option --> Shuffle Answers and TimeLimit */}
                <Form.Group className="row mb-3">
                    <Form.Label className="fw-bold">Options</Form.Label>
                    <Form.Check checked className="text-end" type="checkbox">
                        Shuffle Answers
                    </Form.Check>
                    <Form.Check className="me-3 mt-2" 
                        label={"Time Limit"} 
                        checked={quiz.timeLimit < Infinity || quiz.timeLimit == undefined} 
                        id="wd-quiz-time-limit"
                        onChange={(e) => setQuiz({...quiz, timeLimit: (e.target as HTMLInputElement).checked ? 20: Infinity })}/>
                        {(quiz.timeLimit < Infinity) && (
                            <Form.Group className="ms-3 d-flex align-items-center">
                                <Form.Control className="w-25 mt-1" defaultValue={quiz.timeLimit} onChange={(e) => setQuiz({...quiz, timeLimit: parseInt(e.target.value) || 0 })}/>
                                <Form.Label className="m-0 ms-2">Minutes</Form.Label>
                            </Form.Group>
                        )}
                </Form.Group>

                {/* Allow Multiple attempts */}
                <Form.Group className="row mb-3">
                    <Form.Check className="text-end" type="checkbox" checked>
                        Allow Multiple Attempts
                    </Form.Check>
                </Form.Group>
            </Form>

            <Form.Group className="row mb-3">
                    <Form.Label column sm ={4} className="text-end">Assign</Form.Label>
                    <div id="wd-assign-to" className="border rounded col-sm-8 p-3">
                        <Form.Label className="fw-bold">Assign To</Form.Label>
                        <Form.Control className="mb-3" id="wd-assign-to" type="text" value="Everyone" multiple/>
                        
                        <Form.Label className="fw-bold">Due Date</Form.Label>
                        <Form.Control className="mb-3" id="wd-due-date" type="datetime-local" defaultValue={quiz?.dueDate}
                            onChange={(e) => { setQuiz({...quiz, dueDate: e.target.value })}}/>

                        <div className="flex-fill me-1" style={{ minWidth: 0 }}>
                        <Form.Label className="fw-bold mb-1 me-1">Available from</Form.Label>
                        <Form.Control className="mb-3 " id="wd-available-from" type="datetime-local" defaultValue={quiz?.availableFromDate}
                            onChange={(e) => { setQuiz({...quiz, availableFromDateate: e.target.value })}}/>
                        </div>
                        <div className="flex-fill" style={{ minWidth: 0 }}>
                        <Form.Label className="fw-bold mb-1">Until</Form.Label>
                        <Form.Control className="mb-3" id="wd-available-until" type="datetime-local" defaultValue={quiz?.availableUntilDate}
                            onChange={(e) => { setQuiz({...quiz, availableUntilDate: e.target.value })}} />
                        </div>
                    </div>
                </Form.Group>

            {/* <Form className="row mb-3">
                    <label id="wd-assign" htmlFor="wd-assign" 
                    className="text-end col-sm-3 col-form-label">
                        Assign
                    </label>
                    <div className="col-sm-9 border">

                        <label id="wd-due-date" htmlFor="wd-assign-to"> Due </label>
                        <input className="form-control mb-4" type="date"
                            id="wd-due-date"
                            defaultValue={quizDue}
                            onChange={(e) => setquizDue(e.target.value)}/>
                        <div className="d-flex mb-4">
                            <div className="flex-fill">
                                <label htmlFor="wd-available-from">
                                    Available from
                                </label>
                                <div><input className="form-control" type="date"
                                    id="wd-available-from"
                                    defaultValue={quizFrom}
                                    onChange={(e) => setquizFrom(e.target.value)}/>
                                </div>
                            </div>

                            <div className="flex-fill">
                                <label htmlFor="wd-available-until">Until</label>
                                <div>
                                <input className="form-control" type="date"
                                    id="wd-available-until"
                                    defaultValue={quizUntil}
                                    onChange={(e) => setquizUntil(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Form> */}
            <hr />

            <div className="d-flex justify-content-end">  
                <a href={`#/Kanbas/Courses/${cid}/Quizzes`}>
                    <button className="btn btn-secondary me-1">
                        Cancel
                    </button>
                </a>
                <a href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}>
                    <button className="btn btn-danger me-1" 
                        // onClick={savequiz}
                        id={`wd-update-${qid}-click`}>
                        Save
                    </button> 
                </a>
            </div>
    </div>
    );
}