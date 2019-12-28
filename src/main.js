import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

import store from "./store";

Vue.config.productionTip = false;

Vue.use(ViewUI);

router.beforeEach((to, from, next) => {
  debugger
  console.log(store.state);
  const userInfo = localStorage.getItem("userInfo");
  const role = userInfo ? JSON.parse(userInfo).role : ''
  if (to.meta.roles.includes(role) || to.path === "/login") {
    debugger
    next();
  } else {
    next({
      path: "/login"
    });
  }
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
