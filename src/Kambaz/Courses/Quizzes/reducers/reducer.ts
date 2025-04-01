import { createSlice } from "@reduxjs/toolkit";
import { quizzes} from "../../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    quizzes: quizzes,
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    addQuiz: (state, { payload: quiz }) => {
        const newQuiz: any = {
        _id: uuidv4(),
        title: quiz.title,
        course: quiz.course,
        instruction: quiz.instruction,
        dueDate: quiz.dueDate,
        availableFromDate: quiz.availableFromDate,
        availableUntilDate: quiz.availableUntilDate,
        // quizType: quiz.quizType,
        // assignmentGroup: quiz.assignmentGroup,
        // shuffleAnswers: quiz.shuffleAnswers,
        // timeLimit: quiz.timeLimit,
        // multipleAttempts: quiz.multipleAttempts,
        // attempts: quiz.attempts,
        // showCorrectAnswers: quiz.showCorrectAnswers,
        // oneQuestionAtATime: quiz.oneQuestionAtATime,
        // webcamRequired: quiz.webcamRequired,
        // published: quiz.published
        };
        state.quizzes = [...state.quizzes, newQuiz] as any;
    },
    // Delete --> needs a quizId
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter(
        (q: any) => q._id !== quizId);
    },
    // Update --> needs a quiz object
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quiz._id ? quiz : q) as any;
    },
  }
});
export const { setQuizzes, addQuiz, deleteQuiz, updateQuiz  } =
    quizzesSlice.actions;
export default quizzesSlice.reducer;