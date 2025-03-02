import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FacultyProtectedRoute from "../Account/FacultyProtectedRoute";
import StudentProtectedRoute from "../Account/StudentProtectedRoute";
import { addEnrollment, deleteEnrollment } from "../Enrollments/reducer";
import { useState } from "react";

export default function Dashboard(   
    { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: 
    { courses: any[]; 
        course: any; 
        setCourse: (course: any) => void;
        addNewCourse: () => void; 
        deleteCourse: (course: any) => void;
        updateCourse: () => void; 
    })
    {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
    const dispatch = useDispatch();

    // State variable indicating if only enrolled courses are shown
    // Initial state of showEnrolledOnly is false --> must show all published courses in the beginning
    const [showEnrolledOnly, setShowEnrolledOnly] = useState(false);
    // Show enrolled courses when toggled 
    const toggleEnrollmentView = () => { setShowEnrolledOnly(!showEnrolledOnly); };  

    // Enrollment status of each course --> for each course, check whether current user is enrolled
    // status object with the following view
    // {
    //     "course123": true,    // user is enrolled in this course
    //     "course456": false,   // user is not enrolled in this course
    //     "course789": true     // user is enrolled in this course
    //     ...
    // }
    const [enrollmentStatus, setEnrollmentStatus] = useState( 
        courses.reduce((status, course) => { status[course._id] = enrollments.some( (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id );
            return status; }, {})
    );

    // Toggle enrollment of a course
    const toggleEnrollment = (courseId: any) => { const isEnrolled = enrollmentStatus[courseId];
        if (isEnrolled) {
            dispatch(deleteEnrollment({ user: currentUser._id, course: courseId }));
        } 
        else {
            dispatch(addEnrollment({ user: currentUser._id, course: courseId }));
        }
        // if isEntrolled is true and user clicks on unenroll --> isEnrolled turns false and enrollmentStatus of the course is updated 
        // if isEntrolled is false and user clicks on enroll --> isEnrolled turns true and enrollmentStatus of the course is updated
        setEnrollmentStatus({...enrollmentStatus, [courseId]: !isEnrolled,});
    };

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

            <FacultyProtectedRoute>
                <h5>New Course
                    <Button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse} > 
                    Add 
                    </Button>
                    <Button className="btn btn-warning float-end me-2"
                        onClick={updateCourse} id="wd-update-course-click">
                        Update
                    </Button>
                </h5>

                <br />

                <input value={course.name} className="form-control mb-2" 
                    onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                <textarea value={course.description} className="form-control" rows={3}
                    onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
                <hr />
            </FacultyProtectedRoute>

            <StudentProtectedRoute>
                {/* Enrollment button */}
                <Button className="btn-primary float-end" 
                    id="wd-enrollment-btn"
                    onClick={toggleEnrollmentView}>
                        {/* showEnrolledOnly is initialized with False, so the button will show "Show Enrolled Courses" in the beginning */}
                        {showEnrolledOnly ? "Show All Courses" : "Show Enrolled Courses"}  
                </Button>
            </StudentProtectedRoute>

            {/* <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr /> */}

            <h2 id="wd-dashboard-published">
                { showEnrolledOnly ? `Enrolled Courses (${enrollments.filter((enrollment: any) => enrollment.user === currentUser._id).length})` : `Published Courses (${courses.length})`}
            </h2>
            <hr />

            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {/* showEnrolledOnly = False --> means show all published courses --> all courses pass through the filter without checking enrollmentStatus */}
                    {/* showEnrolledOnly = True --> means show enrolled courses ONLY --> filter courses where the current user is enrolled */}
                    {courses
                    .filter((course) => !showEnrolledOnly ||
                        enrollments.some( 
                            (enrollment: any) =>
                                enrollment.user === currentUser._id &&
                                enrollment.course === course._id
                        )
                    )                
                    .map((course) => (
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to={enrollmentStatus[course._id] ? `/Kambaz/Courses/${course._id}/Home`: "#"} // navigate to course only when enrolled
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                            <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                            <Card.Body className="card-body">
                                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                {course.name} </Card.Title>
                                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                {course.description} </Card.Text>
                                <Button variant="primary">
                                    Go 
                                </Button>

                                <FacultyProtectedRoute>
                                    <Button onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                        }} className="btn btn-danger float-end"
                                        id="wd-delete-course-click">
                                        Delete
                                    </Button>

                                    <Button id="wd-edit-course-click"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}
                                        className="btn btn-warning me-2 float-end" >
                                        Edit
                                    </Button>
                                </FacultyProtectedRoute>
                                
                                {/* Enrollment button in course card */}
                                <StudentProtectedRoute> 
                                    <Button id="wd-enroll-btn"
                                        onClick={(event) => {
                                        event.preventDefault();
                                        toggleEnrollment(course._id);
                                        }} 
                                        // Button colors --> red for unenroll, green for enroll
                                        className={`btn float-end ${enrollmentStatus[course._id] ? "btn-danger" : "btn-success"}`}>
                                        {enrollmentStatus[course._id] ? "Unenroll" : "Enroll"}
                                    </Button>
                                </StudentProtectedRoute>

                            </Card.Body>
                            </Link>
                        </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

