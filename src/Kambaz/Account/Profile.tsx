import { Button, FormControl, FormSelect} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  useEffect(() => { fetchProfile(); }, []);

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <FormControl defaultValue={profile.username} 
                placeholder="username" 
                className="wd-username mb-2"
                onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>  

          <FormControl defaultValue={profile.password}   
                placeholder="password" type="password"
                className="wd-password mb-2" 
                onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>

          <FormControl defaultValue={profile.firstName}
                placeholder="First Name"
                id="wd-firstname"
                className="mb-2"
                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>

          <FormControl defaultValue={profile.lastName}
                placeholder="Last Name"
                id="wd-lastname"
                className="mb-2"
                onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/>

          <FormControl defaultValue={profile.dob}
                type="date"
                id="wd-dob"
                className="mb-2"
                onChange={(e) => setProfile({ ...profile, dob: e.target.value })}/> 

          <FormControl defaultValue={profile.email} 
                type="email" 
                id="wd-email" 
                className="mb-2"
                onChange={ (e) => setProfile({ ...profile, email: e.target.value })}/>

          <FormSelect onChange={(e) => setProfile({ ...profile, role:  e.target.value })}
                defaultValue="FACULTY" id="wd-role" className="mb-2">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
          </FormSelect>

          {/* <Link id="wd-signout-btn" to="/Kambaz/Account/Signin" >Sign out</Link> */}

          {/* <Link id="wd-signout-btn"
                to="/Kambaz/Account/Signin"
                className="btn btn-danger w-100 mb-2">
                Sign out</Link> */}
          <Button onClick={signout} className="btn-danger w-100 mb-2" id="wd-signout-btn">
            Sign out
          </Button>
        </div>
      )}
    </div>
);}
