import { Button } from "react-bootstrap";
import { MdOutlineEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

export default function QuizDetailsPage(){
    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const quiz = quizzes.find((quiz: any) => quiz._id === qid);
    const dispatch = useDispatch();
    return(
        <div id="wd-quizzes-editor">
            <div className="float-end d-flex justify-content-center">
                {/* <a href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/Preview`}>     */}
                    <Button variant="outline-secondary" 
                        size="lg"
                        className=" btn-secondary me-1">
                        Preview
                    </Button>
                {/* </a> */}
                <a href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/Editor/Details`}>
                    <Button variant="outline-secondary" 
                        size="lg"
                        className="btn-secondary me-1">
                        <MdOutlineEdit className="me-1"/> 
                        Edit
                    </Button>
                </a>    
            </div>
            <br/>
            <br/>
            <br/>
            
            <h3>{quiz.title}</h3>

            {/* Table with quiz details */}
            <table className="table table-borderless">
                 <tbody>
                     <tr>
                         <th className="col-sm-4 text-end">Quiz Type</th>
                         <td className="text-start">{quiz.quizType ? quiz.quizType : "_"}</td>
                     </tr>
                     <tr>
                         <th className="text-end">Points</th>
                         <td className="text-start">{quiz.points ? quiz.points: "-" }</td>
                     </tr>
                     <tr>
                         <th className="text-end">Assignment Group</th>
                         <td className="text-start">{quiz.assignmentGroup ? quiz.assignmentGroup : "-"}</td>
                     </tr>
                     <tr>
                         <th className="text-end">Shuffle Answers</th>
                         <td className="text-start">{quiz.shuffleAnswers ? "Yes" : "No"}</td>
                     </tr>
                     <tr>
                         <th className="text-end">Time Limit</th>
                         <td className="text-start">{quiz.timeLimit ? quiz.timeLimit: "-"}</td>
                     </tr>
                     <tr>
                         <th className="text-end">Multiple Attempts</th>
                         <td className="text-start">{quiz.multipleAttempts ? "Yes" : "No"}</td>
                     </tr>
                     <tr>
                         <th className="text-end">How Many Attempts</th>
                         <td className="text-start">{quiz.numberAttempts ? quiz.numberAttempts : "-"}</td>
                     </tr>
                     <tr>
                         <th className="text-end">Show Correct Answers</th>
                         <td className="text-start">{quiz.showCorrectAnswers ? "Yes" : "No"}</td>
                     </tr>
                     <tr>
                         <th className="text-end">One Question at a Time</th>
                         <td className="text-start">{quiz.oneQuestionAtATime ? "Yes" : "No"}</td>
                     </tr>
                     <tr>
                         <th className="text-end">Webcam Required</th>
                         <td className="text-start">{quiz.webcamRequired ? "Yes" : "No"}</td>
                     </tr>
                 </tbody>
             </table>
             <br />

            {/* Quiz deadline details at the bottom */}
             <table className="table border-secondary">
                 <thead>
                     <tr>
                         <th className="text-center">Due</th>
                         <th className="text-center">For</th>
                         <th className="text-center">Available From</th>
                         <th className="text-center">Until</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td className="text-center">{quiz.dueDate ? quiz.dueDate : "-"}</td>
                         <td className="text-center">Everyone</td>
                         <td className="text-center">{quiz.availableFromDate}</td>
                         <td className="text-center">{quiz.availableUntilDate ? quiz.availableUntilDate : "-" }</td>
                     </tr>
                 </tbody>
             </table>

             <div className="d-flex justify-content-center">
                <Button variant="danger" 
                            size="lg"
                            className="me-1">
                    Preview
                </Button>
            </div>
            <hr/>
        </div>
    );
}