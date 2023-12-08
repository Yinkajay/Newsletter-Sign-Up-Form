import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SignupForm from './components/SignupForm.vue'
import SuccessCard from './components/SuccessCard.vue'
import router from './router'

const app = createApp(App)

app.component('SignupForm', SignupForm)
app.component( 'SuccessCard', SuccessCard)

app.use(router)

app.mount('#app')
