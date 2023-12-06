import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import YinxLgnd from './components/YinxLgnd.vue'
import SignupForm from './components/SignupForm.vue'
import SuccessCard from './components/SuccessCard.vue'

const app = createApp(App)

app.component('YinxLgnd', YinxLgnd)
app.component('SignupForm', SignupForm)
app.component( 'SuccessCard', SuccessCard)


app.mount('#app')
