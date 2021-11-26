import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Activity from '@/pages/Activity.vue'
import Calendar from '@/pages/Calendar.vue'
import Files from '@/pages/Files.vue'
import Kanban from '@/pages/Kanban.vue'
import Tasks from '@/pages/Tasks.vue'
import NotFound from '@/pages/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/tasks'
  },
  {
    path: '/activity',
    component: Activity
  },
  {
    path: '/calendar',
    component: Calendar
  },
  {
    path: '/files',
    component: Files
  },
  {
    path: '/kanban',
    component: Kanban
  },
  {
    path: '/tasks',
    component: Tasks
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
