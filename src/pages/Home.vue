<template>
    <section class="home">
        <section class="left">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
                <li>
                    <img src="../../assets/images/icon-list.svg" alt="check-icon">
                    <p>Product discovery and building what matters</p>
                </li>
                <li>
                    <img src="../../assets/images/icon-list.svg" alt="check-icon">
                    <p>Measuring to ensure updates are a success</p>
                </li>
                <li>
                    <img src="../../assets/images/icon-list.svg" alt="check-icon">
                    <p>And much more!</p>
                </li>
            </ul>
            <SignupForm @submit-email="handleSubmit" />
        </section>
        <section class="right">
            <div class=""></div>
        </section>
    </section>
</template>


<script>
export default {
    data() {
        return {
            mail: ''
        }
    },
    methods: {
        handleSubmit(data) {
            this.mail = data
            return
        },
    }
}
</script>


<style></style>