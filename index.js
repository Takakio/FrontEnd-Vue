var app = new Vue({
    el: '#app',
    data: {
      message: "Message",
      stateName: "",
      states: [{"id":1,"nome":"Paraná"},{"id":2,"nome":"Rio de Janeiro"},{"id":3,"nome":"Bahia"},{"id":4,"nome":"Santa Catarina"}],
      estados: []
    },
    
    methods:{
        changeInputValue(event){
            console.log(event)
            this.message = event.target.value;
        },
        
        getStates(){
            this.states = [{"id":2,"nome":"Paraná"},{"id":3,"nome":"Rio de Janeiro"},{"id":4,"nome":"Bahia"},{"id":5,"nome":"Santa Catarina"}];
        },   
        

        addStateList(){
            const id = this.states.length + 1;
            this.states.push({
                id: id,
                nome: this.stateName
            });
        }
    
    },
   
    created(){
        console.log("Criou o componente")
        //this.getStates()
    }
  })