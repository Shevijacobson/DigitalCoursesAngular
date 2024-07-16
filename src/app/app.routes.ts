import { Routes } from '@angular/router';
import { CurrentLessonComponent } from './Components/current-lesson/current-lesson.component';
import { TeacherMainPageComponent } from './Components/teacher-main-page/teacher-main-page.component';
import { LoginComponent } from '../app/Components/login/login.component'
import { HomePageManagerComponent } from './Components/home-page-manager/home-page-manager.component';
import { CurrentCourseComponent } from './Components/current-course/current-course.component';
import { CourseReportComponent } from './Components/course-report/course-report.component';
import { StudentReportComponent } from './Components/student-report/student-report.component';
import { DisplayCoursesByUserComponent } from './Components/display-courses-by-user/display-courses-by-user.component';
import { TeachersAndStudentsReportComponent } from './Components/teachers-and-students-report/teachers-and-students-report.component';
import { AddCourseComponent } from './Components/add-course/add-course.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';




export const routes: Routes = [
    { path: 'Home', component: LoginComponent },
    { path: 'idCourse/:idCourse/currentLesson/:numberIdLesson', component: CurrentLessonComponent },
    { path: 'HomePageTeacher', component: TeacherMainPageComponent },
    {
        path: 'HomePageManager', component: HomePageManagerComponent, children: [
            { path: 'managerAllCourses', component: DisplayCoursesByUserComponent },
            { path: 'CurrentCourse/:courseId', component: CurrentCourseComponent },
            { path: 'teachersReport', component: TeachersAndStudentsReportComponent },
            { path: 'editTeacher', component: AddUserComponent },
            { path: 'editStudent', component: AddUserComponent },
            { path: 'addTeacher', component: AddUserComponent },
            { path: 'addStudent', component: AddUserComponent },
            { path: 'addCourse', component: AddCourseComponent },
            { path: 'studentsReport', component: TeachersAndStudentsReportComponent },
        ]
    },
    { path: 'DisplayCourse/CurrentCourse/:courseId', component: CurrentCourseComponent },
    { path: 'HomePageStudent', component: DisplayCoursesByUserComponent },
    { path: "report/courseId/:idCourse", component: CourseReportComponent },
    { path: "report/courseId/:idCourse/studentId/:idStudent", component: StudentReportComponent },
    { path: "studentReport", component: StudentReportComponent },

];