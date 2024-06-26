import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = 'https://nusaibah01.github.io/vue01/data/data.json'
export default createStore({
  state: {
  jobTitel: null,
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
  setjobTitel(state, value) {
    state.jobTitel = value
  },
  setabout(state, value) {
    state.about = value
  },
  seteducation(state, value) {
    state.education = value
  },
  setexperiancce(state, value){
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
   async fetchjobTitel(context) {
    try{
      let {jobTitel} = ( await axios.get(portfolioURL)).data
      context.commit("setjobTitel", jobTitel)
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
      

        
      }
  },
  modules: {
  }
})
