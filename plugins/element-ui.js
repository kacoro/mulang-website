//import Vue from 'vue'
//import ElementUI from 'element-ui'
//Vue.use(ElementUI)
////Vue.prototype.$notify = Notification;

import Vue from 'vue'
import { Icon,Drawer,Pagination ,Message} from 'element-ui'
import { Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,Col} from 'element-ui'
import '../assets/css/element-variables.scss'
import 'element-ui/lib/theme-chalk/display.css';
Vue.prototype.$message = Message

Vue.use(Pagination)
Vue.use(Menu);
Vue.use(Col);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Drawer)
Vue.use(Icon)


