<template>
<v-app>
  
  <compheader></compheader>
  <v-content>
  <router-view/>
  </v-content>
  <compfooter></compfooter>
</v-app>
</template>

<script>


export default {
  name: 'App',
  
  data: () => ({
    //
  }),
};
</script>


