import { useLocation, useParams } from "react-router";

export default function TOC() {
  const { pathname} = useLocation();
  const { cid, qid } = useParams();
  return (
    <ul className="nav nav-pills">
        <li className="nav-item">
            <a id="wd-a1" href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor/Details`}
                className={`nav-link ${pathname.includes("Details") ? "active" : ""}`}>
                Details
            </a>
        </li>
        <li className="nav-item">
            <a id="wd-a2" href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/Qditor/Questions`}
                className={`nav-link ${pathname.includes("Questions") ? "active" : ""}`}>
                Questions
            </a>
        </li>
    </ul>
  );
}
