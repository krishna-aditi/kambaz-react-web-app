import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import accountReducer from "../Account/reducer";
import assignmentReducer from "../Courses/Assignments/reducer";
import enrollmentReducer from "../Enrollments/reducer";
import quizzesReducer from "../Courses/Quizzes/reducers/reducer";
import questionsReducer from "../Courses/Quizzes/reducers/questionsReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    enrollmentReducer,
    quizzesReducer,
    questionsReducer
  },
});
export default store;