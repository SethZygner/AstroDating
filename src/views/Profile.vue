<script setup>

</script>

<template>

  <div class="profile">

    <div class="sideMenu">
      <div><h2>Picture</h2></div>
      <p>Zodiac: Libra</p>
      <p>Charlotte, NC</p>
      <button>Edit Profile</button>
    </div>

    <div class="right_side">
      <div class="bigPic">Thing</div>
      <div>
        <button class="messageButton">Message</button>
      </div>
      <div class="aboutMe">
        <h1 >About Me</h1>
        <div>

        </div>
      </div>
      <div class="bigPic">Thing</div>


    </div>
  </div>

</template>

<style scoped>



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
  width: 8em;
  height: 3em;
  border: none;
  border-radius: 10px;
  color: white;
}

.messageButton{
  background-color: dodgerblue;
  width: 42.5em;
  height: 4em;
  margin-top: 1em;
}

.sideMenu{
  border-right: 2px white solid;
  color: white;
  background-color: #0C101D;
}

.right_side{
  background-color: #0C101D;
  text-align: center;
  height: auto;

}


.bigPic{
  border: 1px white solid;
  height: 35em;
  width: 35em;
  margin: 2em auto 0 auto;
}

.aboutMe{
  width: 80%;
  height: 20em;
  background-color: #261F6A;
  margin: 1em auto;
  text-align: left;
  padding: 1em;
  border-radius: 20px;
  color: white;
}

.aboutMe h1{
  font-weight: lighter;
  margin: 0 0 .4em 0;
}

.aboutMe div{
  width: 90%;
  background-color: white;
  height: 75%;
  margin: 0 auto;
  border-radius: 20px;
}


.profile{
  display: grid;
  grid-template-columns: 20% 80%;
  text-align: center;
}

</style>
