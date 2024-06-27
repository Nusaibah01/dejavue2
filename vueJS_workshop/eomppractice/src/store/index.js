import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = 'https://nusaibah01.github.io/vue01/data/data.json'
export default createStore({
  state: {
  jobTitle: null,
  about: null,
  education: null,
  experiance: null,
  skills: null,
  testimonials: null,
  projects: null
  },
  getters: {
  },
  mutations: {
  setjobTitle(state, value) {
    state.jobTitle = value
  },
  setabout(state, value) {
    state.about = value
  },
  seteducation(state, value) {
    state.education = value
  },
  setexperiance(state, value){
    state.experiance = value
  },
  setskills(state, value){
    state.skills = value
  },
  settestimonials(state, value) {
    state.testimonials = value
  },
  setprojects(state, value) {
    state.projects = value
  }

  },
  actions: {
   async fetchJobTitle(context) {
    try{
      let {jobTitle} = await ( await axios.get(portfolioURL)).data
      context.commit("setjobTitle", jobTitle)
    }catch(e) {
     Swal.fire({
    title: "Error",
    text: "Failed to fetch data",
    icon: "error",
    timer: 2000
   })
    }
      
    },
    async fetchAbout(context) {
      try{
        let {about} = ( await axios.get(portfolioURL)).data
        context.commit(" setabout", about)
      }catch(e) {
       Swal.fire({
      title: "Error",
      text: "Failed to fetch data",
      icon: "error",
      timer: 2000
     })
      }
      

        
      },
      async fetchEducation(context) {
        try{
          let {education} = ( await axios.get(portfolioURL)).data
          context.commit(" seteducation", education)
        }catch(e) {
         Swal.fire({
        title: "Error",
        text: "Failed to fetch data",
        icon: "error",
        timer: 2000
       })
        }
        
  
          
        },
        async fetchExperiance(context) {
          try{
            let {experiance} = ( await axios.get(portfolioURL)).data
            context.commit("setexperiance", experiance)
          }catch(e) {
           Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
         })
          }
          
    
            
          },
          async fetchSkills(context) {
            try{
              let {skills} = ( await axios.get(portfolioURL)).data
              context.commit("setskills", skills)
            }catch(e) {
             Swal.fire({
            title: "Error",
            text: "Failed to fetch data",
            icon: "error",
            timer: 2000
           })
            }
            
      
              
            },
            async fetchTestimonials(context) {
              try{
                let {testimonials} = ( await axios.get(portfolioURL)).data
                context.commit("settestimonials", testimonials)
              }catch(e) {
               Swal.fire({
              title: "Error",
              text: "Failed to fetch data",
              icon: "error",
              timer: 2000
             })
              }
              
        
                
              },
              async fetchProjects(context) {
                try{
                  let {projects} = ( await axios.get(portfolioURL)).data
                  context.commit("setprojects", projects)
                }catch(e) {
                 Swal.fire({
                title: "Error",
                text: "Failed to fetch data",
                icon: "error",
                timer: 2000
               })
                }
                
          
                  
                },
  },
  modules: {
  }
})
