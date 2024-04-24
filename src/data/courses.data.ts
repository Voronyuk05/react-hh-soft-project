import { ICourseItem, ICoursesData } from "../types/courses.types";

export const coursesData: ICoursesData =  {
    free: [
        {
            img: require('../images/revite_course.png'),
            title: 'Базовый курс Revit',
            paragraph: 'Обучение предусматривает просмотр видео и выполнение заданий для отработки и закрепления знаний.В конце курса вы соберете свою первую информационную модель и оформите чертежи на листы непосредственно из модели.',
        },
        {
            img: require('../images/neviswork_course.png'),
            title: 'Базовый курс Navisworks',
            paragraph: 'Autodesk Navisworks – это программа для комплексного управления BIM-проектами. В базовом курсе рассмотрены основные принципы работы с моделью. Курс подходит Курс является бесплатным и служит для знакомства с программой Navisworks.',
        },
        {
            img: require('../images/family_revit_course.png'),
            title: 'Основы создания семейств Revit',
            paragraph: 'В базовом курсе рассмотрены принципы создания семейств и даны примеры создания семейств решетки, окон, дверей и перемычек.А также информация как настроить марку и спецификацию под ваше семейства.',
        },
        {
            img: require('../images/group_revite_course.png'),
            title: 'Совместная работа в Revit',
            paragraph: 'Основной принцип технологии BIM проектирования -работа в едином пространстве и поддержание актуальности информации. Для этого необходимо настроить совместную работу над проектом.В курсе расмотрены варианты совместной работы в Revit',
        },
    ],
    paid: [
        {
            img: require('../images/childrens_BIM_course.png'),
            title: 'Курс «BIM для руководителей»',
            paragraph: 'В ходе курса слушатели познакомятся с базовыми положениями концепции BIM. Узнают последние тенденции в развитии технологии на государственном уровне, узнают о процессе создания и использования BIM модели, а также этапах внедрения технологии.',
        },
        {
            img: require('../images/worker_revit_course.png'),
            title: 'Курс «Рабочая документация раздела АР в Revit»',
            paragraph: 'Курс подойдет тем архитекторам, которые уже начали работать в программе и владеют базовыми навыками. В курсе подробно на примерах показаны варианты подсчета внутренней и наружной отделки и подсчета ТЭП.',
        },
        {
            img: require('../images/company_BIM_course.png'),
            title: 'Курс «BIM-менеджер для компаний-проектировщиков»',
            paragraph: 'Курс для специалистов, осуществляющих поддержку и развитие BIM технологии в компаниях, занимающихся проектированием. Скорость проектирования напрямую зависит от уровня подготовки BIM- менеджера.',
        },
        {
            img: require('../images/reinforcement_revit_course.png'),
            title: 'Курс «Армирование конструкций в Revit»',
            paragraph: 'Курс подойдет конструкторам, которые уже начали работать в программе и владеют базовыми навыками. В курсе подробно на примерах показаны инструменты для армирования конструкций и автоматического подсчета спецификаций.',
        },
    ]
}