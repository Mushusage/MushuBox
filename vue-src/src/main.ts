/*
 * Copyright 2026 Mushu
 * Licensed under the Apache License, Version 2.0. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
import './assets/theme.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router/router.ts'
import {createPinia} from "pinia";

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
