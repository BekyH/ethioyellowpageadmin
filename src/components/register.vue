<template>

    <v-container>
<v-layout>
   <v-flex xs6>
        <v-subheader style="font-size:20px; margin-left:100px;">select companies Category to register</v-subheader>
      </v-flex>
     <v-flex xs6 offset-1>
       
      <v-select
         
        :items="options"
        v-model="selected"
        
        label="select category"
        single-line
        
      ></v-select>
   </v-flex>
</v-layout>

<v-layout v-if="selected==='Industries'" >
  
    <v-flex offset-1>
        <v-card >
            <v-flex offset-2>
                <v-card-title>
                    Register Industry
                </v-card-title>
    <v-form
    v-model="valid"
     ref="form"
    >
    <div class="textfield">
      <v-text-field
        v-model="industries.name"
        label="Name"
        :rules="nameRules"
        required
      ></v-text-field>

      <v-text-field
       v-model="industries.phoneNo"
        label=" phone no"
        :rules="phoneNoRules"
        required
      ></v-text-field>

      <v-text-field
      v-model="industries.email"
      label="FAX or web address"
      :rules="emailRules"
      required
      ></v-text-field>
       <v-text-field
       v-model="industries.city"
      label="location"
      :rules="cityRules"
      required
      ></v-text-field>
    
    </div>
    <v-card-actions>
      <v-btn
            
              align-center
              color="primary"
              @click="submitIndustryForm">
        Submit

      </v-btn>
    </v-card-actions>
     

    </v-form>
    
            </v-flex>
        </v-card>
    </v-flex>
  </v-layout>
  <v-layout v-if="selected==='Transport'" >
  
    <v-flex offset-1>
        <v-card >
            <v-flex offset-2>
                <v-card-title>
                    Register Transport organization
                </v-card-title>
    <v-form v-model="valid"
     ref="form"
    >
    <div class="textfield">
      <v-text-field
        v-model="transport.name"
        label="Name"
        :rules="nameRules"
        required
      ></v-text-field>

      <v-text-field
       v-model="transport.phoneNo"
        label=" phone no"
        :rules="phoneNoRules"
        required
      ></v-text-field>

      <v-text-field
      v-model="transport.email"
      label="FAX or web address"
      :rules="emailRules"
      required
      ></v-text-field>
       <v-text-field
       v-model="transport.city"
      label="location"
      :rules="cityRules"
      required
      ></v-text-field>
    
    </div>
    <v-card-actions>
      <v-btn
            
              align-center
              color="primary"
              @click="submitTransportForm">
        Submit

      </v-btn>
    </v-card-actions>
     

    </v-form>
    
            </v-flex>
        </v-card>
    </v-flex>
  </v-layout>
  <v-layout v-if="selected==='Health and medicine'" >
  
    <v-flex offset-1>
        <v-card >
            <v-flex offset-2>
                <v-card-title>
                    Register medical organization
                </v-card-title>
    <v-form
     ref="form"
     v-model="valid"
    >
    <div class="textfield">
      <v-text-field
        v-model="Health.name"
        label="Name"
        :rules="nameRules"
        required
      ></v-text-field>

      <v-text-field
       v-model="Health.phoneNo"
        label=" phone no"
        :rules="phoneNoRules"
        required
      ></v-text-field>

      <v-text-field
      v-model="Health.email"
      label="FAX or web address"
      :rules="emailRules"
      required
      ></v-text-field>
       <v-text-field
       v-model="Health.city"
       :rules="cityRules"
      label="location"
      required
      ></v-text-field>
    
    </div>
    <v-card-actions>
      <v-btn
            
              align-center
              color="primary"
              @click="submitHealthForm">
        Submit

      </v-btn>
    </v-card-actions>
     

    </v-form>
    
            </v-flex>
        </v-card>
    </v-flex>
  </v-layout>
  <v-layout v-if="selected==='Construction'" >
  
    <v-flex offset-1>
        <v-card >
            <v-flex offset-2>
                <v-card-title>
                    Register Construction Industry
                </v-card-title>
    <v-form
     ref="form"
     v-model="valid"
    >
    <div class="textfield">
      <v-text-field
        v-model="construction.name"
        label="Name"
        :rules="nameRules"
        required
      ></v-text-field>

      <v-text-field
       v-model="construction.phoneNo"
        label=" phone no"
        :rules="phoneNoRules"
        required
      ></v-text-field>

      <v-text-field
      v-model="construction.email"
      label="FAX or web address"
      :rules="emailRules"
      required
      ></v-text-field>
       <v-text-field
       v-model="construction.city"
      label="location"
      :rules="cityRules"
      required
      ></v-text-field>
    
    </div>
    <v-card-actions>
      <v-btn
            
              align-center
              color="primary"
              @click="submitConstructionForm">
        Submit

      </v-btn>
    </v-card-actions>
     

    </v-form>
    
            </v-flex>
        </v-card>
    </v-flex>
  </v-layout>
  <v-layout v-if="selected==='Communication'" >
  
    <v-flex offset-1>
        <v-card >
            <v-flex offset-2>
                <v-card-title>
                    Register Communication organization
                </v-card-title>
    <v-form
     ref="form"
     v-model="valid"
    >
    <div class="textfield">
      <v-text-field
        v-model="communication.name"
        label="Name"
        :rules="nameRules"
        required
      ></v-text-field>

      <v-text-field
       v-model="communication.phoneNo"
        label=" phone no"
        :rules="phoneNoRules"
        required
      ></v-text-field>

      <v-text-field
      v-model="communication.email"
      label="FAX or web address"
      :rules="emailRules"
      required
      ></v-text-field>
       <v-text-field
       v-model="communication.city"
      label="location"
      :rules="cityRules"
      required
      ></v-text-field>
    
    </div>
    <v-card-actions>
      <v-btn
            
              align-center
              color="primary"
              @click="submitCommunicationForm">
        Submit

      </v-btn>
    </v-card-actions>
     

    </v-form>
    
            </v-flex>
        </v-card>
    </v-flex>
  </v-layout>
  <v-layout v-if="selected==='Technology'" >
  
    <v-flex offset-1>
        <v-card >
            <v-flex offset-2>
                <v-card-title>
                    Register Technology company
                </v-card-title>
    <v-form
     ref="form"
     v-model="valid"
    >
    <div class="textfield">
      <v-text-field
        v-model="technology.name"
        label="Name"
        :rules="nameRules"
        required
      ></v-text-field>

      <v-text-field
       v-model="technology.phoneNo"
        label=" phone no"
        :rules="phoneNoRules"
        required
      ></v-text-field>

      <v-text-field
      v-model="technology.email"
      label="FAX or web address"
      :rules="emailRules"
      required
      ></v-text-field>
       <v-text-field
       v-model="technology.city"
      label="location"
      :rules="cityRules"
      required
      ></v-text-field>
    
    </div>
    <v-card-actions>
      <v-btn
            
              align-center
              color="primary"
              @click="submitTechnoForm">
        Submit

      </v-btn>
    </v-card-actions>
     

    </v-form>
    
            </v-flex>
        </v-card>
    </v-flex>
  </v-layout>
  <v-layout v-if="selected==='Tourism'" >
  
    <v-flex offset-1>
        <v-card >
            <v-flex offset-2>
                <v-card-title>
                    Register Tourism company
                </v-card-title>
    <v-form
     ref="form"
     v-model="valid"
    >
    <div class="textfield">
      <v-text-field
        v-model="Tourism.name"
        label="Name"
        :rules="nameRules"
        required
      ></v-text-field>

      <v-text-field
       v-model="Tourism.phoneNo"
        label=" phone no"
        :rules="phoneNoRules"
        required
      ></v-text-field>

      <v-text-field
      v-model="Tourism.email"
      label="FAX or web address"
      :rules="emailRules"
      required
      ></v-text-field>
       <v-text-field
       v-model="Tourism.city"
      label="location"
      :rules="cityRules"
      required
      ></v-text-field>
    
    </div>
    <v-card-actions>
      <v-btn
            
              align-center
              color="primary"
              @click="submitTourismForm">
        Submit

      </v-btn>
    </v-card-actions>
     

    </v-form>
    
            </v-flex>
        </v-card>
    </v-flex>
  </v-layout>
  
   <v-layout v-if="selected==='Bank and finanicials'">
  
    <v-flex offset-1>
        <v-card >
            <v-flex offset-2>
                <v-card-title>
                    Register finanicial organization
                </v-card-title>
    <v-form
     ref="form"
     v-model="valid"
    >
    <div class="textfield">
      <v-text-field
        v-model="Bank.name"
        label="Name"
        :rules="nameRules"
        required
      ></v-text-field>

      <v-text-field
       v-model="Bank.phoneNo"
        label=" phone no"
        :rules="phoneNoRules"
        required
      ></v-text-field>

      <v-text-field
      v-model="Bank.email"
      label="FAX or web address"
      :rules="emailRules"
      required
      ></v-text-field>
       <v-text-field
       v-model="Bank.city"
      label="location"
      :rules="cityRules"
      required
      ></v-text-field>
       
      
    </div>
    <v-card-actions>
      <v-btn
              align-center
              color="primary"
              @click="submitBankForm">
        Submit

      </v-btn>
    </v-card-actions>
     

    </v-form>
    
            </v-flex>
        </v-card>
    </v-flex>
  </v-layout>
    </v-container>

</template>
<style>
.textfield{
    width: 70%;
}
</style>
<script>
const APi = 'http://localhost:3000/api/banks';
const APi2 = 'http://localhost:3000/api/industries';
const APi8 = 'http://localhost:3000/api/Health';
const APi3 = 'http://localhost:3000/api/constructions';
const APi4 = 'http://localhost:3000/api/communications';
const APi5 = 'http://localhost:3000/api/transports';
const APi6 = 'http://localhost:3000/api/technologies';
const APi7 = 'http://localhost:3000/api/tourisms';
export default {
     data: () => ({

          valid: false,
       
        nameRules: [
          (v) => !!v || 'Name is required',
         
        ],
        phoneNoRules:[
            (v) => !!v || 'phoneno is required',
        
        ],
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
      
        ],
        cityRules:[
                        (v) => !!v || 'city is required',
          
        ],
        
        
         Bank:{
             name:'',
            phoneNo:'',
            email:'',
            city:'',
           
    //
         },
        industries:{
           name:'',
           phoneNo:'',
           email:'',
           city:''
         },
         
         transport:{
           name:'',
           phoneNo:'',
           email:'',
           city:'',
         },
         
          Health:{
            name:'',
           phoneNo:'',
           email:'',
           city:'',
          },
          
          construction:{
            name:'',
           phoneNo:'',
           email:'',
           city:'',
          },
            

            communication:{
              name:'',
           phoneNo:'',
           email:'',
           city:'',
            },
            
            technology:{
              name:'',
           phoneNo:'',
           email:'',
           city:'',
            },
            
            Tourism:{
               name:'',
           phoneNo:'',
           email:'',
           city:'',
            
            },
            
         
         selected:'Bank and finanicials',
             options:[
                'Bank and finanicials',
                'Industries',
                'Transport',
                'Health and medicine',
                'Construction',
                'Communication',
                'Technology',
                'Tourism'
            ],
            
		imageUrl: '',
		imageFile: ''
  }),
   
           
            methods:{
                submitHealthForm(){
                    this.$refs.form.validate();
                    let method;
                    fetch(APi8,{
                        headers:{
                            'Content-Type':'application/json'
                        },
                        method:'POST',
                        body:JSON.stringify(this.Health)

                    }).then(res=>res.json())
                    .then(res=>{
                       
                        this.$refs.form.reset();

                    })
                },
                submitTourismForm(){
                    this.$refs.form.validate();
                    let method;
                    fetch(APi7,{
                        headers:{
                            'Content-Type':'application/json'
                        },
                        method:'POST',
                        body:JSON.stringify(this.Tourism)

                    }).then(res=>res.json())
                    .then(res=>{
                       
                        this.$refs.form.reset();

                    })
                },
                submitTechnoForm(){
                    this.$refs.form.validate();
                    let method;
                    fetch(APi6,{
                        headers:{
                            'Content-Type':'application/json'
                        },
                        method:'POST',
                        body:JSON.stringify(this.technology)

                    }).then(res=>res.json())
                    .then(res=>{
                       
                        this.$refs.form.reset();

                    })
                },
                submitTransportForm(){
                    this.$refs.form.validate();
                    let method;
                    fetch(APi5,{
                        headers:{
                            'Content-Type':'application/json'
                        },
                        method:'POST',
                        body:JSON.stringify(this.transport)

                    }).then(res=>res.json())
                    .then(res=>{
                       
                        this.$refs.form.reset();

                    })
                },
               submitCommunicationForm(){
                    this.$refs.form.validate();
                    let method;
                    fetch(APi4,{
                        headers:{
                            'Content-Type':'application/json'
                        },
                        method:'POST',
                        body:JSON.stringify(this.communication)

                    }).then(res=>res.json())
                    .then(res=>{
                       
                        this.$refs.form.reset();

                    })
                },
                submitConstructionForm(){
                    this.$refs.form.validate();
                    let method;
                    fetch(APi3,{

                        
                        headers:{
                            'Content-Type':'application/json'
                        },
                        method:'POST',
                        body:JSON.stringify(this.construction)

                    }).then(res=>res.json())
                    .then(res=>{
                       
                        this.$refs.form.reset();

                    })
                },
                submitIndustryForm(){
                    this.$refs.form.validate();
                     let method;
                        fetch(APi2,{
                            headers:{
                                'Content-Type':'application/json'
                            },
                            method:'POST',
                            body:JSON.stringify(this.industries)
                        }).then(res=>res.json())
                          .then(res=>{
                             
                              this.$refs.form.reset();
                          });
                },
                submitBankForm(){
                    this.$refs.form.validate();
                        let method;
                        fetch(APi,{
                            headers:{
                                'Content-Type':'application/json'
                            },
                            method:'POST',
                            body:JSON.stringify(this.Bank)
                        }).then(res=>res.json())
                          .then(res=>{
                              
                              this.$refs.form.reset();
                          });
                },
               
            
            }
    
}
</script>
