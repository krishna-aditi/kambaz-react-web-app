import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import store from "./store";
import { Provider } from "react-redux";

export default function Labs() {
  return (
    <Provider store={store}>
      <div id="wd-labs" className="container-fluid">
        <h1>Labs</h1>
        Name: <b>Aditi Krishna</b>
        <br/>
        Class: <b>CS5610 - Section 01</b>
        <br/>
        Semester: <b>Spring 2025</b>
        <br/>
        Github Repository: <a href = "https://github.com/krishna-aditi/kambaz-react-web-app">https://github.com/krishna-aditi/kambaz-react-web-app</a> 
        <br/>
        Link to Kambaz Web App on Netlify Assignment-3: <a href="https://a3--kambaz-react-web-app-aditikrishna.netlify.app">https://a3--kambaz-react-web-app-aditikrishna.netlify.app</a>
        <br/>
        <TOC />
        <br/>
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4" element={<Lab4/>}/>
        </Routes>
      </div>
    </Provider>
);}
