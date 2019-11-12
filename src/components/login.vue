<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 class="pt-3">
                <h3>Login</h3>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3 class="mt-3">
                <v-form v-model="valid" ref="form">
                    <h4>Login here</h4>
                    <v-text-field label="Email" v-model="user.email" :rules="emailrules" required></v-text-field>
                    <v-text-field label="Password" type="password" v-model="user.password" :rules="passwordrules" required></v-text-field>
                    <v-flex class="mt-3">
                        
                        <v-btn text to="/user" color="primary"> signup</v-btn><br/>
                <v-btn @click="login" class="mt-3">Login</v-btn>
                <v-btn class="ml-3 mt-3">cancel</v-btn>
                    </v-flex>
                </v-form>
                <v-dialog
      v-model="dialog"
      width="500"
    >
      
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Login failed
        
        </v-card-title>
        <v-card-text>
        invalid credentials
        Try again
        </v-card-text>
       

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="dialog = false"
           
          >
          Ok
          </v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
            </v-flex>
              
            
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';
const api = 'http://localhost:3000/api/accounts/login';
export default {
    
    data(){
        return {
            users:[],
            dialog:false,
           user:{
               email:'',
               password:''
           },
           token:'',
            emailrules:[
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
         passwordrules:[
            (v) => !!v || 'password is required',

        ],
        }
        
    },
    methods:{
       login(){
           this.$refs.form.validate();
           let credentials={
               email:this.user.email,
               password:this.user.password
           }
           axios.post(api,credentials)
           .then((res)=>{
               
               localStorage.setItem('token',res.data.id);
               this.$refs.form.reset();
               this.$store.commit("setAuthentication", true);
                this.$refs.form.reset();
               this.$router.push('/home');
           }).catch(()=>{
              
               this.dialog = true
               this.$refs.form.reset();
           })
        
           
    }
}
}
</script>

<style>

</style>
