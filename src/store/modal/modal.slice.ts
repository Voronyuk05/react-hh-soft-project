import { createSlice } from '@reduxjs/toolkit';
import { IModalStates } from '../../types/modal.types';

const initialState: IModalStates = {
    isShowed: false,
    name: '',
    number: '',
    isSent: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        handleToggleModal: (state) => {
            state.isShowed = !state.isShowed
        },

        handleChangeInput: (state, e) => {
            const {name, value} = e.payload.currentTarget
            if(name === 'name') {
                state.name = value
            } else if (name === 'number') {
                state.number = value
            }
        },

        handleSubmit: (state) => {
            
            if( state.name !== '' && state.number !== '') {
                state.isSent = true
            }
        }
    }
})

export const {handleToggleModal, handleChangeInput, handleSubmit} = modalSlice.actions
export const {actions, reducer} = modalSlice