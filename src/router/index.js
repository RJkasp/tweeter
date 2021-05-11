import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Profile from '../views/Profile.vue'
import Discover from '../views/Discover.vue'
import Feed from '../views/Feed.vue'
import EditMyProfile from '../views/EditMyProfile.vue'
import Friends from '../views/Friends.vue'
import MyTweets from '../views/MyTweets.vue'
import EditMyTweets from '../views/EditMyTweets.vue'
Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/discover',
    name: 'Discover',
    component: Discover
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/editmyprofile',
    name: 'EditMyProfile',
    component: EditMyProfile
  },
  {
    path: '/friends', 
    name: 'Friends',
    component: Friends
  },
  {
    path: '/mytweets', 
    name: 'MyTweets',
    component: MyTweets
  },
  {
    path: '/editmytweets',
    name: 'EditMyTweets',
    component: EditMyTweets
  },
]

const router = new VueRouter({
  routes
})

export default router
