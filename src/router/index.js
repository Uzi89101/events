import { createRouter, createWebHistory } from "vue-router";
import EventList from "@/views/EventList.vue";
import EventLayout from "@/views/event/LayoutEv.vue";
import EventDetails from "@/views/event/DetailsEv.vue";
import EventRegister from "@/views/event/RegisterEv.vue";
import EventEdit from "@/views/event/EditEv.vue";
import About from "@/views/AboutView.vue";
import NotFound from "@/views/NotFound.vue";
import NetworkError from "@/views/NetworkError.vue";



const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/events/:id",
    name: "EventLayout",
    props: true,
    component: EventLayout,
    children:[
      {
        path: "",
        name: "EventDetails",
        component: EventDetails,
      },
      {
        path: "register",
        name: "EventRegister",
        component: EventRegister,
      },
      {
        path: "edit",
        name: "EventEdit",
        component: EventEdit,
        meta:{requireAuth:true},
        
      },
      
      
      
    ]
  },
  {
    path:'/event/:afterEvent(.*)',
    redirect:to =>{
      return {path:'/events/' + to.params.afterEvent}
    },
    

  },
  {
    path: "/About-us",
    name: "About",
    component: About,
  },
  {
    path:'/about',
    redirect:{name:'About'}
  },
  {
    path:'/404/:resource',
    name:'404Resource',
    component:NotFound,
    props:true

  },
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior(to,from,savedPosition){
    if(to,from,savedPosition){
      return savedPosition
  }else{
    return {top:0}
  }
}



});

export default router;