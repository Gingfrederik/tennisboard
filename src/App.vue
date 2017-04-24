<template>
	<router-view :scores="scores"></router-view>
</template>

<script>
import Firebase from 'firebase'

let config = {
apiKey: "AIzaSyBmGU4n6-VSKJmdM5wEwMV2meb2ZW8Zxu4",
    authDomain: "scoreboard-fa8e7.firebaseapp.com",
    databaseURL: "https://scoreboard-fa8e7.firebaseio.com",
    projectId: "scoreboard-fa8e7",
    storageBucket: "scoreboard-fa8e7.appspot.com",
    messagingSenderId: "971049472538"
}

let app = Firebase.initializeApp(config);
let db = app.database();

let scoreRef = db.ref('scores');

export default {
  name: 'app',
  firebase:{
    scores: scoreRef
  },
  components: {
  }
}
</script>

<style>

</style>
