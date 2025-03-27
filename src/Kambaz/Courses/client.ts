import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// Fetch all courses from db
export const fetchAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    return response.data;
};

// Delete course
export const deleteCourse = async (id: string) => {
    const { data } = await axios.delete(`${COURSES_API}/${id}`);
    return data;
};

// Update course
export const updateCourse = async (course: any) => {
    const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
    return data;
};

// Create module for course
export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
    return response.data;
};  

// Read module for course
export const findModulesForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};

// Create assignment for course
export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
};  

// Read assignment for course
export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};
  


  
  