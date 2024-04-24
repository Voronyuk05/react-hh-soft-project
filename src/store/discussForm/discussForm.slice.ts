import { createSlice } from "@reduxjs/toolkit";
import { IDiscussFormStates } from "../../types/discussForm.types";

const defaultState = {
    message: '',
    name: '',
    email: '',
    number: '',
    adress: ''
}

let initialState: IDiscussFormStates = defaultState

export const discussFormSlice = createSlice({
    name: 'discussForm',
    initialState: initialState,
    reducers: {
        handleChangeDuscussFormInput: (state, e) => {
            const {name, value} = e.payload.currentTarget
            state[name as keyof typeof state] = value
            console.log(state);
            
        },

        handleSubmitDiscussForm: (state, e) => {
            e.payload.preventDefault()
            state.message = ''
            state.name = ''
            state.email = ''
            state.number = ''
            state.adress = ''
        }
    }
})

export const {handleChangeDuscussFormInput} = discussFormSlice.actions
export const {actions, reducer} = discussFormSlice