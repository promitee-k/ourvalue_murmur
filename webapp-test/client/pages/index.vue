<template>
  <div>
    <h1>Display the data obtained from API here</h1>
    {{ data }}
  </div>
</template>

<script lang="ts">
export default {
  async asyncData({ $axios }: { $axios: any }): Promise<object> {
    const res = await $axios.$post('/api/postTest')
    console.log(res)
    return {
      data: res,
    }
  },
  data() {
    return {}
  },
}
</script>
