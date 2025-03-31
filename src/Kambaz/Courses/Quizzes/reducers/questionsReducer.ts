import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    questions: questions,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    // Create question
    // addQuestion: (state, { payload: question }) => {
    //   state.questions = [...state.questions, {...question}] as any;
    // },

    addQuestion: (state, { payload: question }) => {
        const newQuestion: any = {
        _id: uuidv4(),
        title: question.title,
        course: question.course,
        quiz: question.quiz, 
        questionType: question.questionType, 
        prompt: question.prompt, 
        possibleAnswers: question.possibleAnswers, 
        correctAnswers: question.correctAnswers, 
        points: question.points,
        };
        state.questions = [...state.questions, newQuestion] as any;
    },

    // Delete question
    deleteQuestion: (state, { payload: questionId }) => {
      state.questions = state.questions.filter(
        (q: any) => q._id !== questionId);
    },
    // Update question
    updateQuestion: (state, { payload: question }) => {
      state.questions = state.questions.map((q: any) =>
        q._id === question._id ? {...question} : q) as any;
    },
    // Edit question
    editQuestion: (state, { payload: question }) => {
      state.questions = state.questions.map((q: any) =>
        q._id === question._id ? { ...q, editing: question.edit } : q
      ) as any;
    },
  },
});
export const { addQuestion, deleteQuestion, updateQuestion, editQuestion } =
questionsSlice.actions;
export default questionsSlice.reducer;