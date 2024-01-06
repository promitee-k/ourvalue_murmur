<template>
    <div class="people-section">
        <h2 class="people-header">People You May Know Page</h2>
        <div v-for="person in people" :key="person.id" class="person">
            {{ person.name }}
            <button @click="follow(person.id)" class="follow-button">Follow</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            people: [
            
            ]
        };
    },
    mounted() {
        this.fetchUsers();
    },
    methods: {
       async fetchUsers(){
            try{
                const response = await this.$axios.$get(`/user`)
                this.people = response
                .filter(item => item.id !== 3) //current user id is 3
                .map(item =>({
                    id:item.id,
                    name:item.name
                }))
            }catch (error) {
                console.error('Error fetching users:', error);
            }
        },
        async follow(person) {
            // Logic to handle following a person
            try{
                await this.$axios.$patch(`user/3/${person}/follow`)
            }catch (error) {
                console.error('Error fetching users:', error);
            }
            console.log(`Following ${person.name}`);
        }
    }
};
</script>

<style scoped>
.people-section {
    width: 100%;
    max-width: 400px;
    margin-top: 40px;
}

.people-header {
    font-size: 20px;
    margin-bottom: 20px;
}

.person {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.follow-button {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}
</style>