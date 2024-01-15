<template>
    <div class="timeline">
        <div v-for="murmur in murmurs" :key="murmur.id" class="murmur">
            <div class="murmur-header">
                <!--  use user_id instead of murmur.id -->
                <NuxtLink :to="`/user/${murmur.user_id}`" class="username-link">{{ murmur.username }}</NuxtLink>
            </div>
            <div class="murmur-description">
                {{ murmur.description }}
                <p>{{ murmur.likes }} likes </p>
            </div>
            <button @click="likeMurmurHandler(murmur.id)" class="like-button">Like</button>

        </div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            murmurs: [],
            currentUser: {},
            followingIds: []
        };
    },
    mounted() {
        this.fetchMurmurs(3);
        this.getFollowingIds();
        if (followingIds.length !== 0) {
            followingIds.map(function (id) {
                this.fetchMurmurs(id);
            }.bind(this));
        }
     
    },
    methods: {
        async getFollowingIds() {
            try {
                const response = await this.$axios.$get(`user/3`); //default current userid is 3
                this.currentUser = {
                    id: response.id,
                    following: response.following,
                };
                if (this.currentUser.following !== '') {
                    const IdArray = this.currentUser.following.split(',')
                    this.followingIds = [...IdArray]
                }

            } catch (error) {
                console.error('Error fetching user murmurs:', error);
            }
         

        },
        async fetchMurmurs(user_id) {
            try {
                const response = await this.$axios.$get(`murmur/user=${user_id}/murmurs`);
                this.murmurs = [
                    ...this.murmurs,
                    ...response.map(item => ({
                        id: item.id,
                        user_id: item.user_id,
                        username: 'User' + item.user_id,  // For simplicity, appending 'User' to user ID
                        description: item.description,
                        likes: item.likecount
                    }))
                ]
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },

        async likeMurmurHandler(id) {
            try {
                const response = await this.$axios.$patch(`murmur/${id}/like`)
                console.log(response)
     
            } catch (error) {
                console.error(error);
            }

        }

    }
};
</script>


<style scoped>
.murmur {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.murmur-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.username-link {
    font-weight: bold;
    color: #1877F2;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;
}

.username-link:hover {
    color: #1155cc;
}

.murmur-description {
    font-size: 16px;
    line-height: 1.5;
    color: #333333;
}

.timeline {
    width: 100%;
    max-width: 600px;
}

.murmur {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>