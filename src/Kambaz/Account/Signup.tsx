import { Link } from "react-router-dom";
import { FormControl} from "react-bootstrap";

export default function Signup() {
    return (
        <div id="wd-signup-screen">
          <h3>Sign up</h3>
          {/* <input placeholder="username" className="wd-username" /><br/>
          <input placeholder="password" type="password" className="wd-password" /><br/>
          <input placeholder="verify password" type="password" className="wd-password-verify" /><br/> */}
          <FormControl id="wd-username"
             placeholder="username"
             className="mb-2"/>      
          <FormControl id="wd-password"
             placeholder="password" type="password"
             className="mb-2"/>
          <FormControl id="wd-password-verify"
             placeholder="verify password" type="password"
             className="mb-2"/>
          {/* <Link  to="/Kambaz/Account/Profile" > Sign up </Link><br />
          <Link  to="/Kambaz/Account/Signin" >Sign in</Link> */}
          <Link id="wd-signin-btn"
            to="/Kambaz/Account/Profile"
            className="btn btn-primary w-100 mb-2">
            Sign up</Link><br />
          <Link id="wd-signin-link" to="/Kambaz/Account/Signin">Sign in</Link>
        </div>
    );}
    