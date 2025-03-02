import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { pathname } = useLocation();
  // const links = ["Signin", "Signup", "Profile"]
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <ListGroup id="wd-account-navigation" className="wd fs-5 rounded-0">
      {links.map((link) => (
          <Link to={`/Kambaz/Account/${link}`}
            className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}> {link} </Link>
      ))}
    </ListGroup>
);}
