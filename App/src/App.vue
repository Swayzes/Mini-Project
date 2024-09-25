--JS Stuff
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import axios from 'axios';

// function updateDetails(params) {
//   axios.get("http://127.0.0.1:5000/")
//   .then(function(response){
//     console.log(response);
//     alert(response);
//   })
//   .catch(function (error) {
//         console.log(error);
//   })
// }

function verifyAcc(event) {
  axios.get("http://localhost:5000/")
  .then(function(response){
    console.log(response);
    var users = JSON.parse( response.data );
    alert(response);
  })
  .catch(function (error) {
        console.log(error);
  })
}

function changeDetails(event) {
  console.log(document.getElementById("change").value);
  alert("Are you sure?");
}
</script>

<!-- <script>
import axios from 'axios';

document.getElementById("nameID")

export default {
  name:'accountdetails',
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
  },
  data() {
    return {
      errors: []
    }
  },

}
</script> -->

--HTML Stuff
<template>
  <h1>Bank Details</h1>
  <main>
    <p>Enter your Name and account number</p>
	  <input id="nameID"> Name </input>
	  <input id="accNumID">Account number</input>
    <button id="verifyBtn" @click="verifyAcc">Verify</button>
    
    <!-- Dropdown of options -->
    <div id="changeSect" class="hidden">
      <select id="Accountholder options">
        <option id="accountName">Account Name</option>
        <option id="accountType">Account Type</option>
        <option id="dateOfBirth">DoB</option>
        <option id="email">email</option>
        <option id="phone">phone</option>
      </select>
      <input id="change">Enter the change</input>
      <button id="changeBtn" @click="changeDetails">
      Click here to update details
      </button>
    </div>
    
  </main>
</template>

--CSS stuff
<style scoped>
header {
  line-height: 1.5;
}

.hidden{
  visibility: hidden;
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