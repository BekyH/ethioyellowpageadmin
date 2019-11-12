import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from "vuex";



import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';
import header from './components/header.vue';
import footer from './components/footer.vue';
import home from './components/home.vue';


import register from './components/register.vue';

import user from './components/user.vue';
import login from './components/login.vue';

import '@mdi/font/css/materialdesignicons.css';
import ajax from "vuejs-ajax";
import axios from 'axios';
import VueAxios from 'vue-axios';
 
Vue.use(VueAxios, axios)
Vue.use(ajax)
Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(Vuex);
export default new Vuetify({
 

  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
})
Vue.component('compheader',header)
Vue.component('compfooter',footer)
Vue.component('comphome',home)


Vue.component('register',register)

Vue.component('user',user)
Vue.component('login',login)


const store = new Vuex.Store(
  {
      state: {
          authenticated: false
      },
      mutations: {
          setAuthentication(state, status) {
              state.authenticated = status;
          }
      }
  }
);
let router = new VueRouter({
  routes:[
    {
      path: '/',
      redirect: {
          name: "login",
          component:login
      }
    },
   {
    path:'*',
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false) {
        
          next('/login');
          
      } else {
          next();
      }
  }
   },
    {
    path:'/home',
    name:'Home',
    component:home,
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false) {
        
          next('/login');
          
      } else {
          next();
      }
  }
    },
    {
      path:'/register',
      name:'Register',
      component:register,
      beforeEnter: (to, from, next) => {
        if(store.state.authenticated == false) {
            next('/login');
        } else {
            next();
        }
    }
    
  },
    {
      path:'/user',
      name:'user',
      component:user
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    
    
   
  ],
  mode:'history'
})
new Vue({
  el:"#app",
  vuetify,
  
  router,
  store: store,
  render: h => h(App)
})
