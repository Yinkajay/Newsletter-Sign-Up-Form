<template>
    <section>
        <img src="../../assets/images/icon-success.svg" alt="">
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <span>{{ emittedData }}</span>. Please open it and click the button inside
            to confirm
            your subscription.</p>
        <router-link to="/">
            <button>Dismiss message</button>
        </router-link>
    </section>
</template>


<script>
import EventBus from '../EventBus';

export default {
    data() {
        return {
            emailAddress: this.emailAdd
        }
    },
    computed:{
        emittedData(){
            return EventBus.emittedData
        }
    }
}
</script>

<style scoped>
section {
    padding: 3rem;
    background-color: white;
    max-width: 30rem;
    border-radius: 10px;
}

p {
    margin: 15px 0;
}

section {
    height: 100%;
}

@media(max-width: 500px) {
    section {
        max-width: 100%;
        border-radius: 0;
        position: relative;
    }

    button {
        position: absolute;
        width: 80%;
        bottom: 24px;
        right: 0;
        transform: translateX(-10%);
    }
}
</style>