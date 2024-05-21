<template>
  <div id="app">
    <PageHeader />
    <router-view></router-view>
    <FooterPage />
  </div>
</template>

<script>
import '../firebase.js';
import PageHeader from './components/PageHeader';
import FooterPage from './components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    FooterPage,
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
</style>
