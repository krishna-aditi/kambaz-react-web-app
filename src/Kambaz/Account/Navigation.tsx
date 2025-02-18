import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const { pathname } = useLocation();
  const links = ["Signin", "Signup", "Profile"]
  return (
    // <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
    //   <Link to={`/Kambaz/Account/Signin`} className="list-group-item active border border-0 pb-0"  > Signin  </Link> <br/>
    //   <Link to={`/Kambaz/Account/Signup`} className="list-group-item text-danger border border-0 pb-0" > Signup  </Link> <br/>
    //   <Link to={`/Kambaz/Account/Profile`} className="list-group-item text-danger border border-0 pb-0 m-0"> Profile </Link> <br/>
    // </div>
    <ListGroup id="wd-account-navigation" className="wd fs-5 rounded-0">
      {links.map((link) => (
          <Link to={`/Kambaz/Account/${link}`}
            className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}> {link} </Link>
      ))}
    </ListGroup>
);}
