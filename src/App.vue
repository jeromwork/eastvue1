<template>

  <div id="nav">
      <DoctorSettings/>
  </div>

</template>

<script>
import DoctorSettings from './components/DoctorSettings'

export default {
  name: 'App',
  components: {
      DoctorSettings
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
