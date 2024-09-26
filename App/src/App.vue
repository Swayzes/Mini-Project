--JS Stuff
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import axios from 'axios';

async function checkAccounts(event) {
  axios.get("http://localhost:5000/")
    .then(result => {
      console.log('Fulfilled'); 
      console.log(result.data)
    })
    .catch( error =>  console.log(error));
}
function verifyAcc(event) {
  let nameID = document.getElementById('nameID').value;
  let accNumID = document.getElementById('accNumID').value;

  axios.get("http://localhost:5000/"+nameID+"/"+accNumID)
  .then(result => {
    console.log('Valid Account'); 
    console.log(result.data)
    var section = document.getElementById("accountSect")
    //Reformat when needed
    section.innerHTML += JSON.stringify(result.data)
    document.getElementById("changeSect").classList.remove("hidden")
  })
  .catch( error =>  console.log(error));
}

// Processes the PUT requests from API
function changeDetails(event) {
  console.log(document.getElementById("change").id);
  var option = document.getElementById("change").id

  //Needs ID from json
  axios.get("http://localhost:5000/"+option+"/")
  .then((result) => {

    //Update HTML with new JSON
    alert("Are you sure?");
  })
  .catch( error =>  console.log(error));
}
</script> 

--HTML Stuff
<template>
  <h1>Bank Details</h1>
  <main>
    <p>Enter your Name and account number</p>
	  <input id="nameID"> Name </input>
	  <input id="accNumID">Account number</input>
    <button id="verifyBtn" @click="verifyAcc">Verify</button>
    <button id="verifyBtn" @click="checkAccounts">test</button>
    
    <div id="changeSect" class="hidden">
      <div id="accountSect">
      </div>
      <!-- Dropdown of options -->
      <p>
        Select the detail you'd like to change and type in the change
      </p>
      <select id="Accountholder options">
        <option id="name">Account Name</option>
        <option id="accNum">Account Number</option>
        <option id="email">Email Address</option>
        <option id="phone">Phone Number</option>
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