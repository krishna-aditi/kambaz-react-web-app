import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;

// Welcome
export const fetchWelcomeMessage = async () => { // async function to communicate with server (request, response)
    const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    return response.data;
};

// Fetch Assignment onject
export const fetchAssignment = async () => {
  const response = await axios.get(`${ASSIGNMENT_API}`);
  return response.data;
};
// Update Assignment Title
export const updateTitle = async (title: string) => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};
// Todos
export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};
// Remove Todo
export const removeTodo = async (todo: any) => {
    const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
    return response.data;
}
// Add Todo
export const createTodo = async () => {
    const response = await axios.get(`${TODOS_API}/create`);
    return response.data;
};

// Post method to add todo
export const postTodo = async (todo: any) => {
    const response = await axios.post(`${TODOS_API}`, todo);
    return response.data;
};

// Delete method to remove todo
export const deleteTodo = async (todo: any) => {
    const response = await axios.delete(`${TODOS_API}/${todo.id}`);
    return response.data;
};

// Put method to modify/update todo
export const updateTodo = async (todo: any) => {
    const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
    return response.data;
};
  
  
  