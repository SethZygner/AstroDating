<script setup>
import {ref} from "vue";
import fire from "../firebase.js"
import {useRouter} from "vue-router";

let upToIn = ref(false);
const router = useRouter();
let DOB = ref("");
let newEmail = ref("");
let newPassword = ref("");
let newRePassword = ref("");
let newUsername = ref("");
let sign = ref("");
let email = ref("");
let password = ref("");




function getSign(date){
  const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
  const signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo",    "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
  let month = date.getMonth();
  let day = date.getDate();
  if(month === 0 && day <= 20){
    month = 11;
  }else if(day < days[month]){
    month--;
  }
  sign.value = signs[month];
}

function signUp(){
  if(DOB.value !== ""){
    let optimizedBirthday = DOB.value.replace(/-/g, "/");
    let myBirthday = new Date(optimizedBirthday);
    let myAge = ~~((Date.now() - myBirthday) / (31557600000));
    getSign(myBirthday);

    if(myAge > 18) {
      if(newEmail.value.trim() !== "" && newPassword.value.trim() !== "" && newRePassword.value.trim() !== "" && newUsername.value.trim() !== ""){

        if(newPassword.value.trim() === newRePassword.value.trim()){
          try{

            fire.signUp(newEmail.value, newPassword.value, newUsername.value, DOB.value, sign.value, myAge);


          }catch (err){
            alert(err.message);
          }
        }else{
          alert("Passwords don't match");
        }

      }else{
        alert("Make sure to fill out every box to sign up")
      }
    }else{
      alert("Must be 18+ to create an account");
    }
  }else{
    alert("Enter a valid date");
  }


}

function signIn(){
  if(email.value.trim() !== "" && password.value.trim() !== ""){
      fire.signIn(email.value.trim(), password.value.trim());
      router.push('/');
  }else{
    alert("Some fields are missing");
  }

}


</script>


<template>
<div class="allContent">


  <div class="signUpAndPic">
    <div v-if="upToIn" class="signInSignUpContainer">
      <h2>Sign Up</h2>
      <input v-model="newUsername" type="text" placeholder="Username">
      <br>
      <input v-model="newEmail" type="email" placeholder="Email">
      <br>
      <input v-model="newPassword" type="password" placeholder="Password">
      <br>
      <input v-model="newRePassword" type="password" placeholder="Re-enter Password">
      <br>
      <input v-model="DOB" type="date" placeholder="DOB">
      <br>
      <button @click="signUp">Sign Up</button>
      <br>
      <h3>Already have an account? <span @click="upToIn = !upToIn" class="alreadyHaveAccount">Sign In</span></h3>
    </div>


    <div v-else class="signInSignUpContainer">
      <h2>Log In</h2>
      <input v-model="email" type="email" placeholder="Email">
      <br>
      <input v-model="password" type="password" placeholder="Password">
      <br>
      <button @click="signIn">Sign In</button>
      <br>
      <h3>Don't have an account? <span @click="upToIn = !upToIn" class="alreadyHaveAccount">Sign Up</span></h3>
    </div>





    <div class="picContainer">
      <img src="../assets/images/signUpPagePic.jpg" alt="">
      <p>Find your future partner today!</p>
    </div>
  </div>

</div>


</template>


<style scoped>

.allContent{
  height: 45em;
  background-color: #0C101D;
  border-bottom: 2px white solid;
  border-top: 2px white solid;
  color: white;
}

input{
  height: 3em;
  width: 35em;
  border-radius: 10px;
  font-size: 1em;
  padding: 0;
  border: none;

  margin: 0 2em 2em 2em;
  text-align: center;
}

button{
  background-color: #261F6A;
  width: 30em;
  height: 4em;
  border: none;
  border-radius: 20px;
  color: white;
}

.signUpAndPic{
  display: grid;
  grid-template-columns: 50% 50%;
  text-align: center;
  margin: 2em auto;
}

.signInSignUpContainer{
  margin: 3em;
  border-radius: 15px;
}

.picContainer img{
  width: 30em;
  margin-top: 4em;
  border: #261F6A 2px solid;
}

.alreadyHaveAccount{
  color: dodgerblue;
}

.alreadyHaveAccount:hover{
  cursor: pointer;
}

</style>
