//import Vue from 'vue'
//import ElementUI from 'element-ui'
//Vue.use(ElementUI)
////Vue.prototype.$notify = Notification;

import Vue from 'vue'
import { Message} from 'element-ui'
import { Menu,Submenu,MenuItem,MenuItemGroup,Col,Breadcrumb,BreadcrumbItem,Icon,Drawer,Pagination } from 'element-ui'
import {Form,FormItem,Input,Button } from 'element-ui'
import '../assets/css/element-variables.scss'
import 'element-ui/lib/theme-chalk/display.css';
Vue.prototype.$message = Message

Vue.use(Pagination)
Vue.use(Menu);
Vue.use(Col);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Drawer)
Vue.use(Icon)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)


