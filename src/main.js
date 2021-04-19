import { createApp } from 'vue'
import 'default-passive-events'
import App from './App.vue'
import router from './router/index'
import 'vant/lib/index.css';

import { Popup, Toast, Dialog, Loading, Notify } from 'vant';

const app = createApp(App);

app.use(router);

app.use(Popup);
app.use(Toast);
app.use(Dialog);
app.use(Loading);
app.use(Notify);


app.mount('#app');
