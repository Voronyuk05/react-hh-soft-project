import { createSlice } from '@reduxjs/toolkit';
import { IModalCoursesStates } from '../../types/modalCourses';

const initialState: IModalCoursesStates = {
    isShowed: false,
    name: '',
    number: '',
    email: '',
    isSent: false
}

export const modalCoursesSlice = createSlice({
    name: 'modalCourses',
    initialState,
    reducers: {
        handleToggleModalCourses: (state) => {
            state.isShowed = !state.isShowed
            console.log(state.isShowed);
            
        },

        handleChangeModalCoursesInput: (state, e) => {
            const {name, value} = e.payload.currentTarget
            if(name === 'name') {
                state.name = value
            } else if (name === 'number') {
                state.number = value
            }else if (name === 'email') {
                state.email = value
            }
        },

        handleModalCoursesSubmit: (state) => {
            if( state.name !== '' && state.number !== '' && state.email !== '') {
                state.isSent = true
            }
        }
    }
})

export const {handleToggleModalCourses, handleChangeModalCoursesInput, handleModalCoursesSubmit} = modalCoursesSlice.actions
export const {actions, reducer} = modalCoursesSlice