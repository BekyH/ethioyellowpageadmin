<template>


    <v-footer
    dark
    padless

  >
  <v-flex xs12>
    <v-card
      flat
      tile
      class="#333333 white--text text-center"
    >
     
    
      <v-layout>
        
      </v-layout>
      <v-divider></v-divider>
        <v-flex>
      <v-card-text class="white--text ">
        &copy; {{ new Date().getFullYear() }}  All rights reserved
      </v-card-text>
        </v-flex>
    </v-card>
  </v-flex>
  </v-footer>


</template>
<script>
export default {
    data(){
        return {
            icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
        
      ],
        }
    }
}
</script>

 

