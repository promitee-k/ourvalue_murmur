<template>
    <div class="people-section">
        <h2 class="people-header">People You May Know</h2>
        <div v-for="person in people" :key="person.id" class="person">
            {{ person.name }}
            <button @click="follow(person)" class="follow-button">Follow</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            people: [
                { id: 1, name: 'Alice' },
                { id: 2, name: 'Bob' },
            ]
        };
    },
    methods: {
        follow(person) {
            // Logic to handle following a person
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