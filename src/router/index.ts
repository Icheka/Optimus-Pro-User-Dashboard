import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Homepage from '../views/Homepage.vue';

import Overview from '../views/Overview.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Dashboard from '../views/student/Dashboard.vue';
import ChangePassword from '../views/student/ChangePassword.vue';
import NewNote from '../views/notes/NewNote.vue';
import MyCourses from '../views/student/MyCourses.vue';
import AllCourses from '../views/student/AllCourses.vue';
import AllBroadcasts from '../views/broadcasts/AllBroadcasts.vue';
import CompleteRegistration from '../views/CompleteRegistration.vue';
import LoginHistory from '../views/LoginHistory.vue';
import CourseDetails from '../views/CourseDetails.vue';
import CourseView from '../views/CourseView.vue';
import CreateReport from '../views/CreateReport.vue';
import Reports from '../views/ViewReport.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import Chats from '../views/Chats.vue';

//investor
import InvestorOverview from '../investor/Overview.vue';
import iDashboard from '../investor/iDashboard.vue';

//coming soon
import ComingSoon from '../views/ComingSoon.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Homepage
  },
  {
    path: '/signup',
    name: 'Sign up',
    component: Signup
  },
  {
    path: '/auth',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: '',
    redirect: '/student/dashboard',
    component: Overview
  },
  {
    path: '/investor',
    name: 'Investor',
    component: InvestorOverview,
    children: [
      {
        path: '/investor/dashboard',
        name: "Investor Dashboard",
        component: iDashboard
      }
    ]
  },
  {
    path: '/student',
    redirect: '/student/dashboard',
    name: 'Overview',
    component: Overview,
    children: [
		{
		  path: '/student/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/student/settings/password',
        name: 'Change Password',
        component: ChangePassword
      },
      {
        path: '/chats',
        name: 'Chat',
        component: Chats
      },
      {
        path: '/student/dashboard/notes/new',
        name: 'Create New Note',
        component: NewNote
      },
      {
        path: '/student/dashboard/my_courses',
        name: 'My Courses',
        component: MyCourses
      },
      {
        path: '/student/dashboard/all_courses',
        name: 'All Courses',
        component: AllCourses
      },
      {
        path: '/student/dashboard/notifications',
        name: 'Notifications',
        component: AllBroadcasts
      },
      {
        path: '/student/dashboard/complete-registration',
        name: 'Complete Registration',
        component: CompleteRegistration
      },
      {
        path: '/student/dashboard/login-history',
        name: 'Login History',
        component: LoginHistory
      },
      {
        path: '/academy/courses/:course_title/:course_id',
        name: 'Course Details',
        component: CourseDetails
      },
      {
        path: '/academy/courses/view/:course_title/:course_id',
        name: 'Course',
        component: CourseView
      },
      {
        path: '/student/reports/new',
        name: 'Create Report',
        component: CreateReport
      },
      {
        path: '/student/reports',
        name: 'My Reports',
        component: Reports
      },
      {
        path: '/forgot_password',
        name: 'Forgot Password',
        component: ForgotPassword
      },
      {
        path: '/coming-soon',
        name: 'Coming Soon',
        component: ComingSoon
      }
    ]
  },
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
