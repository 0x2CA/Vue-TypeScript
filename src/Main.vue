<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Main extends Vue {
  async mounted() {
    let mockResult = await this.$http.post("/api/test");
    console.log(mockResult);
  }
}
</script>

<style lang="less">
</style>
