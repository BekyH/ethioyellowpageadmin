<template>


   <header>
       
                
               <v-card color="#333333">
     <v-toolbar app color="deep purple darken-4" dark>
           
            
            <v-toolbar-title offset-2>{{title}}</v-toolbar-title>
         
         
            <v-flex  md6 offset-2>
                <v-toolbar-items >
            <v-btn text to="/home"><v-icon>fas fa-home</v-icon><span>Home</span></v-btn> 
             
            
             
           
            <v-btn text class="ml-2"  to="/register">
      <v-icon>fas fa-plus</v-icon><span>register</span>
    </v-btn>
    <v-btn text class="ml-2" to="/gallery"><v-icon>fas fa-images</v-icon><span>Gallery</span></v-btn>
    
                </v-toolbar-items>
            </v-flex>
           
        </v-toolbar> 
       
   
    
    
    <v-card-text class="white--text">
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </v-card-text>

    
  </v-card>
   </header>
       
       
   
   
</template>
<script>
export default {
    data(){
        return {
              title:'Admin page',
      
  }
      
    
    
}

}
</script>
<style>
.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
}

</style>



