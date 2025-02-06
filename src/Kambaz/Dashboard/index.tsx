import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
        <div id="wd-dashboard-courses">
            <Row xs={1} md={5} className="g-4">
                <Col className="wd-dashboard-course"  style={{ width: "300px" }}>
                    <Card>
                        <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                            <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">
                                    CS1234 React JS
                                </Card.Title>
                                <Card.Text className="wd-dashboard-course-description">
                                    Full stack software developer course
                                </Card.Text>
                                <Button variant="primary"> Go </Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link to="/Kambaz/Courses/1235/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark" >
                            <Card.Img variant="top" src="/images/course2.jpg" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">
                                    CS1235 Advanced Web Development
                                </Card.Title>
                                <Card.Text className="wd-dashboard-course-description">
                                    Advanced web development
                                </Card.Text>
                                <Button variant="primary"> Go </Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link to="/Kambaz/Courses/1236/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/course3.jpg" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">
                                    CS1236 Database Management
                                </Card.Title>
                                <Card.Text className="wd-dashboard-course-description">
                                    Introduction to databases
                                </Card.Text>
                                <Button variant="primary"> Go </Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link to="/Kambaz/Courses/1237/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/course4.jpg" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">
                                    CS1237 Introduction to Data Science
                                </Card.Title>
                                <Card.Text className="wd-dashboard-course-description">
                                    Introduction to Data Science
                                </Card.Text>
                                <Button variant="primary"> Go </Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link to="/Kambaz/Courses/1238/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/course5.jpg"  width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">
                                    CS1238 Foundations of Python
                                </Card.Title>
                                <Card.Text className="wd-dashboard-course-description">
                                    Foundations of Python
                                </Card.Text>
                                <Button variant="primary"> Go </Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link to="/Kambaz/Courses/1239/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/course6.jpg" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">
                                    CS1239 Algorithms
                                </Card.Title>
                                <Card.Text className="wd-dashboard-course-description">
                                    Data structures and algorithms for beginners
                                </Card.Text>
                                <Button variant="primary"> Go </Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link to="/Kambaz/Courses/1240/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/course7.jpg" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">
                                    CS1240 Application Engineering
                                </Card.Title>
                                <Card.Text className="wd-dashboard-course-description">
                                    Introduction Object Oriented programming
                                </Card.Text>
                                <Button variant="primary"> Go </Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link to="/Kambaz/Courses/1240/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/course8.jpg" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">
                                    CS1211 Academic Writing for Engineers
                                </Card.Title>
                                <Card.Text className="wd-dashboard-course-description">
                                    Fundamentals of academic writing for engineers
                                </Card.Text>
                                <Button variant="primary"> Go </Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
);}

