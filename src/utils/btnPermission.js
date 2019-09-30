import Vue from 'vue'
/**权限指令  配合路由使用版本**/
/**
 * {

      path:'/permission',

      component: Layout,

      meta: { btnPermissions: ['admin','supper','normal'] //页面需要的权限

    }
 */
// const has = Vue.directive('has', {
//     bind: function(el, binding, vnode) {
//         // 获取按钮权限
//         let btnPermissions = vnode.context.$route.meta.btnPermissions.split(",");   配合路由来
//         if (!Vue.prototype.$_has(btnPermissions)) {
//             el.parentNode.removeChild(el);
//         }
//     }
// });


// 权限检查方法
// Vue.prototype.$_has = function(value) {
//     let isExist = false;
//     //获取用户所有的按钮权限   
//     let btnPermissionsStr = sessionStorage.getItem("accessUser").authorities;  
//     if (btnPermissionsStr == undefined || btnPermissionsStr == null) {
//         return false;
//     }
//     if (value.indexOf(btnPermissionsStr) > -1) {
//         isExist = true;
//     }
//     return isExist;
// };
// export {
//     has
// }



/**权限指令  配合指令传值版本**/
const has = Vue.directive('has', {
    bind: function(el, binding) {
     if (!Vue.prototype.$_has(binding.value)) {
      el.parentNode.removeChild(el);
     }
    }
});


Vue.prototype.$_has = function(value) {
    let isExist=false;
    let buttonpermsStr = sessionStorage.getItem("buttenpremissions");  // 获取用户有的所有按钮权限
    if(buttonpermsStr==undefined || buttonpermsStr==null){
     return false;
    }
    let buttonperms=JSON.parse(buttonpermsStr);
    for(let i=0;i<buttonperms.length;i++){
     if(buttonperms[i].perms.indexOf(value)>-1){
      isExist=true;
      break;
     }
    }
    return isExist;
};


// 使用   在main的js 中 引入  import  has from  'btnPermissions.js';