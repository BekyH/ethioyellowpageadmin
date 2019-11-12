<template>


   <header>
       
                
               <v-card color="#333333">
     <v-toolbar app color="primary" dark>
           
            
            <v-toolbar-title offset-2>{{title}}</v-toolbar-title>
         
         
            <v-flex  md6 offset-2>
                <v-toolbar-items >
                <div >                    
            <v-btn v-if="this.$route.path !== '/user' && this.$route.path!=='/login'" text to="/home"><v-icon>fas fa-home</v-icon><span>Home</span></v-btn> 
             
            
             
           
            <v-btn v-if="this.$route.path !== '/user' && this.$route.path!=='/login'" text class="ml-2"  to="/register">
      <v-icon>fas fa-plus</v-icon><span>register</span>
      
     
    </v-btn>
    
                </div>
                </v-toolbar-items>
            
                 
            </v-flex>
           <v-flex offset-3>
               <v-btn v-if="this.$route.path !== '/user' && this.$route.path!=='/login'" text to="/login" @click="logout"><v-icon>fas fa-signout</v-icon><span>Log out</span></v-btn>
           </v-flex>
        </v-toolbar> 
       
   
    
    
   
    
  </v-card>
   </header>
       
       
   
   
</template>
<script>
export default {
    data(){
        return {
              title:'Admin page',
      
  }
      
    
    
},
methods:{
    logout(){
        localStorage.removeItem('token');
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



