<template>
    <section>
        <form @submit.prevent="submitForm">
            <div class="email-form">
                <p class="error-text" v-if="invalidSubmission">Valid email required</p>
                <label for="email">Email address</label>
                <input :class="{ 'error-input': invalidSubmission, '': !invalidSubmission }" type="email"
                    v-model="emailAddress" name="email" id="email" placeholder="email@company.com"
                    @input="checkValidity(emailAddress)">
            </div>
            <button>Subscribe to monthly newsletter</button>
        </form>

    </section>
</template>





<script>
import { useRouter } from 'vue-router';
import EventBus from '../EventBus';
const router = useRouter()

export default {
    data() {
        return {
            emailAddress: '',
            emailIsValid: false,
            invalidSubmission: false
        }
    },
    methods: {
        checkValidity(email) {
            if (email.trim() === '' || !email.includes('@')) {
                this.emailIsValid = false
                return
            }
            this.emailIsValid = true
        },
        submitForm() {
            console.log(EventBus.emittedData)
            EventBus.emittedData = this.emailAddress
            console.log(EventBus.emittedData)
            if (!this.emailIsValid) {
                this.invalidSubmission = true
                return
            } else {
                this.$emit('submit-email', this.emailAddress)

                this.$router.replace('/success')
            }
        }
    }
}
</script>

<style scoped>
label {
    display: block;
    font-size: 12px;
    font-weight: bold;
    color: var(--dark-grey);
    /* width: 100%; */
}

.email-form {
    position: relative;
}

.error-text {
    position: absolute;
    right: 0;
    color: var(--tomato);
    font-size: 12px;
    font-weight: bold;
}

.error-input {
    border-color: var(--tomato);
    background-color: hsla(4, 100%, 67%, 0.4);
}

.error-input:focus,
.error-input:active {
    border-color: var(--tomato);
    outline: 1.5px solid var(--tomato);
}

input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 4px;
    border: 1px solid grey;
    margin: 12px 0;
}
</style>