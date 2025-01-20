import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      Name: <b>Aditi Krishna</b>
      <br/>
      Class: <b>CS5610 - Section 01</b>
      <br/>
      Semester: <b>Spring 2025</b>
      <br/>
      Please <a href = "https://github.com/krishna-aditi"> click here </a> for Aditi Krishna's GitHub repository.
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
);}
