import axios from "axios";
const REMOTE_SERVER = import.meta.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const findEnrollments = async (user: any) => {
    const response = await axios.get(`${ENROLLMENTS_API}/${user._id}`);
    return response.data;
}

export const enrollUser = async (user: any, course: any) => {
    const response = await axios.post(`${ENROLLMENTS_API}/${course._id}/${user._id}`);
    return response.data;
}

export const unenrollUser = async (user: any, course: any) => {
    const response = await axios.delete(`${ENROLLMENTS_API}/${course._id}/${user._id}`); 
    return response.data;
}; 