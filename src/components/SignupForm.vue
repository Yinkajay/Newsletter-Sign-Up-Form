<template>
    <section>
        <form>
            <div class="email-form">
                <p class="error-text">Valid email required</p>
                <label for="email">Email address</label>
                <input type="email" v-model="emailAddress" name="email" id="email" placeholder="email@company.com" :on-change="checkValidity(emailAddress)">
            </div>
            <button :disabled="!emailIsValid">Subscribe to monthly newsletter</button>
        </form>

    </section>
</template>


<script>
export default {
    data() {
        return {
            emailAddress: '',
            emailIsValid: false
        }
    },
    computed: {

    },
    methods: {
        checkValidity(email) {
            if (email.trim() === '' || !email.includes('@')) {
                this.emailIsValid = false
                return
            }
            this.emailIsValid = true
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

input {
    width: 100%;
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid grey;
    margin: 12px 0;
}

button {
    background-color: var(--dark-grey);
    color: white;
    width: 100%;
    border: none;
    padding: 1rem 32px;
    border-radius: 5px;
    cursor: pointer;
}

button:disabled {
    cursor: not-allowed;
    box-shadow: none;
}

button:hover {
    background-color: var(--tomato);
    box-shadow: 0px 6px 12px 2px rgba(255, 98, 87, 0.6);
}
</style>