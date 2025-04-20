import { QuizSubmission } from "./QuizSubmissionType";
import axios from "axios";

// const API_BASE = "http://localhost:4000/api";
// const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const BASE_API = `${REMOTE_SERVER}/api`;

const axiosWithCredentials = axios.create({ withCredentials: true });

// export const createSubmission = async (quizId: string, submission: Partial<QuizSubmission>) => {
//   const response = await fetch(`${API_BASE}/quizzes/${quizId}/submit`, {
//     method: "POST",
//     body: JSON.stringify(submission),
//     headers: { "Content-Type": "application/json" },
//   });
//   return response.json();
// };
export const createSubmission = async (quizId: string, submission: Partial<QuizSubmission>) => {
  const response = await axiosWithCredentials.post(
    `${BASE_API}/quizzes/${quizId}/submit`,
    submission
  );
  return response.data;
};

// export const fetchSubmissions = async (quizId: string, studentId: string) => {
//   const response = await fetch(`${API_BASE}/quizzes/${quizId}/submissions/${studentId}`);
//   return response.json();
// };
export const fetchSubmissions = async (quizId: string, studentId: string) => {
  const response = await axiosWithCredentials.get(
    `${BASE_API}/quizzes/${quizId}/submissions/${studentId}`
  );
  return response.data;
};


// export const fetchSubmissionById = async (submissionId: string) => {
//   const response = await fetch(`${API_BASE}/submissions/${submissionId}`);
//   return response.json();
// };
export const fetchSubmissionById = async (submissionId: string) => {
  const response = await axiosWithCredentials.get(
    `${BASE_API}/submissions/${submissionId}`
  );
  return response.data;
};


// export const updateSubmissionScores = async (submissionId: string, updates: any) => {
//   const response = await fetch(`${API_BASE}/submissions/${submissionId}/scores`, {
//     method: "PUT",
//     body: JSON.stringify({ updates, role: updates.role }),
//     headers: { "Content-Type": "application/json" },
//   });
//   return response.json();
// };
export const updateSubmissionScores = async (submissionId: string, updates: any) => {
  const response = await axiosWithCredentials.put(
    `${BASE_API}/submissions/${submissionId}/scores`,
    { updates, role: updates.role }
  );
  return response.data;
};