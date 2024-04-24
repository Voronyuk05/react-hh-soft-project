import { createSlice } from "@reduxjs/toolkit";
import { ICallFormStates } from "../../types/callForm.types";

const defaultState = {
    message: '',
    name: '',
    email: '',
    number: '',
}

let initialState: ICallFormStates = defaultState

export const callFormSlice = createSlice({
    name: 'callForm',
    initialState: initialState,
    reducers: {
        handleChangeCallFormInput: (state, e) => {
            const {name, value} = e.payload.currentTarget
            state[name as keyof typeof state] = value
        },

        handleSubmitCallForm: (state, e) => {
            e.payload.preventDefault()
            state.message = ''
            state.name = ''
            state.email = ''
            state.number = ''
        }
    }
})

export const {handleChangeCallFormInput, handleSubmitCallForm} = callFormSlice.actions
export const {actions, reducer} = callFormSlice