import { Link } from "react-router-dom";
import { FormControl} from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <FormControl id="wd-username"
             placeholder="username"
             className="mb-2"/>      
      <FormControl id="wd-password"
             placeholder="password" type="password"
             className="mb-2"/>
      {/* <Link  to="/Kambaz/Dashboard" id="wd-signin-btn"> Sign in </Link> <br />
      <Link  to="/Kambaz/Account/Signup"  id="wd-signup-link">Sign up</Link> */}
      <Link id="wd-signin-btn"
            to="/Kambaz/Account/Profile"
            className="btn btn-primary w-100 mb-2">
            Sign in </Link><br />
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">Sign up</Link>
    </div>
);}
