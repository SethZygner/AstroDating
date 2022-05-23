<script setup>
import fire from "./firebase.js"
import {RouterLink, RouterView, useRouter} from 'vue-router'
const router = useRouter();



</script>

<template>
  <div class="fullTop">
    <div class="logo">
      <img src="./assets/images/Astro.png" alt="">
    </div>

    <div class="menu-bar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/">About Us</RouterLink>
      <RouterLink to="/">Discover</RouterLink>
      <RouterLink to="/">Contact</RouterLink>
    </div>

    <button v-if="fire.signedIn.value" class="loginButton" @click="router.push('/account')">Account</button>
    <button v-else  @click="router.push('/signUp')" class="loginButton">Log In</button>


  </div>




  <RouterView :key="$route.path" />

  <div class="bottomStuff">
    <div>
      <img src="./assets/images/Astro.png">
    </div>
    <div>
      <h3>Navigation Bar</h3>
      <div><RouterLink to="/">Home</RouterLink></div>
      <div><RouterLink to="/">About Us</RouterLink></div>
      <div><RouterLink to="/">Discover</RouterLink></div>
      <div><RouterLink to="/">Contact</RouterLink></div>
    </div>
    <div>
      <h3>Help</h3>
      <div><RouterLink to="/">Getting Started</RouterLink></div>
      <div><RouterLink to="/">Network Status</RouterLink></div>
      <div><RouterLink to="/">FAQ</RouterLink></div>
    </div>
    <div>
      <h3>Subscribe to our Newsletter</h3>
      <input type="text" placeholder="Enter email address">
      <button>Send</button>
    </div>

  </div>


</template>

<style>

.logo img{
  position: absolute;
  left: 1em;
  top: 1em;
  height: 3.2em;
  width: auto;
}

.fullTop{
  display: grid;
  grid-template-columns: 15% 70% 15%;
  background-color: #0C101D;
  height: 5em;
  border-bottom: 1px white solid;
}

.menu-bar{
  text-align: center;
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin: 2em;
}

.menu-bar a{
  color: white;
  text-decoration: none;
}


.loginButton{
  background-color: #261F6A;
  height: 3.5em;
  width: 10em;
  margin-top: 1em;
  border-radius: 1em;
  padding: 1px;
  float: right;
  margin-right: 2em;
  color: white;
  border: none;
}


.bottomStuff{
  background-color: #0C101D;
  height: 11em;
  display: grid;
  grid-template-columns: auto auto auto auto;
  color: white;
  border-top: 2px white solid;
}

.bottomStuff div{
  text-align: center;
}

.bottomStuff div input{
  background-color: transparent;
  border: 1px white solid;
  border-radius: 5px;
  width: 20em;
  height: 2em;
  color: white;
  padding: 3px;
}

.bottomStuff div input::placeholder{
  color: darkgrey;
}

.bottomStuff div button{
  height: 2.3em;
  width: 5em;
  margin-left: 1em;
  background-color: #261F6A;
  border: none;
  color: white;
  border-radius: 7px;
}

.bottomStuff div div{
  margin-bottom: .3em;
}

.bottomStuff div div a{
  text-decoration: none;
  color: white;
}

button:hover{
  cursor: pointer;
}

</style>
