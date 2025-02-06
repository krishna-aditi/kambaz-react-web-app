import { Link } from "react-router-dom";
import { FormControl, FormSelect} from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {/* <input defaultValue="alice" placeholder="username" className="wd-username"/><br/>
      <input defaultValue="123"   placeholder="password" type="password"
             className="wd-password" /><br/>
      <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/>
      <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/>
      <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
      <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/> */}

      <FormControl defaultValue="alice" placeholder="username" className="wd-username mb-2"/>  
      <FormControl defaultValue="123"   placeholder="password" type="password"
             className="wd-password mb-2" />
      <FormControl defaultValue="alice"
            placeholder="First Name"
            id="wd-firstname"
            className="mb-2"/>
      <FormControl defaultValue="Wonderland"
            placeholder="Last Name"
            id="wd-lastname"
            className="mb-2"/>
      <FormControl defaultValue="2000-01-01"
            type="date"
            placeholder="mm/dd/yyyy"
            id="wd-dob"
            className="mb-2"/> 
      <FormControl defaultValue="alice@wonderland" type="email" id="wd-email" className="mb-2"/>
      <FormSelect defaultValue="FACULTY" id="wd-role" className="mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </FormSelect>

      {/* <Link id="wd-signout-btn" to="/Kambaz/Account/Signin" >Sign out</Link> */}

      <Link id="wd-signout-btn"
            to="/Kambaz/Account/Signin"
            className="btn btn-danger w-100 mb-2">
            Sign out</Link>
    </div>
);}
