<!-- --JS Stuff
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script> -->

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`http://127.0.0.1:5000/`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

--HTML Stuff
<template>
  <h1>Bank Details</h1>
  <p>Enter your Name and account number</p>
	<input> Name </input>
	<input> Account number </input>
  
  <!-- Dropdown of options -->
  <input > </input>
  <button>
  Click here to update details
  <!--  Add alert here for are you sure?  -->
  </button>
</template>

--CSS stuff
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>


<!-- 
npm run build
npm run dev 
node REST.js
node main.js
-->