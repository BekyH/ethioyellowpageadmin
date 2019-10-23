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
      <v-card-text>
        <v-flex>
        <v-btn
        
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
        </v-flex>
      </v-card-text>
    <v-layout>
       <v-flex  md4>
          <v-card-text>
             Lorem ipsum dolor sit amet, <br>consectetur adipiscing elit
          </v-card-text>
          
        </v-flex>
       
      <v-flex md4 offset-3>
        
            <v-card-text class="pt-1">
              contact us
            </v-card-text>
        <v-card-text class="pt-1">
           <v-icon class="black--text pr-1"> fas fa-phone</v-icon> <span>+251925310203</span>
          </v-card-text>
          <v-card-text class="pt-1">
           
          
          <v-icon class="black--text pr-1"> fas fa-envelope</v-icon> <span> beky@gmail.com</span>
        </v-card-text>
          
      </v-flex>
       
      </v-layout>
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

 

