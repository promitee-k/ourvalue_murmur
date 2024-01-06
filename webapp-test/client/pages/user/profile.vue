<template>
    <div>
        <h1>Your Profile</h1>
        <div>
            <p>Username: {{ currentUser.name }}</p>
            <p>Followers: {{ currentUser.followercount }}</p>
            <p>Following: {{ currentUser.followingcount }}</p>
        </div>

        <div v-for="murmur in userMurmurs" :key="murmur.id" class="murmur">
            <div class="murmur-header">
                <span class="murmur-date">{{ murmur.date }}</span>
            </div>
            <div class="murmur-description">
                {{ murmur.description }}
                <button @click="deleteMurmur(murmur.id)" class="delete-button">Delete</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            currentUser: {
            },
            userMurmurs: [],
        };
    },
    mounted() {
        this.fetchUserMurmurs();
    },
    methods: {
        async getCurrentUser() {
            try {
                const response = await this.$axios.$get(`user/3`);
                this.currentUser = response.map(item => ({
                    id: item.id,
                    name: item.date,
                    followers: item.followercount,
                    following: item.followingcount,
                }));
            } catch (error) {
                console.error('Error fetching user murmurs:', error);
            }
        },
        async fetchUserMurmurs() {
            try {
                const response = await this.$axios.$get(`/murmur/user/${this.currentUser.id}`);
                this.userMurmurs = response.map(item => ({
                    id: item.id,
                    date: item.date,
                    description: item.title,
                }));
            } catch (error) {
                console.error('Error fetching user murmurs:', error);
            }
        },
        async deleteMurmur(murmurId) {
            try {
                await this.$axios.$delete(`murmur/currentuser=${currentUser.id}/murmurs/${murmurId}`);

                this.userMurmurs = this.userMurmurs.filter(murmur => murmur.id !== murmurId);

                console.log(`Murmur ${murmurId} deleted.`);
            } catch (error) {
                console.error('Error deleting murmur:', error);
            }
        },
    },
};
</script>
  
<style scoped>
</style>
  