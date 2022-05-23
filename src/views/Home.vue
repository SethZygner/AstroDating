<script setup>
import fire from "../firebase.js"
import {useRouter} from "vue-router";

let router = useRouter();

fire.checkIfSignedIn();




</script>


<template>
  <div class="topPortion">
    <div>
      <h1>Welcome to<br>Astronomical!</h1>
      <p>Where you can find your fated partner through the power<br>of Zodiac</p>
      <button v-if="!fire.signedIn.value"  class="signInButton" @click="router.push('/signUp')">Sign Up</button>
      <button v-else @click="fire.signOut()">Sign Out</button>
    </div>
  </div>
  <div class="middlePortion">
    <img src="../assets/images/homeSecond.png">
    <div>
      <h3>What does your Zodiac<br>say about your live life?</h3>
      <p>Here, you can find your sign and understand<br>more about yourself and your future partner</p>
    </div>
  </div>


  <div class="bottomPortion">
    <div class="bottomPortionCaption">
      <h1>Zodiac</h1>
    </div>
    <div class="signs">
      <div class="sign"><h2>Aquarius</h2><div class="image_view"><img src="../assets/icons/aqu.png" alt=""></div></div>
      <div class="sign"><h2>Ares</h2><div class="image_view"><img src="../assets/icons/Ares.png" alt=""></div></div>
      <div class="sign"><h2>Cancer</h2><div class="image_view"><img src="../assets/icons/Cancer.png" alt=""></div></div>
      <div class="sign"><h2>Capricorn</h2><div class="image_view"><img src="../assets/icons/cap.png" alt=""></div></div>
      <div class="sign"><h2>Gemini</h2><div class="image_view"><img src="../assets/icons/Gemini.png" alt=""></div></div>
      <div class="sign"><h2>Leo</h2><div class="image_view"><img src="../assets/icons/Leo.png" alt=""></div></div>
      <div class="sign"><h2>Libra</h2><div class="image_view"><img src="../assets/icons/libra.png" alt=""></div></div>
      <div class="sign"><h2>Pisces</h2><div class="image_view"><img src="../assets/icons/pisc.png" alt=""></div></div>
      <div class="sign"><h2>Sagittarius</h2><div class="image_view"><img src="../assets/icons/sag.png" alt=""></div></div>
      <div class="sign"><h2>Scorpio</h2><div class="image_view"><img src="../assets/icons/scorpio.png" alt=""></div></div>
      <div class="sign"><h2>Taurus</h2><div class="image_view"><img src="../assets/icons/Taurus.png" alt=""></div></div>
      <div class="sign"><h2>Virgo</h2><div class="image_view"><img src="../assets/icons/virgo.png" alt=""></div></div>
    </div>

  </div>
</template>








<style scoped>
  .topPortion div{
    background-image: url("../assets/images/spaceBackground.jpg");
    width: 100%;
    height: 39em;
    color: white;
    text-align: center;
    padding: 1px;
    border-bottom: 1px white solid;
  }

  .topPortion div h1{
    margin-top: 1.5em;
    font-size: 6em;
    font-weight: lighter;
    letter-spacing: 6px;
  }

  .topPortion div p{
    font-weight: lighter;
    letter-spacing: 3px;
    font-size: 1.625em;
  }

  button{
    width: 9em;
    height: 3em;
    background-color: #261F6A;
    border-radius: 50px;
    font-size: 1.2em;
    border: none;
    color: white;
  }

  .middlePortion{
    width: 100%;
    height: 30em;
    background-color: #07043B;
  }

  .middlePortion img{
    left: 39.8em;
    position: absolute;
  }

  .middlePortion div{
    float: left;
    color: white;
    text-align: center;
    width: 35em;
    margin-top: 10em;
    margin-left: 10em;
  }

  .middlePortion div h3{
    font-size: 2em;
  }


  .bottomPortion{
    background-color: #0C101D;
    text-align: center;
    color: white;
  }

  .signs{
    display: grid;
    padding: 1.5em;
    grid-template-columns: 25% 25% 25% 25%;
    text-align: center;
  }

  .bottomPortionCaption{
    width: 100%;
    border-top: 2px white solid;
    font-weight: lighter;
    text-decoration-line: underline;
  }

  .bottomPortion h2{
    font-weight: lighter;
    width: fit-content;
    margin: 0 auto;
  }

  .bottomPortion h2:hover{
    cursor: pointer;
    text-decoration-line: underline;
    z-index: 100;
  }

  .bottomPortion div img{
    width: 4em;
    height: auto;
    margin-top: 1em;
    border-radius: 50%;
  }

  .image_view{
    border-radius: 50%;
    background-color: #261F6A;
    width: 6em;
    height: 6em;
    margin: 1em auto;
  }

  .image_view:hover{
    cursor: pointer;
  }
</style>
