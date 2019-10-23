<template>


    <v-container>
        <v-content >
      <v-container fluid style="padding-top:10px; padding-left:50px;padding-right:50px fixed">
          <v-layout align-center color="white">
         <v-flex xs6>
        <v-subheader style="font-size:20px; margin-left:100px;">select companies Category</v-subheader>
      </v-flex>
    <v-flex xs3 >
       
      <v-select
         
        :items="options"
        v-model="selected"
        
        label="select category"
        single-line
      
      ></v-select>
    
      </v-flex>
      <v-flex>
      <v-btn v-if="selected==='Bank and finanicials'"
              align-center
              color="primary"
              style="margin-bottom:15px; margin-left:20px;"
              @click="getBank">
              view</v-btn> 
      <v-btn v-if="selected==='Industries'"
              align-center
              color="primary"
              style="margin-bottom:15px; margin-left:20px;"
              @click="getIndustry">
              view</v-btn> 
   <v-btn v-if="selected==='Transport'"
              align-center
              color="primary"
              style="margin-bottom:15px; margin-left:20px;"
              @click="getTransport">
              view</v-btn> 
               <v-btn v-if="selected==='Health and medicine'"
              align-center
              color="primary"
              style="margin-bottom:15px; margin-left:20px;"
              @click="getMedicine">
              view</v-btn>
              <v-btn v-if="selected==='Construction'"
              align-center
              color="primary"
              style="margin-bottom:15px; margin-left:20px;"
              @click="getConstruction">
              view</v-btn> 
              <v-btn v-if="selected==='Communication'"
              align-center
              color="primary"
              style="margin-bottom:15px; margin-left:20px;"
              @click="getCommunication">
              view</v-btn>
              <v-btn v-if="selected==='Technology'"
              align-center
              color="primary"
              style="margin-bottom:15px; margin-left:20px;"
              @click="getTechno">
              view</v-btn>
              <v-btn v-if="selected==='Toursim'"
              align-center
              color="primary" 
              style="margin-bottom:15px; margin-left:20px;"
              @click="getToursim">
              view</v-btn>
      </v-flex>
  </v-layout>
        <v-layout
          align-center 
          justify-center
        >
          <v-flex >
              <div v-if="selected==='Bank and finanicials'" >
               
              <v-card style="margin:10px; border-radius:15px; width:999px;" v-for="(Bank,index) in Banks" :key="index">
              <v-flex class="ml-5">
              <v-card-title >
                  <div>{{Bank.name}}</div>
              </v-card-title>
             <v-card-text class="pt-1">
               <v-icon size="18px"> fas fa-phone</v-icon>
               {{Bank.phoneNo}}
               
             </v-card-text>
               
              <v-card-text class="pt-1">
                <v-icon size="16px">fas fa-envelope</v-icon>
                    {{Bank.email}}
                  
                </v-card-text>
               <v-card-text class="pt-1">
                {{Bank.city}}
              </v-card-text>
              </v-flex>
              <v-flex offset-10 class="mb-2">
              
          <v-card-actions>
               
              <v-btn
          color="primary"
          dark
         
        
          v-on="on"
         
          @click="editBank(Bank)"
           @click.stop="dialog = true"
        >Edit
         </v-btn>
         <v-btn
              align-right
           
              color="primary"
            
              @click="deleteBank(Bank)"
              
              
               
              >
              Delete</v-btn>
         </v-card-actions>
              </v-flex>
         </v-card>
                 
             <v-dialog
      v-model="dialog"
      width="700"
    >
      
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Edit financial organization
        </v-card-title>
        <v-flex offset-1>
          <v-form >
            <div class="textfield">
      <v-text-field
      
      v-model="B.name" 
        required
      ></v-text-field>
       <v-text-field
       v-model="B.phoneNo"
       
        required
      ></v-text-field>
      <v-text-field
      v-model="B.email"
      required>
        
      </v-text-field>
     <v-text-field
     v-model="B.city"
     required>
       
     </v-text-field>
            </div>
          </v-form>
        </v-flex>
       

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="dialog = false"
           
          >
          Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="editedbank(B)"
           
           
          >
          Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
            </div>
            <div v-else-if="selected==='Industries'">
            <v-card style="margin:10px; border-radius:15px; width:999px;" v-for="(industry,index) in Industries" :key="index">
              <v-flex class="ml-5">
              <v-card-title >
                  <div>{{industry.name}}</div>
              </v-card-title>
              <v-card-text class="pt-1"> <v-icon size="18px">fas fa-phone</v-icon> {{industry.phoneNo}}</v-card-text>
              <v-card-text class="pt-1"> <v-icon size="16px">fas fa-envelope</v-icon> {{industry.email}}</v-card-text>
              <v-card-text class="pt-1">
                {{industry.city}}
              </v-card-text>
              </v-flex>
              <v-flex offset-10>
              <v-card-actions>
               
               <v-btn
              align-center
              color="primary"
              @click="editIndustry(industry)"
           @click.stop="dialog2 = true"
             
              >
              Edit</v-btn>
              <v-btn
              align-center
              color="primary"
              @click="deleteIndustry(industry)"
              
              >
              Delete</v-btn>
              </v-card-actions>
              </v-flex>
            </v-card>
            <v-dialog
      v-model="dialog2"
      width="700"
    >
      
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Edit Industry
        </v-card-title>
        <v-flex offset-1>
          <v-form >
            <div class="textfield">
      <v-text-field
      
      v-model="ind.name" 
        required
      ></v-text-field>
       <v-text-field
       v-model="ind.phoneNo"
       
        required
      ></v-text-field>
      <v-text-field
      v-model="ind.email"
      required>
        
      </v-text-field>
     <v-text-field
     v-model="ind.city"
     required>
       
     </v-text-field>
            </div>
          </v-form>
        </v-flex>
       

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="dialog2 = false"
           
          >
          Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="editedIndustry(ind)"
           
           
          >
          Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
            </div>
            <div v-else-if="selected==='Transport'">
            <v-card style="margin:10px; border-radius:15px; width:999px;" v-for="(transport,index) in transports" :key="index">
              <v-flex class="ml-5">
              <v-card-title >
                  <div>{{transport.name}}</div>
              </v-card-title>
                <v-card-text class="pt-1" > <v-icon size="18px">fas fa-phone</v-icon> {{transport.phoneNo}}</v-card-text>
                <v-card-text class="pt-1"> <v-icon size="16px">fas fa-envelope</v-icon> {{transport.email}}</v-card-text>
              <v-card-text class="pt-1">
                {{transport.city}}
              </v-card-text>
              </v-flex>
              <v-flex offset-10>
                <v-card-actions>
               
               <v-btn
              align-center
              color="primary"
              @click="editTransport(transport)"
              @click.stop="dialog5 = true"
             
              >
              Edit</v-btn>
              <v-btn
              align-center
              color="primary"
              @click="deleteTransport(transport)"
            
              >
              Delete</v-btn>
                </v-card-actions>
              </v-flex>
            </v-card>
             <v-dialog
      v-model="dialog5"
      width="700"
    >
      
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Edit Transport
        </v-card-title>
        <v-flex offset-1>
          <v-form >
            <div class="textfield">
      <v-text-field
      
      v-model="tr.name" 
        required
      ></v-text-field>
       <v-text-field
       v-model="tr.phoneNo"
       
        required
      ></v-text-field>
      <v-text-field
      v-model="tr.email"
      required>
        
      </v-text-field>
     <v-text-field
     v-model="tr.city"
     required>
       
     </v-text-field>
            </div>
          </v-form>
        </v-flex>
       

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="dialog5 = false"
           
          >
          Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="editedTransport(tr)"
           
           
          >
          Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
            </div>
            <div v-else-if="selected==='Health and medicine'">
            <v-card style="margin:10px; border-radius:15px; width:999px;" v-for="(medicine,index) in health" :key="index">
              <v-flex class="ml-5">
              <v-card-title >
                  <div>{{medicine.name}}</div>
              </v-card-title>
             <v-card-text class="pt-1"> <v-icon size="18px">fas fa-phone</v-icon> {{medicine.phoneNo}}</v-card-text>
             <v-card-text class="pt-1"> <v-icon size="16px">fas fa-envelope</v-icon> {{medicine.email}}</v-card-text>
              <v-card-text>
                {{medicine.city}}
              </v-card-text>
              </v-flex>
              <v-flex offset-10>
                <v-card-actions>
              
               
               <v-btn
              align-center
              color="primary"
               @click="editHealth(medicine)"
              @click.stop="dialog8 = true" 
              
              >
              Edit</v-btn>
              <v-btn
              align-center
              color="primary"
              @click="deleteHealth(medicine)"
            
              >
              Delete</v-btn>
                </v-card-actions>
              </v-flex>
            </v-card>
            
              <v-dialog
      v-model="dialog8"
      width="700"
    >
      
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Edit medical
        </v-card-title>
        <v-flex offset-1>
          <v-form >
            <div class="textfield">
      <v-text-field
      
      v-model="he.name" 
        required
      ></v-text-field>
       <v-text-field
       v-model="he.phoneNo"
       
        required
      ></v-text-field>
      <v-text-field
      v-model="he.email"
      required>
        
      </v-text-field>
     <v-text-field
     v-model="he.city"
     required>
       
     </v-text-field>
            </div>
          </v-form>
        </v-flex>
       

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="dialog8 = false"
           
          >
          Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="editedHealth(he)"
           
           
          >
          Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
            </div>
            <div v-else-if="selected==='Construction'">
            <v-card style="margin:10px; border-radius:15px; width:999px;" v-for="(constr,index) in constructions" :key="index">
              <v-flex class="ml-5">
              <v-card-title >
                  <div>{{constr.name}}</div>
              </v-card-title>
             <v-card-text class="pt-1"><v-icon size="18px">fas fa-phone</v-icon> {{constr.phoneNo}}</v-card-text>
             <v-card-text class="pt-1"> <v-icon size="16px">fas fa-envelope</v-icon> {{constr.email}}</v-card-text>
              <v-card-text class="pt-1">
                {{constr.city}}
              </v-card-text>
              </v-flex>
              <v-flex offset-10>
                <v-card-actions>
               
               <v-btn
           
              color="primary"
              @click="editConstruction(constr)"
              @click.stop="dialog3 = true"
            
              >
              Edit</v-btn>
              <v-btn
             
              color="primary"
             @click="deleteConstruction(constr)" 
             
              >
              Delete</v-btn>
                </v-card-actions>
              </v-flex>
            </v-card>
            <v-dialog
      v-model="dialog3"
      width="700"
    >
      
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Edit Construction
        </v-card-title>
        <v-flex offset-1>
          <v-form >
            <div class="textfield">
      <v-text-field
      
      v-model="con.name" 
        required
      ></v-text-field>
       <v-text-field
       v-model="con.phoneNo"
       
        required
      ></v-text-field>
      <v-text-field
      v-model="con.email"
      required>
        
      </v-text-field>
     <v-text-field
     v-model="con.city"
     required>
       
     </v-text-field>
            </div>
          </v-form>
        </v-flex>
       

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="dialog3 = false"
           
          >
          Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="editedConstruction(con)"
           
           
          >
          Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
            </div>
            <div v-else-if="selected==='Communication'">
            <v-card style="margin:10px; border-radius:15px; width:999px;" v-for="(comn,index) in communications" :key="index">
              <v-flex class="ml-5">
              <v-card-title >
                  <div>{{comn.name}}</div>
              </v-card-title>
             <v-card-text class="pt-1"> <v-icon size="18px">fas fa-phone</v-icon> {{comn.phoneNo}}</v-card-text>
             <v-card-text class="pt-1"> <v-icon size="16px">fas fa-envelope</v-icon> {{comn.email}}</v-card-text>
              <v-card-text>
                {{comn.city}}
              </v-card-text>
               
              </v-flex>
              <v-flex offset-10>
                <v-card-actions>
               
               <v-btn
              align-center
              color="primary"
              @click="editCommunication(comn)"
              @click.stop="dialog4 = true"
              
              >
              Edit</v-btn>
              <v-btn
             
              color="primary"
              @click="deleteCommunication(comn)"
              
              >
              Delete</v-btn>
                </v-card-actions>
              </v-flex>
            </v-card>
          
            <v-dialog
      v-model="dialog4"
      width="700"
    >
      
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Edit Communication
        </v-card-title>
        <v-flex offset-1>
          <v-form >
            <div class="textfield">
      <v-text-field
      
      v-model="com.name" 
        required
      ></v-text-field>
       <v-text-field
       v-model="com.phoneNo"
       
        required
      ></v-text-field>
      <v-text-field
      v-model="com.email"
      required>
        
      </v-text-field>
     <v-text-field
     v-model="com.city"
     required>
       
     </v-text-field>
            </div>
          </v-form>
        </v-flex>
       

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="dialog4 = false"
           
          >
          Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="editedCommunication(com)"
           
           
          >
          Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
            </div>
            <div v-else-if="selected==='Technology'">
            <v-card style="margin:10px; border-radius:15px; width:999px;" v-for="(techno,index) in technologies" :key="index">
             <v-flex class="ml-5">
              <v-card-title >
                  <div>{{techno.name}}</div>
              </v-card-title>
             <v-card-text class="pt-1"> <v-icon size="18px">fas fa-phone</v-icon> {{techno.phoneNo}}</v-card-text>
             <v-card-text class="pt-1"> <v-icon size="16px">fas fa-envelope</v-icon> {{techno.email}}</v-card-text>
              <v-card-text class="pt-1">
                {{techno.city}}
              </v-card-text>
             </v-flex>
              <v-flex offset-10>
              <v-card-actions>
               <v-btn
              align-center
              color="primary"
              @click="editTechno(techno)"
              @click.stop="dialog6 = true"
             
              >
              Edit</v-btn>
               <v-btn
              align-center
              color="primary"
              @click="deleteTechno(techno)"
            
              >
              Delete</v-btn>
              </v-card-actions>
              </v-flex>
            </v-card>
            <v-dialog
      v-model="dialog6"
      width="700"
    >
      
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Edit Technology
        </v-card-title>
        <v-flex offset-1>
          <v-form >
            <div class="textfield">
      <v-text-field
      
      v-model="tech.name" 
        required
      ></v-text-field>
       <v-text-field
       v-model="tech.phoneNo"
       
        required
      ></v-text-field>
      <v-text-field
      v-model="tech.email"
      required>
        
      </v-text-field>
     <v-text-field
     v-model="tech.city"
     required>
       
     </v-text-field>
            </div>
          </v-form>
        </v-flex>
       

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="dialog6 = false"
           
          >
          Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="editedTechno(tech)"
           
           
          >
          Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
            </div>
            <div v-else-if="selected==='Toursim'">
            <v-card class="elevation-20" height='100%' style="margin:10px; border-radius:15px;" v-for="(toursim,index) in toursims" :key="index">
               <v-flex class="ml-5">
              <v-card-title >
                  <div>{{toursim.name}}</div>
              </v-card-title>
             <v-card-text class="pt-1"><v-icon size="18px">fas fa-phone</v-icon> {{toursim.phoneNo}}</v-card-text>
             <v-card-text class="pt-1"> <v-icon size="16px">fas fa-envelope</v-icon> {{toursim.email}}</v-card-text>
              <v-card-text class="pt-1">
                {{toursim.city}}
              </v-card-text>
               </v-flex>
              <v-flex offset-10>
                <v-card-actions>
               
               <v-btn
              align-center
              color="primary"
              @click="editToursim(toursim)"
              @click.stop="dialog7 = true"
              
              >
              Edit</v-btn>
              <v-btn
              align-center
              color="primary"
              @click="deleteTourism(toursim)"
              
              >
              Delete</v-btn>
                </v-card-actions>
              </v-flex>
            </v-card>
            <v-dialog
      v-model="dialog7"
      width="700"
    >
      
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Edit Tourism
        </v-card-title>
        <v-flex offset-1>
          <v-form >
            <div class="textfield">
      <v-text-field
      
      v-model="tour.name" 
        required
      ></v-text-field>
       <v-text-field
       v-model="tour.phoneNo"
       
        required
      ></v-text-field>
      <v-text-field
      v-model="tour.email"
      required>
        
      </v-text-field>
     <v-text-field
     v-model="tour.city"
     required>
       
     </v-text-field>
            </div>
          </v-form>
        </v-flex>
       

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="dialog7 = false"
           
          >
          Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="editedToursim(tour)"
           
           
          >
          Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
            </div>
          </v-flex>
        </v-layout>
      </v-container>

    
    </v-content>
    </v-container>
    
</template>
<script>
import axios from 'axios';
const APi = 'http://localhost:3000/api/banks';
const APi2 = 'http://localhost:3000/api/industries';
const APi8 = 'http://localhost:3000/api/Health';
const APi3 = 'http://localhost:3000/api/constructions';
const APi4 = 'http://localhost:3000/api/communications';
const APi5 = 'http://localhost:3000/api/transports';
const APi6 = 'http://localhost:3000/api/technologies';
const APi7 = 'http://localhost:3000/api/tourisms';
import { get } from 'http';
export default {
    data(){
        return {
          clicked:false,
            selected:'',
            dialog: false,
            dialog1:false,
            dialog2:false,
            dialog3:false,
            dialog4:false,
            dialog5:false,
            dialog6:false,
            dialog7:false,
            dialog8:false,
             options:[
                'Bank and finanicials',
                'Industries',
                'Transport',
                'Health and medicine',
                'Construction',
                'Communication',
                'Technology',
                'Toursim'
            ],
            Banks:[],
            Bank:{
             name:'',
            phoneNo:'',
            email:'',
            city:''
    //
         },
         B:{
           name:'',
           phoneNo:'',
           email:'',
           city:''

         },
         
       
         industries:{
           name:'',
           phoneNo:'',
           email:'',
           city:''
         },
         ind:{
           name:'',
           phoneNo:'',
           email:'',
           city:''
         },
         Industries:[],
         transport:{
           name:'',
           phoneNo:'',
           email:'',
           city:'',
         },
         tr:{
           name:'',
           phoneNo:'',
           email:'',
           city:''
         },
         transports:[],
          Health:{
            name:'',
           phoneNo:'',
           email:'',
           city:'',
          },
          he:{
            name:'',
            phoneNo:'',
            email:'',
            city:''
          },
          health:[],
          construction:{
            name:'',
           phoneNo:'',
           email:'',
           city:'',
          },
          con:{
            name:'',
            phoneNo:'',
            email:'',
            city:''
          },
            constructions:[],

            communication:{
              name:'',
           phoneNo:'',
           email:'',
           city:'',
            },
            com:{
              name:'',
              phoneNo:'',
              email:'',
              city:''
            },
            communications:[],
            technology:{
              name:'',
           phoneNo:'',
           email:'',
           city:'',
            },
            tech:{
              name:'',
              phoneNo:'',
              email:'',
              city:''
            },
            technologies:[],
            tourism:{
               name:'',
           phoneNo:'',
           email:'',
           city:'',
            
            },
            tour:{
              name:'',
              phoneNo:'',
              email:'',
              city:''
            },
            toursims:[],
            btntitle:"see phones and emails",
            
        }
    },
    methods:{
      
         getBank(){
           fetch(APi)
                     .then(res=>res.json())
                    
                    
                    .then(res=>this.Banks=res)

                    .catch((err)=>console.log(err))
                    
                    
                    
                },
                getIndustry(){
                  fetch(APi2)
                  .then(res=>res.json())
                    
                    
                    .then(res=>this.Industries=res);
                },
               
                getConstruction(){
                  fetch(APi3)
                  .then(res=>res.json())
                  .then(res=>this.constructions=res);
                  
                
                },
                
                getCommunication(){
                  fetch(APi4)
                  .then(res=>res.json())
                    
                    
                    .then(res=>this.communications=res);
                },
                getTransport(){
                  fetch(APi5)
                  .then(res=>res.json())
                    
                    
                    .then(res=>this.transports=res);
                },
                getTechno(){
                  fetch(APi6)
                  .then(res=>res.json())
                    
                    
                    .then(res=>this.technologies=res);
                },
                getToursim(){
                  fetch(APi7)
                  .then(res=>res.json())
                    
                    
                    .then(res=>this.toursims=res);
                },
                getMedicine(){
                  fetch(APi8)
                  .then(res=>res.json())
                    
                    
                    .then(res=>this.health=res);
                },
                deleteBank(Bank){
                  fetch(APi + '/'+ Bank.id, {

				headers:{
					'Content-Type':'application/json'
				},
				method:'DELETE'
			})
			.then(res => res.json())
			.then(res => {
				this.getBank();
			});
                },
                deleteIndustry(industry){
                  fetch(APi2 + '/' + industry.id, {
				headers:{
					'Content-Type':'application/json'
				},
				method:'DELETE'
			})
			.then(res => res.json())
			.then(res => {
				this.getIndustry();
			});
                },
                 deleteConstruction(construction){
                  fetch(APi3 + '/' + construction.id, {
				headers:{
					'Content-Type':'application/json'
				},
				method:'DELETE'
			})
			.then(res => res.json())
			.then(res => {
				this.getConstruction();
			});
                },
                 deleteCommunication(communication){
                  fetch(APi4 + '/' + communication.id, {
				headers:{
					'Content-Type':'application/json'
				},
				method:'DELETE'
			})
			.then(res => res.json())
			.then(res => {
				this.getCommunication();
			});
                },
                 deleteTransport(transport){
                  fetch(APi5 + '/' + transport.id, {
				headers:{
					'Content-Type':'application/json'
				},
				method:'DELETE'
			})
			.then(res => res.json())
			.then(res => {
				this.getTransport();
			});
                },
                 deleteTechno(techno){
                  fetch(APi6 + '/' + techno.id, {
				headers:{
					'Content-Type':'application/json'
				},
				method:'DELETE'
			})
			.then(res => res.json())
			.then(res => {
				this.getTechno();
			});
                },
                 deleteTourism(toursim){
                  fetch(APi7 + '/' + toursim.id, {
				headers:{
					'Content-Type':'application/json'
				},
				method:'DELETE'
			})
			.then(res => res.json())
			.then(res => {
				this.getToursim();
			});
                },
                 deleteHealth(health){
                  fetch(APi8 + '/' + health.id, {
				headers:{
					'Content-Type':'application/json'
				},
				method:'DELETE'
			})
			.then(res => res.json())
			.then(res => {
				this.getMedicine();
			});
                },
                 editBank(Bank){
                  
                   
                   fetch(APi + '/' + Bank.id)
                  .then(res=>res.json())
                  .then(res=>{
                 
                    this.B = res;
                    
                    

                  })
                  
                  
                  
                
             },editedbank(B){
                 axios.put(APi + '/',B);
                  this.getBank();
                  this.dialog = false;
             },
             editIndustry(industry){
               fetch(APi2 + '/' + industry.id)
               .then(res=>res.json())
               .then(res=>{
                 this.ind= res;
               })

             },
             editedIndustry(ind){
               axios.put(APi2 + '/' ,ind)
               this.getIndustry();
               this.dialog2 = false;
             },
             editConstruction(constr){
                fetch(APi3 + '/' + constr.id)
                .then((res)=>res.json())
                .then(res=>{
                  this.con = res;
                });
             },
             editedConstruction(con){
               axios.put(APi3 + '/' ,con);
               this.getConstruction();
               this.dialog3 = false;

             },
             editCommunication(communication){
                fetch(APi4 + '/' + communication.id)
                .then((res)=>res.json())
                .then(res=>{
                  this.com = res;
                });
             },
             editedCommunication(com){
               axios.put(APi4 + '/', com)
               this.getCommunication();
               this.dialog4 = false;
             },
             editTransport(transport)
             {
               fetch(APi5 + '/' + transport.id)
               .then(res=>res.json())
               .then(res=>this.tr = res);

             },
             editedTransport(tr){
               axios.put(APi5 + '/',tr)
              this.dialog5 = false;
             },
              editHealth(health){
                  
                   
                   fetch(APi8 + '/' + health.id)
                  .then(res=>res.json())
                  .then(res=>{
                 
                    this.he = res;
                    
                    

                  })
                  
                  
                  
                
             },editedHealth(he){
                 axios.put(APi8 + '/',he);
                  this.getMedicine();
                  this.dialog8 = false;
             },
              editTechno(techno){
                  
                   
                   fetch(APi6 + '/' + techno.id)
                  .then(res=>res.json())
                  .then(res=>{
                 
                    this.tech = res;
                    
                    

                  })
                  
                  
                  
                
             },editedTechno(tech){
                 axios.put(APi6 + '/',tech);
                  
                  this.dialog = false;
                  this.getTechno();
             },
              editToursim(tourism){
                  
                   
                   fetch(APi7 + '/' + tourism.id)
                  .then(res=>res.json())
                  .then(res=>{
                 
                    this.tour = res;
                    
                    

                  })
                  
                  
                  
                
             },editedToursim(tour){
                 axios.put(APi7 + '/',tour);
                  
                  
                  this.getToursim();
                  this.dialog7 = false;
             },
   
          
          
        }

    }

</script>
