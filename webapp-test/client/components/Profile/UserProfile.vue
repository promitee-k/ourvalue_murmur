<template>
    <div>
        <h1>Your Profile</h1>
        <div>
            <p>Username: {{ currentUser.name }}</p>
            <p>Followers: {{ currentUser.followers }}</p>
            <p>Following: {{ currentUser.following }}</p>
        </div>
        <div>
            <p>Murmurs:</p>
            <div v-for="murmur in murmurs" :key="murmur.id" class="murmur">
                <div class="murmur-header">
                <span></span>
            </div>
                <div class="murmur-description">
                    {{ murmur.description }}
                    <button @click="deleteMurmur(murmur.id)" class="delete-button">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            currentUser: {id:3,name:'Rick Sanchez',followercount:0,followingcount:5},
            murmurs: [{description:'dummy murmur',id:1},{description:'dummy murmur 2',id:2}],
        };
    },
    mounted() {
        this.getCurrentUser();
   
    },
    methods: {
        async getCurrentUser() {
            try {
                const response = await this.$axios.$get(`user/3`); //default current userid is 3
                console.log(response)
                this.currentUser = {
                    id: response.id,
                    name: response.name,
                    followers: response.followercount,
                    following: response.followingcount,
                };
                this.fetchmurmurs();
            } catch (error) {
                console.error('Error fetching user murmurs:', error);
            }
            
        },
        async fetchmurmurs() {
            try {
                const response = await this.$axios.$get(`murmur/user=${this.currentUser.id}/murmurs`);
                this.murmurs = response.map(item => ({
                    id: item.id,
                    description: item.description,
                }));
            } catch (error) {
                console.error('Error fetching user murmurs:', error);
            }
        },
        async deleteMurmur(murmurId) {
            try {
                await this.$axios.$delete(`murmur/${murmurId}`);

                this.murmurs = this.murmurs.filter(murmur => murmur.id !== murmurId);

                console.log(`Murmur ${murmurId} deleted.`);
            } catch (error) {
                console.error('Error deleting murmur:', error);
            }
        },
    },
};
</script>
  
<style scoped></style>
  