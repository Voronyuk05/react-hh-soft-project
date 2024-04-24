import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as modalReducer } from './modal/modal.slice'
import { reducer as discussFormReducer } from './discussForm/discussForm.slice'
import { reducer as modalCoursesReducer } from './modalCourses/modalCourses.slice'
import { reducer as callFormReducer } from './callForm/callForm.slice'

const reducers = combineReducers({
    modal: modalReducer,
    discussform: discussFormReducer,
    modalCourses: modalCoursesReducer,
    callForm: callFormReducer
})

export const store  = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
    
})

export type RootState = ReturnType<typeof store.getState>