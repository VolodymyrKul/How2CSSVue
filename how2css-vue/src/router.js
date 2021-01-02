import Vue from 'vue'
import Router from 'vue-router'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Account from './components/Account'
import OwnAchievsList from './components/OwnAchievsList'
import AnotherAchievsList from './components/AnotherAchievsList'
import CompareAchievsList from './components/CompareAchievsList'
import SaveAchiev from './components/SaveAchiev'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: SignIn
        },
        {
            path: '/signup',
            component: SignUp
        },
        {
            path: '/account',
            component: Account
        },
        {
            path: '/ownachievs',
            component: OwnAchievsList
        },
        {
            path: '/antachievs',
            component: AnotherAchievsList
        },
        {
            path: '/compareachievs',
            component: CompareAchievsList
        },
        {
            path: '/saveachiev',
            component: SaveAchiev
        }
    ]
})