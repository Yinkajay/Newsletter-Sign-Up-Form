<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- Sign-up form start -->
  <h1>
    Stay updated!
  </h1>

  <p>
    Join 60,000+ product managers receiving monthly updates on:
  </p>

  <ul>
    <li>Product discovery and building what matters</li>
    <li>Measuring to ensure updates are a success</li>
    <li>And much more!</li>
  </ul>

  And much more!

  Email address
  email@company.com

  Subscribe to monthly newsletter

  <!-- Sign-up form end -->

  <!-- Success message start -->

  Thanks for subscribing!

  A confirmation email has been sent to ash@loremcompany.com.
  Please open it and click the button inside to confirm your subscription.

  Dismiss message

  <!-- Success message end -->

  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a href="#">Your Name Here</a>.
  </div>
  <SignupForm />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
