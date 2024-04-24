
export interface ICoursesData {
    free: ICourseItem[]
    paid: ICourseItem[]
}


export interface ICourseItem {
    img: string
    title: string
    paragraph: string
}