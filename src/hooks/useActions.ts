import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { actions as moduleAction} from '../store/modal/modal.slice'
import { actions as discussFormActions } from '../store/discussForm/discussForm.slice'
import { actions as modalCoursesAction} from '../store/modalCourses/modalCourses.slice'
import { actions as callFormAction } from '../store/callForm/callForm.slice'

const rootActions = {
    ...moduleAction,
    ...discussFormActions,
    ...modalCoursesAction,
    ...callFormAction
    
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}