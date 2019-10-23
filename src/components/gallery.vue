<template>
    
        <v-container>
            <v-layout>
                <v-flex md6>
                    
        <v-card>
            <v-flex class="row">

            <v-card-title>
                Gallery
            </v-card-title>
            <v-flex class="mt-3">
            <v-btn color="primary" @click="logImages()">Images</v-btn>
            </v-flex>
            </v-flex>
            <v-img v-for="(img,index) in im" :key="index" src="http://localhost:3000/api/images/container/files" alt="images"/> 
            
           
            <!-- <v-img :src="images"/> -->
          
            </v-card>
                </v-flex>
            <v-spacer></v-spacer>
        
            <v-flex md5>
            <v-card height="350px">

                <v-card-title>
                    Upload image
                </v-card-title>
                <v-flex offset-1 class="mt-2">
                <!-- <v-form>
                    <div class="text-field">
                    <v-text-field
                     
                    label="name"></v-text-field>
                     <label>File
        <input type="file" id="file" ref="file"/>
      </label>
                    </div>
                    <v-flex offset-3 style="margin-top:70px;"> 
                    <v-btn  color="primary" @click="submitImage">Submit</v-btn>
                    </v-flex>
                </v-form> -->

                <!-- <v-file-input label="upload image" ref="file"  v-on:change="handleFileUpload()"></v-file-input> -->
                <!-- <v-btn color="primary" v-on:click="submitFile()">Submit</v-btn> -->
                <label>File
        <input type="file" id="file" ref="file" accept="image/*" v-on:change="handleFileUpload()"/>
      </label>
      <v-flex class="mt-5">
      <v-btn v-on:click="submitFile()" color="primary">Submit</v-btn>
                </v-flex>
                </v-flex>
                <!-- <button @click="logImages()" >click this</button> -->
            </v-card>
            
            <button  @click="getImages()"  >click me</button> 
            </v-flex>
            </v-layout>
            </v-container>
    
</template>
<style>
.text-field{
    width: 70%;
}
</style>
<script>
const fs = require('browserify-fs');
import axios from 'axios';
import { get } from 'http';
const Api = 'http://localhost:3000/api/images/container/upload';
const Api2 = 'http://localhost:3000/api/images/container/files';
export default {
    data(){
      return {
        imageURL: '',
        images:[{}],
        im:[] ='http://localhost:3000/api/images/container/files',
        img:{
            filename:''
        }
      }
    },

    methods: {
      /*
        Submits the file to the server
      */
      submitFile(){
        /*
                Initialize the form data
            */
            let formData = new FormData();
            

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);
            
        /*
          Make the request to the POST /single-file URL
        */
            axios.post( Api,
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
        
      },

      /*
        Handles a change on the file upload
      */
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      },
      getImages(){
          
    
    
         axios.get(Api2,{responseType:'blob'})
        
         .then((res)=>{
            
             let reader = new FileReader();
            reader.readAsBinaryString(res.data);
             reader.onload=()=>{
                 this.images.push(reader.result);
                 
                 console.log(this.images);
               for(let img of this.images){
                   console.log(img);
               }
             }
             
         })
         .catch((err)=>console.log(err));


    //      axios({
    //     method: 'get',
    //     url: Api2,
    //     headers: {
    //       'Content-type': 'image/jpeg'
    //     }
       
    //  }).then(response => {

    //      this.image = response.data;
        
        // this.image = 'data:image/jpg;base64,'.concat(this.image.concat(response.data)); 

     //})

    },
    
    logImages(){
        this.getImages();
        console.log(this.images);
    }
    }

    
    

  }
</script>
