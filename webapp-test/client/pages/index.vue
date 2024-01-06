<template>
  <div class="container">
    <div class="username" @click="">
      {{ username }}
    </div>

    <div class="people" @click="navigateToPeopleYouMayKnow">
      People you may know
    </div>

    <CreateMurmur></CreateMurmur>

    <Timeline></Timeline>

    <PeopleYouMayKnow></PeopleYouMayKnow>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username: 'Rick', // Replace with actual username
        };
    },
    methods: {
        navigateToPeopleYouMayKnow() {
            this.$router.push('/people-you-may-know');
        }
    },
    components: { Timeline, Timeline, CreateMurmur, PeopleYouMayKnow }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.username {
  position: absolute;
  top: 10;
  right: 0;
  padding: 10px 35px 10px 10px;
  font-size: 18px;
  color: #1877F2;
  cursor: pointer;
  display: flex;
  align-items: center;
  /* Center the content vertically */
  justify-content: center;
  /* Center the content horizontally */
  background-color: #f4f4f4;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

.people {
  position: absolute;
  top: 10;
  left: 0;
  padding: 10px 35px 10px 10px;
  font-size: 18px;
  cursor: pointer;
  color: #1877F2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

.username:hover {
  background-color: #e0e0e0;
}
</style>
