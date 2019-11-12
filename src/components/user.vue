<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 class="pt-3">
                <h3>Register</h3>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3 class="mt-3">
                <v-form v-model="valid" ref="form">
                    <h4>Registeration form</h4>
                    <v-text-field label="Name" v-model="user.name" :rules="namerules" required></v-text-field>
                    <v-text-field label="Email" v-model="user.email" :rules="emailrules" required></v-text-field>
                    <v-text-field label="Password" v-model="user.password" type="password" :rules="passwordrules" required></v-text-field>
      
                    <v-flex class="mt-3">
                        <v-btn text color="primary" class="mt-3" to="/login">Login</v-btn> <br/>
                        <v-btn class="mt-3" @click="Register"> signup</v-btn>
                
                <v-btn class="ml-3 mt-3">cancel</v-btn>
                
            </v-flex>
                </v-form>
            </v-flex>
            
        </v-layout>
    </v-container>
</template>"

<script>
import axios from 'axios';
const api = 'http://localhost:3000/api/accounts';
export default {
    data(){
        return {
            valid:false,
            user:{
                name:'',
                email:'',
                password:''
            },
            cpassword:'',
            emailrules:[
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        passwordrules:[
            (v) => !!v || 'password is required',

        ],
        namerules:[
            (v) => !!v || 'Name is required',
        ]
        }
        
    },
    methods:{
        Register(){
             this.$refs.form.validate();
             let ceredentails={
                 name:this.user.name,
                 email:this.user.email,
                 password:this.user.password
             }
             axios.post(api,ceredentails)
             .then((res)=>{
                 console.log(res);
                 this.$refs.form.reset();
                 this.$router.push('/login');
             }).catch((err)=>console.log(err))
                    // let method;
                    // fetch(api,{
                    //     headers:{
                    //         'Content-Type':'application/json'
                    //     },
                    //     method:'POST',
                    //     body:JSON.stringify(this.user)

                    // }).then(res=>res.json())
                    // .then(res=>{
                       
                    //     this.$refs.form.reset();
                    //     this.$router.push('/login');
                    // })

            //  
            
           
           

        }
    }
}
</script>

<style>

</style>
