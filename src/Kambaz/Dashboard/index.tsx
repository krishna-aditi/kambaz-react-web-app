import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
        <div id="wd-dashboard-courses">
            <div className="wd-dashboard-course-1">
                <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <h5> CS1234 React JS </h5>
                        <p className="wd-dashboard-course-title">
                            Full stack software developer course</p>
                        <button> Go </button>
                    </div>
                </Link>
            </div>
            <div className="wd-dashboard-course-2">
                <Link to="/Kambaz/Courses/1235/Home"
                    className="wd-dashboard-course-link" >
                    <img src="/images/course2.jpg" width={200} />
                    <div>
                        <h5> CS1235 Advanced Web Development</h5>
                        <p className="wd-dashboard-course-title">
                            Advanced web development for full stack software developers for complex UI building </p>
                        <button> Go </button>
                    </div>
                </Link>
            </div>

            <div className="wd-dashboard-course-3">
                <Link to="/Kambaz/Courses/1236/Home"
                    className="wd-dashboard-course-link" >
                    <img src="/images/course3.jpg" width={200} />
                    <div>
                        <h5> CS1236 Database Management</h5>
                        <p className="wd-dashboard-course-title">
                            Introduction to Database Management systems</p>
                        <button> Go </button>
                    </div>
                </Link>
            </div>

            <div className="wd-dashboard-course-4">
                <Link to="/Kambaz/Courses/1237/Home"
                    className="wd-dashboard-course-link" >
                    <img src="/images/course4.jpg" width={200} />
                    <div>
                        <h5> CS1237 Introduction to Data Science</h5>
                        <p className="wd-dashboard-course-title">
                            Introduction to Data Science  </p>
                        <button> Go </button>
                    </div>
                </Link>
            </div>
            <div className="wd-dashboard-course-5">
                <Link to="/Kambaz/Courses/1238/Home"
                    className="wd-dashboard-course-link" >
                    <img src="/images/course5.jpg" width={200} />
                    <div>
                        <h5> CS1238 Foundations of Python</h5>
                        <p className="wd-dashboard-course-title">
                            Basics of Python programming language</p>
                        <button> Go </button>
                    </div>
                </Link>
            </div>
            <div className="wd-dashboard-course-6">
                <Link to="/Kambaz/Courses/1239/Home"
                    className="wd-dashboard-course-link" >
                    <img src="/images/course6.jpg" width={200} />
                    <div>
                        <h5> CS1239 Algorithms</h5>
                        <p className="wd-dashboard-course-title">
                            Data Structures and Algorithms for beginners</p>
                        <button> Go </button>
                    </div>
                </Link>
            </div>
            <div className="wd-dashboard-course-7">
                <Link to="/Kambaz/Courses/1240/Home"
                    className="wd-dashboard-course-link" >
                    <img src="/images/course7.jpg" width={200} />
                    <div>
                        <h5> CS1240 Application Engineering</h5>
                        <p className="wd-dashboard-course-title">
                            Introduction to Java and Object Oriented programming</p>
                        <button> Go </button>
                    </div>
                </Link>
            </div>
            <div className="wd-dashboard-course-8">
                <Link to="/Kambaz/Courses/1240/Home"
                    className="wd-dashboard-course-link" >
                    <img src="/images/course8.jpg" width={200} />
                    <div>
                        <h5> CS1211 Academic Writing for Engineers</h5>
                        <p className="wd-dashboard-course-title">
                            Fundamentals of academic writing for engineers and researchers</p>
                        <button> Go </button>
                    </div>
                </Link>
            </div>
        </div>
    </div>
);}

